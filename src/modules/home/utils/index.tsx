import React from 'react';
import CardCombo from '../components/CardCombo';
import CardResult from '../components/CardResult';

const MAP_CARD: Record<string, string> = {
    RESULT: 'result',
    FOR_YOU: 'for you',
    BEST_REVIEW: 'best review',
};

export const getHomeCard = (type: string): object => {
    switch (type) {
        case MAP_CARD.RESULT: {
            return {
                itemWidth: 210,
                renderItem: ({item}: {item: any}) => <CardResult data={item} />,
            };
        }
        case MAP_CARD.FOR_YOU:
        case MAP_CARD.BEST_REVIEW:
            return {
                itemWidth: 290,
                itemHeight: 1800,
                renderItem: ({item}: {item: any}) => <CardCombo data={item} />,
            };
        default:
            return {
                itemWidth: 290,
                itemHeight: 1800,
                renderItem: ({item}: {item: any}) => <CardCombo data={item} />,
            };
    }
};
