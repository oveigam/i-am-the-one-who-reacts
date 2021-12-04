import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
    const characters = useSelector(state => state.characterList.filteredCharacters)

    return (
        <Grid container spacing={2}>
            {
                characters?.map(c => (
                    <Grid key={c.char_id} item xs={12} sm={6} md={4} lg={3} >
                        <CharacterCard
                            id={c.char_id}
                            name={c.name}
                            nickname={c.nickname}
                            img={c.img}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default CharacterList;