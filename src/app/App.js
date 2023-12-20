// cli
import React from "react";
import {
  BrowserRouter as Brouter,
  Routes,
  Route,
} from 'react-router-dom';

// component
import { routes } from '../routes/index';

// style
import GlobalStyle from '../stylesheets/globalStyle';

const App = () => {

  const onRenderRoutes = (routes) => {
    let result = null
    if (routes && routes.length) {
      result = routes.map(route => <Route key={route.key} path={route.path} element={route.component()} />)
    } else {
      return null
    }

    return <Routes>{result}</Routes>
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <Brouter basename={`/`}>
        {onRenderRoutes(routes)}
      </Brouter>
    </React.Fragment>
  );
}

export default App;
