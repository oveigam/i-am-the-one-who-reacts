import { CircularProgress, Paper } from "@mui/material";


const LoadingPanel = () => {
    return (
        <Paper sx={{
            bgcolor: 'background.backdrop',
            width: '100%',
            flex: 1,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center"
        }} >
            <CircularProgress />
        </Paper>
    );
}

export default LoadingPanel;