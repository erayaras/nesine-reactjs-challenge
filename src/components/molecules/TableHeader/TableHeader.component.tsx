import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableHeaderProps } from './TableHeader.props';
import styles from './TableHeader.module.scss';

const TableHeader: React.FC<TableHeaderProps> = ({ bet }) => {
    const headers = [
        <>
            <span className={styles.firstPart}>{bet.D}</span>
            <span >{bet.DAY} {bet.LN}</span>
        </>,
        "Yorumlar",
        "",
        "1",
        "x",
        "2",
        "Alt",
        "Üst",
        "H1",
        "1",
        "x",
        "2",
        "H2",
        "1-X",
        "1-2",
        "X-2",
        "Var",
        "Yok",
        "+99"]

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
