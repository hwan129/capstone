import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import "../style/gaussianmap.css";

export default function GaussianMap() {
  const navigate = useNavigate();

  const toDriving = () => {
    navigate("/driving");
  };

  const toMiniMap = () => {
    navigate("/minimap");
  };
  return (
    <div className="gaussian_container">
      <Header />
      <div className="gaussian_statebar">
        <div>드래그하여 정확한 위치를 선택해주세요</div>
        <div className="gaussian_complete">
          <div
            className="gaussian_complete_btn"
            id="gaussian_complete_btn_cancel"
            onClick={toMiniMap}
          >
            취소
          </div>
          <div className="gaussian_complete_btn" onClick={toDriving}>
            선택 완료
          </div>
        </div>
      </div>
      <div className="gaussian_map"></div>
    </div>
  );
}
