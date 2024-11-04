import { useNavigate } from "react-router-dom";

import "../style/header.css";
import Minimap_icon from "../image/minimap.svg";
import Battery_icon from "../image/battery.svg";

export default function Header() {
  const navigate = useNavigate();

  const toMiniMap = () => {
    navigate("/minimap");
  };

  const toMain = () => {
    navigate("/");
  };

  return (
    <div className="header_container">
      <div className="header_left">
        <div className="header_icon" onClick={toMain}>
          홈
        </div>
        <div className="header_icon" onClick={toMiniMap}>
          <img src={Minimap_icon} alt="minimap" style={{ height: "20px" }} />
          미니맵
        </div>
      </div>
      <div className="header_icon">
        <img src={Battery_icon} alt="battery" style={{ height: "20px" }} />
        배터리
      </div>
    </div>
  );
}
