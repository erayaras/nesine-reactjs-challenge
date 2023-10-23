import { Bet } from './../../../services/bets/bets.types';
import React from 'react';

export interface TableCellProps {
    content: string | number | React.ReactNode;
    bet?: Bet;
    isO?: boolean;
    isStickyHeader?: boolean;
    index?: number;
}
