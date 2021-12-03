import { Skeleton, Typography } from "@mui/material";

const TextWithSkeleton = ({ children, isLoading, ...props }) => {
    return (
        <Typography {...props} >
            {
                isLoading ?
                    <Skeleton />
                    :
                    children
            }
        </Typography>
    );
}

export default TextWithSkeleton;