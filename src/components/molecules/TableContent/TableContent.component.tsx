import React from 'react';
import TableCell from '../../atoms/TableCell/TableCell.component';
import { TableContentProps } from './TableContent.props';

const TableContent: React.FC<TableContentProps> = ({ contents }) => {
    return (
        <tr>
            {contents.map((item, index) => (
                <TableCell key={index} content={item} />
            ))}
        </tr>
    );
};

export default TableContent;
