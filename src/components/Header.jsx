import { useNavigate } from "react-router-dom";

import "../style/header.css";

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
          미니맵
        </div>
      </div>
      <div className="header_icon">배터리</div>
    </div>
  );
}
