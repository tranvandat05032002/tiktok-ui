import { memo } from 'react';
import AccountItem from '~/components/AccountItem';

const RenderList = ({ searchResult }) => {
    return (
        <>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
        </>
    );
};
export default memo(RenderList);
