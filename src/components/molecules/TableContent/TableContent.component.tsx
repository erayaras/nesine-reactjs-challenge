import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableContentProps } from './TableContent.props';
import styles from './TableContent.module.scss';

const TableContent: React.FC<TableContentProps> = ({ contents }) => {
    return (
        <tbody className={styles.contentRow}>
            <tr>
                {contents.map((item, index) => (
                    <TableCell key={index} content={item} />
                ))}
            </tr>
        </tbody>
    );
};


export default TableContent;
