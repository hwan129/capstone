import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import "../style/driving.css";

export default function Driving() {
  const navigate = useNavigate();

  const toMiniMap = () => {
    navigate("/minimap");
  };
  return (
    <div className="driving_container">
      <Header />
      <div className="driving_statebar">
        <div onClick={toMiniMap}>안내중지</div>
      </div>
      <div className="driving_map">미니맵</div>
    </div>
  );
}
