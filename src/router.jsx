import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing"
import SignupPage from "./pages/SignupPage"
import Characters from "./pages/Characters"
import { signupAction, loginAction } from "./utils/actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Landing />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/accountcreate" action={signupAction} />
            <Route path="/login" action={loginAction} />
            <Route path="characters" element={<Characters />} />
        </ Route>
    )
)

export default router;