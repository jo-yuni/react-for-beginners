import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:id" element={<Detail />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;