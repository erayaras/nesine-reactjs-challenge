import React, { useEffect, useState } from 'react';
import { fetchBets } from '../../../../services//bets/betsService';
import TableRow from '../../../../components/organisms/TableRow/TableRow.component';
import { Bet } from '../../../../services/bets/bets.types';

const Main: React.FC = () => {
    const [data, setData] = useState<Bet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchBets();
                setData(result);
                console.log(result);
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
            {data.map((entry, index) => (
                <TableRow
                    key={index}
                    data={{
                        header: [],
                        content: []
                    }}
                />
            ))}
        </div>
    );
};

export default Main;
