import { Skeleton } from "@mui/material";

const Placeholder = ({ isLoading, children }) => {
    if (isLoading) {
        return <Skeleton variant="rectangular" width="100%" height="100%" />

    } else {
        return children
    }
}

export default Placeholder;