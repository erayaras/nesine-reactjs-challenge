import React from 'react';
import { TableCellProps } from './TableCell.props';

const TableCell: React.FC<TableCellProps> = ({ content }) => {
    return <td>{content}</td>;
};

export default TableCell;
