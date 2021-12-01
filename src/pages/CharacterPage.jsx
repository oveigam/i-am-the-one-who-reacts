import { Paper, Typography } from "@mui/material";
import { useParams } from "react-router";

const CharacterPage = () => {
    const { characterId } = useParams()

    return (
        <Paper>
            <Typography>character page for {characterId}</Typography>
        </Paper>
    );
}

export default CharacterPage;