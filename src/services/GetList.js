// import { useEffect, useState } from 'react';
// import AccountItem from '~/components/SuggestedAccounts/AccountItem';

// // function GetList() {
// //     const [postList, setPostList] = useState([]);
// //     const [number, setNumber] = useState(0);
// //     console.log(postList);
// //     setNumber(1);
// //     console.log(1212);

// //     useEffect(() => {
// //         async function fetchFollow() {
// //             try {
// //                 const requestUrl = 'http://localhost:3000/following';
// //                 const response = await fetch(requestUrl);
// //                 const responseJSON = await response.json();

// //                 return responseJSON;
// //             } catch (error) {
// //                 console.log('Failed to fetch post list: ', error.message);
// //             }
// //         }

// //         fetchFollow().then((res) => {
// //             setPostList(res);
// //         });
// //     }, []);
// //     return <AccountItem followList="1212" />;
// // }

// // export default GetList;

// const GetList = () => {
//     const [postList, setPostList] = useState([]);
//     const [number, setNumber] = useState(0);
//     console.log(postList);
//     setNumber(1);
//     console.log(1212);

//     useEffect(() => {
//         async function fetchFollow() {
//             try {
//                 const requestUrl = 'http://localhost:3000/following';
//                 const response = await fetch(requestUrl);
//                 const responseJSON = await response.json();

//                 return responseJSON;
//             } catch (error) {
//                 console.log('Failed to fetch post list: ', error.message);
//             }
//         }

//         fetchFollow().then((res) => {
//             setPostList(res);
//         });
//     }, []);

//     return <AccountItem followList={number} />;
// };
