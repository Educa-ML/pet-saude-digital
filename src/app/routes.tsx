import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { AboutPage } from "./components/AboutPage";
import { DataPage } from "./components/DataPage";
import { TeamPage } from "./components/TeamPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: AboutPage },
      { path: "dados", Component: DataPage },
      { path: "equipe", Component: TeamPage },
      { path: "*", Component: AboutPage },
    ],
  },
]);
