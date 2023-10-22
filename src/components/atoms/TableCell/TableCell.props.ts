import { Bet } from './../../../services/bets/bets.types';

export interface TableCellProps {
    content: string | number;
    bet?: Bet;
    isO?: boolean;
    isStickyHeader?: boolean;
    index?: number;
}
