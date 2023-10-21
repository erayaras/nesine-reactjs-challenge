import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableContentProps } from './TableContent.props';

const TableContent: React.FC<TableContentProps> = ({ data }) => {
    return (
        <tr>
            {data.map((item, index) => (
                <TableCell key={index} content={item} />
            ))}
        </tr>
    );
};

export default TableContent;
