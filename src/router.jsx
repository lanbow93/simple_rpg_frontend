import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing"
import SignupPage from "./pages/SignupPage"
import Characters from "./pages/Characters"
import NewCharacter from "./pages/NewCharacter";
import { signupAction, loginAction, logoutAction, createCharacterAction, deleteCharacterAction } from "./utils/actions";
import { charactersLoader } from "./utils/loaders";
import PlayPage from "./pages/PlayPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/accountcreate" action={signupAction} />
            <Route path="/characters" element={<Characters />} loader={charactersLoader}/>
            <Route path="/play" element={<PlayPage />} />
            <Route path="/newcharacter" element={<NewCharacter/>} />
            <Route path="/login" action={loginAction} />
            <Route path="/logout" action={logoutAction } />
            <Route path="/create" action={createCharacterAction} />
            <Route path="/delete/:id" action={deleteCharacterAction}/>
        </ Route>
    )
)

export default router;