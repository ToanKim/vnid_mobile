import React, {PureComponent} from 'react';
import {PanResponder, View} from 'react-native';
import Svg, {
    Circle,
    G,
    LinearGradient,
    Path,
    Defs,
    Stop,
} from 'react-native-svg';
import _ from 'lodash';
import {interpolateHcl as interpolateGradient} from 'd3-interpolate';
import ClockFace from './ClockFace';

function calculateArcColor(
    index0: number,
    segments: number,
    gradientColorFrom: any,
    gradientColorTo: any,
) {
    const interpolate = interpolateGradient(gradientColorFrom, gradientColorTo);

    return {
        fromColor: interpolate(index0 / segments),
        toColor: interpolate((index0 + 1) / segments),
    };
}

function calculateArcCircle(
    index0: number,
    segments: number,
    radius: number,
    startAngle0 = 0,
    angleLength0 = 2 * Math.PI,
) {
    // Add 0.0001 to the possible angle so when start = stop angle, whole circle is drawn
    const startAngle = startAngle0 % (2 * Math.PI);
    const angleLength = angleLength0 % (2 * Math.PI);
    const index = index0 + 1;
    const fromAngle = (angleLength / segments) * (index - 1) + startAngle;
    const toAngle = (angleLength / segments) * index + startAngle;
    const fromX = radius * Math.sin(fromAngle);
    const fromY = -radius * Math.cos(fromAngle);
    const realToX = radius * Math.sin(toAngle);
    const realToY = -radius * Math.cos(toAngle);

    // add 0.005 to start drawing a little bit earlier so segments stick together
    const toX = radius * Math.sin(toAngle + 0.005);
    const toY = -radius * Math.cos(toAngle + 0.005);

    return {
        fromX,
        fromY,
        toX,
        toY,
        realToX,
        realToY,
    };
}

function getGradientId(index: number) {
    return `gradient${index}`;
}

export interface IProps {
    onUpdate: any;
    startAngle: number;
    angleLength: number;
    segments: number;
    strokeWidth: number;
    radius: number;
    gradientColorFrom: string;
    gradientColorTo: string;
    showClockFace: boolean;
    clockFaceColor: string;
    bgCircleColor: string;
    stopIcon: any;
    startIcon: any;
}

export default class CircularSlider extends PureComponent<IProps> {
    static defaultProps = {
        segments: 5,
        strokeWidth: 40,
        radius: 145,
        gradientColorFrom: '#ff9800',
        gradientColorTo: '#ffcf00',
        clockFaceColor: '#9d9d9d',
        bgCircleColor: '#171717',
    };
    constructor(props: any) {
        super(props);
        this._sleepPanResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt: any, gestureState: any) => true,
            onMoveShouldSetPanResponderCapture: (evt: any, gestureState: any) =>
                true,

