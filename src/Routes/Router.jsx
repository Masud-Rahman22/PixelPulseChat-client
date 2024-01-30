import {
    createBrowserRouter
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
    },
    {
        path: "/chats",
        element: <ChatPage></ChatPage>,
    },
]);

export default Router;