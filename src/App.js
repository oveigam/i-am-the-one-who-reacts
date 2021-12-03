import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageLayout from './components/layout/PageLayout';
import { ThemeProvider } from "./context/ThemeContext";
import CharacterPage from "./pages/CharacterPage";
import LandingPage from './pages/LandingPage';
import { Provider as StoreProvider } from 'react-redux'
import store from './store/store';

const Content = () => {
  return (
    <PageLayout >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
        <Route path="/character/:characterId" element={<CharacterPage />} />
      </Routes>
    </PageLayout>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <StoreProvider store={store} >
          <Content />
        </StoreProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
