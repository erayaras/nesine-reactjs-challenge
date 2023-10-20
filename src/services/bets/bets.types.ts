type BetOption = {
    ID: string;
    O: string;
    N: string;
    MBS: string;
    G: string;
    OD: number;
    IMF: boolean;
};

type BetCategory = {
    ID: string;
    N: string;
    MBS: string;
    SO: number;
    OC: Record<string, BetOption>;
};

export type Bet = {
    C: string;
    N: string;
    TYPE: string;
    NID: string;
    D: string;
    T: string;
    DAY: string;
    S: string;
    LN: string;
    IMF: boolean;
    OCG: Record<string, BetCategory>;
    HEC: boolean;
};

