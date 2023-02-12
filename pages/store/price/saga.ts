import axios from 'axios';

export const getPrice = async (params:{ symbol:string }) => {
    const { data } = await axios.get(
        `https://satangcorp.com/api/v3/ticker/24hr?symbol=${params.symbol || 'btc_thb'}`,
        );
        // console.log('data ===',data)
        
        return data
}