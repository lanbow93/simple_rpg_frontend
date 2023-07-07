import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Landing />} />
            <Route path="signup" element={<Landing />} />
        </ Route>
    )
)

export default router;