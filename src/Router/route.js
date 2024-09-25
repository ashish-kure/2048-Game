import { Route, Routes } from "react-router-dom";
import Game2048 from "../Components/Game2048";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game2048 />} />
    </Routes>
  );
};

export default AppRoutes;
