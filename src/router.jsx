import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing"
import Logout from "./pages/Logout"
import SignupPage from "./pages/SignupPage"
import Characters from "./pages/Characters"
import { signupAction, loginAction, logoutAction } from "./utils/actions";
import { charactersLoader } from "./utils/loaders";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/accountcreate" action={signupAction} />
            <Route path="/characters" element={<Characters />} loader={charactersLoader}/>
            <Route path="/login" action={loginAction} />
            <Route path="/logout" action={logoutAction } />
        </ Route>
    )
)

export default router;