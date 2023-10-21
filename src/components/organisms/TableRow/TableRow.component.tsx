import React from 'react';
import TableHeader from '../../molecules/TableHeader/TableHeader.component';
import TableContent from '../../molecules/TableContent/TableContent.component';
import { TableRowProps } from './TableRow.props';
import styles from './TableRow.module.scss';

const TableRow: React.FC<TableRowProps> = ({ bet }) => {
    const headers = [`${bet.D} ${bet.DAY} ${bet.LN}`, "Yorumlar", "", "1", "x", "2", "Alt", "Üst", "H1", "1", "x", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"]
    const contents = [`${bet.C} ${bet.T} ${bet.N}`, "Yorumlar", bet.OCG[1].MBS, bet.OCG[1].OC[0].O, bet.OCG[1].OC[1].O, "", bet.OCG[5].OC[25].O, bet.OCG[5].OC[26].N, "", "", "", "", "", bet.OCG[2].OC[3].O, bet.OCG[2].OC[4].O, bet.OCG[2].OC[5].O, "", "", "3"]

    return (
        <table className={styles.rowContainer}>
            <colgroup>
                <col className={styles.firstColumn} />
                <col className={styles.secondColumn} />
                <col className={styles.otherColumns} span={18} />
            </colgroup>
            <TableHeader headers={headers} />
            <TableContent contents={contents} />
        </table>
    );
};

export default TableRow;
