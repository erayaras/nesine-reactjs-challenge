import { Bet } from './../../../services/bets/bets.types';

export interface TableCellProps {
    index?: number;
    content: string | number;
    bet?: Bet;
    isO?: boolean;
}
