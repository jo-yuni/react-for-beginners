import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/:id`} element={<Detail />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;