            onPanResponderMove: (evt, {moveX, moveY}) => {
                const {circleCenterX, circleCenterY} = this.state;
                const {angleLength, startAngle, onUpdate} = this.props;

                const currentAngleStop =
                    (startAngle + angleLength) % (2 * Math.PI);
                let newAngle =
                    Math.atan2(moveY - circleCenterY, moveX - circleCenterX) +
                    Math.PI / 2;

                if (newAngle < 0) {
                    newAngle += 2 * Math.PI;
                }

                let newAngleLength = currentAngleStop - newAngle;

                if (newAngleLength < 0) {
                    newAngleLength += 2 * Math.PI;
                }

                onUpdate({
                    startAngle: newAngle,
                    angleLength: newAngleLength % (2 * Math.PI),
                });
            },
        });

        this._wakePanResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderMove: (evt, {moveX, moveY}) => {
                const {circleCenterX, circleCenterY} = this.state;
                const {angleLength, startAngle, onUpdate} = this.props;

                let newAngle =
                    Math.atan2(moveY - circleCenterY, moveX - circleCenterX) +
                    Math.PI / 2;
                let newAngleLength = (newAngle - startAngle) % (2 * Math.PI);

                if (newAngleLength < 0) {
                    newAngleLength += 2 * Math.PI;
                }

                onUpdate({startAngle, angleLength: newAngleLength});
            },
        });
    }
    state: any = {
        circleCenterX: false,
        circleCenterY: false,
    };

    onLayout = () => {
        this.setCircleCenter();
    };

    setCircleCenter = () => {
        this._circle.measure(
            (x: any, y: any, w: any, h: any, px: any, py: any) => {
                const halfOfContainer = this.getContainerWidth() / 2;
                this.setState({
                    circleCenterX: px + halfOfContainer,
                    circleCenterY: px - px / 2.4 + halfOfContainer,
                });
            },
        );
    };

    getContainerWidth() {
        const {strokeWidth, radius} = this.props;
        return strokeWidth + radius * 2 + 2;
    }

    render() {
        const {
            startAngle,
            angleLength,
            segments,
            strokeWidth,
            radius,
            gradientColorFrom,
            gradientColorTo,
            bgCircleColor,
            showClockFace,
            clockFaceColor,
            startIcon,
            stopIcon,
        } = this.props;

        const containerWidth = this.getContainerWidth();

        const start = calculateArcCircle(
            0,
            segments,
            radius,
            startAngle,
            angleLength,
        );
        const stop = calculateArcCircle(
            segments - 1,
            segments,
            radius,
            startAngle,
            angleLength,
        );

        return (
            <View
                key={props.scrollY}
                style={{width: containerWidth, height: containerWidth}}
                onLayout={this.onLayout}>
                <Svg
                    height={containerWidth}
                    width={containerWidth}
                    ref={circle => (this._circle = circle)}>
                    <Defs>
                        {_.range(segments).map(i => {
                            const {fromX, fromY, toX, toY} = calculateArcCircle(
                                i,
                                segments,
                                radius,
                                startAngle,
                                angleLength,
                            );
                            const {fromColor, toColor} = calculateArcColor(
                                i,
                                segments,
                                gradientColorFrom,
                                gradientColorTo,
                            );
                            return (
                                <LinearGradient
                                    key={i}
                                    id={getGradientId(i)}
                                    x1={fromX.toFixed(2)}
                                    y1={fromY.toFixed(2)}
                                    x2={toX.toFixed(2)}
                                    y2={toY.toFixed(2)}>
                                    <Stop offset="0%" stopColor={fromColor} />
                                    <Stop offset="1" stopColor={toColor} />
                                </LinearGradient>
                            );
                        })}
                    </Defs>

                    {/*
            ##### Circle
          */}

                    <G
                        transform={{
                            translate: `${strokeWidth / 2 +
                                radius +
                                1}, ${strokeWidth / 2 + radius + 1}`,
                        }}>
                        <Circle
                            r={radius}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            stroke={bgCircleColor}
                        />
                        {showClockFace && (
                            <ClockFace
                                r={radius - strokeWidth / 2}
                                stroke={clockFaceColor}
                            />
                        )}
                        {_.range(segments).map(i => {
                            const {fromX, fromY, toX, toY} = calculateArcCircle(
                                i,
                                segments,
                                radius,
                                startAngle,
                                angleLength,
                            );
                            const d = `M ${fromX.toFixed(2)} ${fromY.toFixed(
                                2,
                            )} A ${radius} ${radius} 0 0 1 ${toX.toFixed(
                                2,
                            )} ${toY.toFixed(2)}`;

                            return (
                                <Path
                                    d={d}
                                    key={i}
                                    strokeWidth={strokeWidth}
                                    stroke={`url(#${getGradientId(i)})`}
                                    fill="transparent"
                                />
                            );
                        })}

                        {/*
              ##### Stop Icon
            */}

                        <G
                            fill={gradientColorTo}
                            transform={{translate: `${stop.toX}, ${stop.toY}`}}
                            onPressIn={() =>
                                this.setState({
                                    angleLength: angleLength + Math.PI / 2,
                                })
                            }
                            {...this._wakePanResponder.panHandlers}>
                            <Circle
                                r={(strokeWidth - 1) / 2}
                                fill={bgCircleColor}
                                stroke={gradientColorTo}
                                strokeWidth="1"
                            />
                            {stopIcon}
                        </G>

                        {/*
              ##### Start Icon
            */}

                        <G
                            fill={gradientColorFrom}
                            transform={{
                                translate: `${start.fromX}, ${start.fromY}`,
                            }}
                            onPressIn={() =>
                                this.setState({
                                    startAngle: startAngle - Math.PI / 2,
                                    angleLength: angleLength + Math.PI / 2,
                                })
                            }
                            {...this._sleepPanResponder.panHandlers}>
                            <Circle
                                r={(strokeWidth - 1) / 2}
                                fill={bgCircleColor}
                                stroke={gradientColorFrom}
                                strokeWidth="1"
                            />
                            {startIcon}
                        </G>
                    </G>
                </Svg>
            </View>
        );
    }
}
