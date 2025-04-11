import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Home from "./pages/home";
import SearchResults from "./pages/searchResult";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchResults />} />
    </Route>
  )
);
