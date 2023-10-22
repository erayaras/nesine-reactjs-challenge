import React from 'react';
import TableHeader from '../../molecules/TableHeader/TableHeader.component';
import TableContent from '../../molecules/TableContent/TableContent.component';
import { TableRowProps } from './TableRow.props';
import styles from './TableRow.module.scss';

const TableRow: React.FC<TableRowProps> = ({ bet }) => {

    return (
        <table className={styles.rowContainer}>
            <colgroup>
                <col className={styles.firstColumn} />
                <col className={styles.secondColumn} />
                <col className={styles.otherColumns} span={18} />
            </colgroup>
            <TableHeader bet={bet} />
            <TableContent bet={bet} />
        </table>
    );
};

export default TableRow;
