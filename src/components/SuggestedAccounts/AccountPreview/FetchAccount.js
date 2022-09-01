import { useState, useEffect } from 'react';
import AccountPreview from './AccountPreview';

function FetchAccount() {
    const [suggested, setSuggested] = useState([]);
    // console.log(followList);

    console.log(suggested);

    useEffect(() => {
        async function fetchAPI() {
            try {
                const requestUrl = 'http://localhost:3000/following';
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                return responseJSON;
            } catch (error) {
                console.log('Failed to fetch post list: ', error.message);
            }
        }

        fetchAPI().then((res) => {
            setSuggested(res);
        });
    }, []);

    return <AccountPreview dataFollow={suggested} />;
}

export default FetchAccount;
