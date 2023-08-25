import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Page} from "../components/pages/Page";
import {dataState} from "../data/dataState";
import {Protected} from "../components/pages/Protected";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: "/page/:id",
        element: (
          <Page pages={dataState.pages}/>
        ),
      },
      {
        path: "/p",
        element: (
          <ProtectedRoute>
            <Protected/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);