import { useRoutes } from "react-router-dom";
import CyclomaticComplexity from './CyclomaticComplexity'
import Home from "./Home";
import Entropy from "./Entropy";

function Router() {
  const appRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cyclomatic-complexity',
      element: <CyclomaticComplexity />,
    },
    {
      path: '/entropy',
      element: <Entropy />,
    },
  ]

  return useRoutes(
    appRoutes
  )
}

export default Router