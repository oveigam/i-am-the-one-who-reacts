import { Refresh } from "@mui/icons-material";
import { IconButton, Skeleton, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../../store/slices/characterSlice";

const Quote = ({ characterName }) => {
    const dispatch = useDispatch()

    const { quote, isLoadingQuote, isLoadingDetails } = useSelector(state => state.character)

    if (isLoadingDetails) {
        return <Skeleton height={200} />
    }

    if (!isLoadingQuote && !quote) {
        return null
    }

    return (
        <Stack>
            <Stack alignItems="flex-end">
                <IconButton
                    disabled={isLoadingQuote}
                    onClick={() => dispatch(fetchRandomQuote(characterName))}
                >
                    <Refresh style={{ animation: isLoadingQuote ? 'spin 2s linear infinite' : undefined }} fontSize="small" />
                </IconButton>
            </Stack>
            <Stack sx={{ height: 130 }} >
                <Typography
                    padding={1}
                    fontFamily="serif"
                    fontStyle="italic"
                    color="text.secondary"
                    textAlign="center"
                    variant="h5"
                    fontSize={{ xs: '1rem', lg: '1.5rem' }}
                >
                    {quote && `“${quote}”`}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default Quote;