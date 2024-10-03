import { useNavigate } from "react-router-dom";

import "../style/mainpage.css";

export default function Mainpage() {
  const navigate = useNavigate();

  const toMiniMap = () => {
    navigate("/minimap");
  };
  return (
    <div className="main_page_container">
      <div id="main_page_button" onClick={toMiniMap}>
        <div>시작하려면 화면을</div>
        <div>터치해주세요</div>
      </div>
    </div>
  );
}
