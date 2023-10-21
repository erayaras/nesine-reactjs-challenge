import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableHeaderProps } from './TableHeader.props';
import styles from './TableHeader.module.scss';

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
    return (
        <thead className={styles.headerRow}>
            <tr>
                {headers.map((header, index) => (
                    <TableCell key={index} content={header} />
                ))}
            </tr>
        </thead>
    );
};


export default TableHeader;
