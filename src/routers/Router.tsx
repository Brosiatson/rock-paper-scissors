import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomepageLayout } from "../components/Layouts/HomepageLayout/Index";
import { ResultsLayout } from "../components/Layouts/ResultsLayout/Index";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/rock-paper-scissors">
            <Route path="" element={<HomepageLayout />}/>
            <Route path="results" element={<ResultsLayout />}/>
        </Route>
    )
)