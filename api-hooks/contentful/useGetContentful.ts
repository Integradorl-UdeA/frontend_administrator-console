/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react';
import client from '../../utils/Contentful';


const useGetContentful = (username: string | undefined) => {
    const [data, setData] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await client.getEntries({
                    content_type: 'assistant',
                    'fields.username': username,
                });

                setData(res.items[0].fields.photo); // Assuming res contains data you need
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log(data)
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (username) {
            setIsLoading(false)
            fetchData();
        }
    }, [username]);

    return {data, isLoading};
};
export { useGetContentful };
