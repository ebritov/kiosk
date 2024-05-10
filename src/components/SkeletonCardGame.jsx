import { Skeleton } from '@mui/material';

const SkeletonCardGame = () => {

    return (
        <>
            <Skeleton width={"100%"} height={250} />
            <Skeleton width="100%" height={30} />
            <Skeleton width="100%" height={30} />
        </>
    );
}

export default SkeletonCardGame;