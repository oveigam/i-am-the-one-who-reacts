import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CharacterCard = ({ id, name, nickname, img }) => {
    return (
        <Link to={`/character/${id}`} style={{ textDecoration: 'none' }} >
            <Card
                elevation={0}
                sx={{
                    cursor: 'pointer',
                    ":hover": {
                        bgcolor: 'primary.main',
                        transform: 'scale(1.02)',
                        color: 'white'
                    },
                    ":active": {
                        transform: 'scale(0.99)'
                    }
                }}
            >
                <Stack direction="column" >
                    <CardMedia
                        component="img"
                        image={img}
                        alt="character profile pic"
                        draggable={false}
                        sx={{
                            width: '100%',
                            height: { xs: 475, sm: 450, md: 400, lg: 350 },
                        }}
                    />
                    <CardContent  >
                        <Stack >
                            <Typography
                                variant="h5"
                                fontSize={{ xs: '6vw', sm: '3vw', md: '2vw', lg: '1.3vw', xl: '1vw' }}
                                fontWeight="bold"
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                fontSize={{ xs: '5.5vw', sm: '2.5vw', md: '1.5vw', lg: '1vw', xl: '.85vw' }}
                            >
                                {nickname}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Stack>
            </Card>
        </Link>
    )
}

export default CharacterCard;