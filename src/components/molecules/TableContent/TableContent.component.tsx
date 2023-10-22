import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableContentProps } from './TableContent.props';
import styles from './TableContent.module.scss';

const TableContent: React.FC<TableContentProps> = ({ bet }) => {
    const contents = [`${bet.C} ${bet.T} ${bet.N}`, "Yorumlar", bet.OCG[1].MBS, bet.OCG[1].OC[0].O, bet.OCG[1].OC[1].O, "", bet.OCG[5].OC[25].O, bet.OCG[5].OC[26].O, "", "", "", "", "", bet.OCG[2].OC[3].O, bet.OCG[2].OC[4].O, bet.OCG[2].OC[5].O, "", "", "3"]

    const bettableIndices = [3, 4, 6, 7, 13, 14, 15];

    return (
        <tbody className={styles.contentRow}>
            <tr>
                {contents.map((item, index) => (
                    <TableCell key={index} index={index} content={item} bet={bet} isO={bettableIndices.includes(index)} />
                ))}
            </tr>
        </tbody>
    );
};


export default TableContent;
