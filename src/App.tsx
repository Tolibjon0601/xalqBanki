import { BrowserRouter, Route, Routes } from "react-router-dom";
import { default as MainLayout } from "./layouts/main-layout";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import SingleNewsPage from "./pages/news/single-news";
import VacancyPage from "./pages/vacancy";
import Query from "./services/query";
import InterPage from "./pages/intern";

const App = () => {
  return (
    <>
      <Query>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <HomePage />
                </MainLayout>
              }
            />
            <Route
              path="/vacancy"
              element={
                <MainLayout>
                  <VacancyPage />
                </MainLayout>
              }
            />
            <Route
              path="/news"
              element={
                <MainLayout>
                  <NewsPage />
                </MainLayout>
              }
            />
            <Route
              path="/news/:id"
              element={
                <MainLayout>
                  <SingleNewsPage />
                </MainLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <MainLayout>
                  <ContactPage />
                </MainLayout>
              }
            />
            <Route
              path="/intern"
              element={
                <MainLayout>
                  <InterPage />
                </MainLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Query>
    </>
  );
};

export default App;
