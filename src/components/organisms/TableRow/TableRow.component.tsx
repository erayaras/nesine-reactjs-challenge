import React from 'react';
import TableHeader from '../../molecules/TableHeader/TableHeader.component';
import TableContent from '../../molecules/TableContent/TableContent.component';
import { TableRowProps } from './TableRow.props';

const TableRow: React.FC<TableRowProps> = ({ data }) => {
    return (
        <>
            <TableHeader rowItems={data.content} />
            <TableContent rowItems={data.content} />
        </>
    );
};

export default TableRow;
