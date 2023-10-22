import React from 'react';
import styles from './StickyHeader.module.scss';
import { StickyHeaderProps } from './StickyHeader.props';
import TableCell from '../../atoms/TableCell/TableCell.component';

const StickyHeader: React.FC<StickyHeaderProps> = ({ totalEventCount }) => {
    const headers = [`Event Count: ${totalEventCount} `, "Yorumlar", "", "1", "x", "2", "Alt", "Üst", "H1", "1", "x", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"];

    return (
        <table className={styles.stickyHeader}>
            <colgroup>
                <col className={styles.firstColumn} />
                <col className={styles.secondColumn} />
                <col className={styles.otherColumns} span={17} />
            </colgroup>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <TableCell content={header} isStickyHeader index={index} />

                    ))}
                </tr>
            </thead>
        </table>
    );
};

export default StickyHeader;
