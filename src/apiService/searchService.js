import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

//  fetch
// fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced.current)}&type=less`)
//     .then((res) => res.json())
//     .then((res) => {
//         setSearchResult(res.data);
//         setLoading(false);
//     })
//     .catch(() => {
//         setLoading(false);
//     });
/* axios/promise
        request
            .get('users/search', {
                params: {
                    q: debounced.current,
                    type: 'less',
                },
            })
            // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced.current)}&type=less`)
            .then((res) => {
                // console.log(res);
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            }); */

/*  axios/async_await
        const fetchApi = async () => {
            try {
                const res = await request.get('users/search', {
                    params: {
                        q: debounced.current,
                        type: 'less',
                    },
                });
                setSearchResult(res.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi(); */
