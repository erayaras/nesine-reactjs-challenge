import axios from 'axios';

const BASE_URL = 'https://nesine-case-study.onrender.com';

export const fetchBets = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/bets`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
