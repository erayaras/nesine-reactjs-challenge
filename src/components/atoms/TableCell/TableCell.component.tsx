import React from 'react';
import { TableCellProps } from './TableCell.props';
import styles from './TableCell.module.scss';

const TableCell: React.FC<TableCellProps> = ({ content }) => {
    return <td className={styles.cell}>{content}</td>
};

export default TableCell;
