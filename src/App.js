import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./Router/route";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
