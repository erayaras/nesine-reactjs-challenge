import React, { createContext, useReducer, useContext } from 'react';

type Bet = {
    MBS: string;
    C: string;
    N: string;
    O: number;
    index?: number;
    ID: string;
};

type State = {
    selectedBets: Bet[];
    totalAmount: number;
};

type Action =
    | { type: 'ADD_BET'; payload: Bet }
    | { type: 'REMOVE_BET'; payload: Bet };

const initialState: State = {
    selectedBets: [],
    totalAmount: 0,
};

const BetContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => undefined,
});

const betReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_BET':
            // Remove any existing bet from the same row (based on the C value)
            const filteredBets = [...state.selectedBets.filter(bet => bet.C !== action.payload.C), action.payload];

            // Calculate the totalAmount using all selected bets
            const multipliedTotal = filteredBets.reduce((acc, bet) => acc * bet.O, 1);

            return {
                ...state,
                selectedBets: filteredBets,
                totalAmount: parseFloat(multipliedTotal.toFixed(2))
            };

        case 'REMOVE_BET':
            const updatedBets = state.selectedBets.filter(
                (bet) => !(bet.C === action.payload.C && bet.ID === action.payload.ID)
            );

            // Calculate the new total after removing a bet
            const newTotal = updatedBets.length > 0
                ? updatedBets.reduce((acc, bet) => acc * bet.O, 1)
                : 0; // If there are no selected bets after removing, set totalAmount to 0

            return {
                ...state,
                selectedBets: updatedBets,
                totalAmount: parseFloat(newTotal.toFixed(2))
            };
        default:
            return state;
    }
};




export const BetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(betReducer, initialState);

    return (
        <BetContext.Provider value={{ state, dispatch }}>
            {children}
        </BetContext.Provider>
    );
};

export const useBet = () => useContext(BetContext);
