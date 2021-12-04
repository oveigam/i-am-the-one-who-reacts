import { ArrowBack } from "@mui/icons-material";
import { Button, Divider, Grid, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigationType, useParams } from "react-router-dom";
import Quote from "../components/characters/Quote";
import TextWithLabel from "../components/common/TextWithLabel";
import TextWithSkeleton from "../components/common/TextWithSkeleton";
import { clearCharacterDetail, fetchCharacterDetail } from "../store/slices/characterSlice";

const CharacterPage = () => {
    const { characterId } = useParams()
    const navType = useNavigationType()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { t } = useTranslation()

    const { detail: character, isLoadingDetails } = useSelector(state => state.character)

    useEffect(() => {
        if (characterId) {
            dispatch(fetchCharacterDetail(characterId))
        }
        return () => dispatch(clearCharacterDetail())
    }, [characterId, dispatch])

    return (
        <Paper sx={{ padding: { xs: 1, lg: 4 }, width: '100%' }}>
            <Grid container spacing={2} >

                <Grid item xs={12} >
                    <Button color="secondary" startIcon={<ArrowBack />} onClick={() => navigate(navType === 'POP' ? '/' : -1)} >
                        {t('backtocharacters')}
                    </Button>
                </Grid>

                <Grid item xs={4} sx={{ display: { lg: 'none' } }} />

                <Grid item xs={4} display="flex" justifyContent="center" >
                    {
                        isLoadingDetails ?
                            <Skeleton width="100%" />
                            :
                            <img
                                style={{ objectFit: 'cover', borderRadius: 4 }}
                                src={character?.img}
                                width="100%"
                                alt="character portrait"
                            />
                    }
                </Grid>

                <Grid item container xs={12} lg={8} >
                    <Stack width="100%" spacing={2} sx={{ paddingX: 4 }} >

                        <TextWithSkeleton
                            isLoading={isLoadingDetails}
                            textAlign="center"
                            variant="h2"
                            fontSize={{ xs: '2rem', lg: '3.75rem' }}
                        >
                            {character?.name}
                        </TextWithSkeleton>

                        <TextWithSkeleton
                            isLoading={isLoadingDetails}
                            textAlign="end"
                            fontSize={{ xs: '1rem', lg: '1.3rem' }}
                            variant="subtitle1"
                        >
                            A.K.A. <span style={{ fontStyle: 'italic' }}>{character?.nickname}</span>
                        </TextWithSkeleton>

                        <Divider />

                        {
                            isLoadingDetails ?
                                <Skeleton height={100} />
                                :
                                <Grid container spacing={2}  >

                                    <Grid item xs={12} lg={6} >
                                        <Stack spacing={2}>

                                            <TextWithLabel label="status" >
                                                {character?.status}
                                            </TextWithLabel>

                                            <TextWithLabel label="birthday" >
                                                {character?.birthday}
                                            </TextWithLabel>

                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12} lg={6} >
                                        <Stack spacing={.5}>
                                            <Typography fontWeight="bold" >{t('occupations')}:</Typography>
                                            <ul>
                                                {character?.occupation?.map(o => <li key={o}><Typography color="text.secondary" >{o}</Typography></li>)}
                                            </ul>
                                        </Stack>
                                    </Grid>
                                </Grid>
                        }

                        <Divider />
                        {
                            isLoadingDetails ?
                                <Skeleton height={100} />
                                :
                                <>
                                    <TextWithLabel label="portrayed" >
                                        {character?.portrayed}
                                    </TextWithLabel>

                                    <Stack spacing={1}>
                                        <Typography fontWeight="bold" >{t('appearance')}:</Typography>
                                        <Grid container spacing={2}>
                                            {
                                                isLoadingDetails ?
                                                    <Skeleton />
                                                    :
                                                    character?.appearance?.map((season) => (
                                                        <Grid key={season} item >
                                                            <Button disableElevation variant="contained" sx={{ fontWeight: 'bold' }} >{season}</Button>
                                                        </Grid>
                                                    ))
                                            }
                                        </Grid>
                                    </Stack>
                                </>

                        }

                        <Quote characterName={character?.name} />

                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CharacterPage;