import Wave from "react-wavify";
import "../../css/landing/landingcluster.css";

const LandingCluster = ({ amplitude }: any) => {
  return (
    <div className="landing-cluster">
      <div className="wave-box">
        <div className="wave-text">
          <p>This week: {amplitude}</p>
        </div>
        <div className="wave">
          <Wave
            fill="#FAF9F6"
            paused={false}
            options={{
              height: 50,
              amplitude: amplitude * 8,
              speed: 0.1,
              points: 3,
            }}
          />
        </div>
      </div>
      <div className="updates-box">
        <div className="updates-header">
          <p className="texttitle">Updates</p>
        </div>
        <div className="updates-content">
          <div className="grid-item">83577b6</div>
          <div className="grid-item">PortfolioV2 --2 hours ago</div>
          <div className="grid-item">7d84e2a</div>
          <div className="grid-item">Kev vs Ian --6 days ago </div>
          <div className="grid-item">a19f5c8</div>
          <div className="grid-item">whatisKevBumpin --10 days ago</div>
          <div className="grid-item">3b61d9e</div>
          <div className="grid-item">PortfolioV2 --30 days ago</div>
          <div className="grid-item">3b61d9e</div>
          <div className="grid-item">PortfolioV2 --30 days ago</div>
        </div>
      </div>
      <div className="image-box"></div>
    </div>
  );
};
export default LandingCluster;
