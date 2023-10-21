import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableHeaderProps } from './TableHeader.props';

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <TableCell key={index} content={header} />
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
