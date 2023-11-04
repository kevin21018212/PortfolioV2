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
          <p className="textlarge">Updates</p>
        </div>
        <div className="updates-content">
          <div className="grid-item">
            <p>83577b6</p>
          </div>
          <div className="grid-item">
            <p>PortfolioV2 --2 hours ago</p>
          </div>
          <div className="grid-item">
            <p>7d84e2a</p>
          </div>
          <div className="grid-item">
            <p>Kev vs Ian --6 days ago</p>{" "}
          </div>
          <div className="grid-item">
            <p>a19f5c8</p>
          </div>
          <div className="grid-item">
            <p>whatisKevBumpin --10 days ag</p>
          </div>
          <div className="grid-item">
            <p>3b61d9e</p>
          </div>
          <div className="grid-item">
            <p>PortfolioV2 --30 days ago</p>
          </div>
          <div className="grid-item">
            <p>3b61d9e</p>
          </div>
          <div className="grid-item">
            <p>PortfolioV2 --30 days ago</p>
          </div>
        </div>
      </div>
      <div className="image-box"></div>
    </div>
  );
};
export default LandingCluster;
