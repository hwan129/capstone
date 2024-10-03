import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import "../style/minimap.css";

export default function MiniMap() {
  const navigate = useNavigate();

  const toGaussianMap = () => {
    navigate("/gaussianmap");
  };
  return (
    <div className="minimap_container">
      <Header />
      <div className="minimap_statebar">
        <div>미니맵에서 원하는 위치를 선택해주세요</div>
        <div className="minimap_complete" onClick={toGaussianMap}>
          선택완료
        </div>
      </div>
      <div className="minimap_map">미니맵</div>
    </div>
  );
}
