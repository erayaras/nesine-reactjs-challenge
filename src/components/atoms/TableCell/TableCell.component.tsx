import React from 'react';
import { TableCellProps } from './TableCell.props';
import styles from './TableCell.module.scss';
import { useBet } from '../../../contexts/BetContext';

const TableCell: React.FC<TableCellProps> = ({ content, bet, isO, isStickyHeader, index }) => {
    const { state, dispatch } = useBet();

    /**
     * Handles the click event on the TableCell.
     * If the cell represents a bet option (isO) and the bet data is available, 
     * it dispatches either the ADD_BET or REMOVE_BET action based on the current state.
     */
    const handleBetClick = () => {
        if (bet && bet.OCG && bet.OCG[1] && index !== undefined) { // Added a check for index !== undefined
            const MBS = bet.OCG[1].MBS;
            const { C, N } = bet; // Extracting the required C and N properties from the bet object
            const parsedO = parseFloat(content.toString());

            if (isSelected(C, index)) {
                dispatch({ type: 'REMOVE_BET', payload: { MBS, C, N, O: parsedO, index } });
            } else {
                dispatch({ type: 'ADD_BET', payload: { MBS, C, N, O: parsedO, index } });
            }
        }
    };

    /**
     * Checks if a particular bet is selected in the current state.
     * 
     * @param {string} C - The C value (bet category identifier) of the bet.
     * @param {number} index - The index of the bet in the list.
     * @returns {boolean} - Returns true if the bet is selected, otherwise false.
     */
    const isSelected = (C: string, index: number) => {
        return state.selectedBets.some(b => b.C === C && b.O === parseFloat(content.toString()) && b.index === index); // Ensure content is a string
    };

    // Determine the CSS classes for the TableCell based on the selection state and the nature of the data (bet or not)
    const cellClassNames = (bet && isO && index !== undefined)
        ? isSelected(bet.C, index)
            ? `${styles.cell} ${styles.cellSelected} ${styles.cellClickable}`
            : `${styles.cell} ${styles.cellClickable}`
        : styles.cell;

    // If the cell is part of the sticky header and it's the first cell, apply a centered style
    const stickyHeaderStyle = isStickyHeader && index === 0 ? styles.cellCentered : '';

    return (
        <td
            // Attach the click handler if the cell represents a bet option
            onClick={bet && isO ? handleBetClick : undefined}
            className={`${cellClassNames} ${stickyHeaderStyle}`}
        >
            {content}
        </td>
    );
};

export default TableCell;
