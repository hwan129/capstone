import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import "../style/minimap.css";
import Ex_Gaussian from "../image/ex_gaussian.svg";

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
      <div className="minimap_map">
        <img id="minimap_gaussian" alt="gaussian_img" src={Ex_Gaussian} />
      </div>
    </div>
  );
}
