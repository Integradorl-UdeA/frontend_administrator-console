import { useEffect, useState } from 'react';
import client from '../../utils/Contentful';

const useGetContentful = (username: string | undefined) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await client.getEntries({
                    content_type: 'assistant',
                    'fields.username': username,
                });
                setData(res.items[0]); // Assuming res contains data you need
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log(data)
        if (username) {
            setIsLoading(false)
            fetchData();
        }
    }, [username]);

    return {data, isLoading};
};

export { useGetContentful };
