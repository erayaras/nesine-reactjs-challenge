import React, { useEffect, useState } from 'react';
import BetSummary from '../../../../components/atoms/BetSummary/BetSummary.component';
import StickyHeader from '../../../../components/molecules/StickyHeader/StickyHeader.component';
import TableRow from '../../../../components/organisms/TableRow/TableRow.component';
import { Bet } from '../../../../services/bets/bets.types';
import { fetchBets } from '../../../../services/bets/betsService';

const Main: React.FC = () => {

    const [data, setData] = useState<Bet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

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
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <StickyHeader totalEventCount={data.length} />
            {data.map((bet, index) => (
                <TableRow key={index} bet={bet} />
            ))}
            <BetSummary />
        </div>
    );

};

export default Main;
