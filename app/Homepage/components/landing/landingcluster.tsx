import Wave from "react-wavify";
import "../../css/landing/landingcluster.css";
import { motion } from "framer-motion";
const LandingCluster = ({ amplitude }: any) => {
  return (
    <div className="landing-cluster">
      <motion.div
        initial={{ opacity: 0, x: "-5vw" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "-5vw" }}
        transition={{ delay: 0.05 }}
        className="wave-box"
      >
        <div className="wave-text">
          <p className="m">Weekly Updates: {amplitude}</p>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "5vw" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "5vw" }}
        transition={{ delay: 0.1 }}
        className="updates-box"
      >
        <div className="updates-header">
          <p className="t5">Updates</p>
        </div>
        <div className="updates-content">
          <div className="grid-item">
            <p className="s">83577b6</p>
          </div>
          <div className="grid-item">
            <p className="xs">PortfolioV2 --2 hours ago</p>
          </div>
          <div className="grid-item">
            <p className="s">7d84e2a</p>
          </div>
          <div className="grid-item">
            <p className="xs">Kev vs Ian --6 days ago</p>{" "}
          </div>
          <div className="grid-item">
            <p className="s">a19f5c8</p>
          </div>
          <div className="grid-item">
            <p className="xs">whatisKevBumpin --10 days ag</p>
          </div>
          <div className="grid-item">
            <p className="s"> 3b61d9e</p>
          </div>
          <div className="grid-item">
            <p className="xs">PortfolioV2 --30 days ago</p>
          </div>
          <div className="grid-item">
            <p className="s">3b61d9e</p>
          </div>
          <div className="grid-item">
            <p className="xs">PortfolioV2 --30 days ago</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.1 }}
        className="image-box"
      ></motion.div>
    </div>
  );
};
export default LandingCluster;
