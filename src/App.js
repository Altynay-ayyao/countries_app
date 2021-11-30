import React from "react";
import Home from "./Home";
import CountriesList from "./CountriesList";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import CountrySingle from "./CountrySingle";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="/countries/:name" element={<RouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
