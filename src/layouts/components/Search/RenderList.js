import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

const RenderList = ({ searchResult }) => {
    console.log(searchResult);
    return (
        <>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </>
    );
};
export default memo(RenderList);
