import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import BetSummary from '../../../../components/atoms/BetSummary/BetSummary.component';
import StickyHeader from '../../../../components/molecules/StickyHeader/StickyHeader.component';
import TableRow from '../../../../components/organisms/TableRow/TableRow.component';
import { Bet } from '../../../../services/bets/bets.types';
import { fetchBets } from '../../../../services/bets/betsService';

const Main: React.FC = () => {

    const [data, setData] = useState<Bet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);


    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchBets();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        loadData();

        // Update the height when the window is resized
        const handleResize = () => {
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        return <div style={style}><TableRow bet={data[index]} /></div>;
    };

    return (
        <div>
            <StickyHeader totalEventCount={data.length} />
            <List
                height={viewportHeight}  // Set to the viewport height
                itemCount={data.length}
                itemSize={53} // Average height of a row
                width="100%"
            >
                {Row}
            </List>
            <BetSummary />
        </div>
    );

};

export default Main;
