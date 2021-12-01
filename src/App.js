import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import PageLayout from './components/layout/PageLayout';
import { ThemeProvider } from "./context/ThemeContext";

const Content = () => {
  const { t } = useTranslation()
  return (
    <PageLayout >
      <Typography >
        {t('knockknock')}
      </Typography>
    </PageLayout>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;
