"use client";
import ResumeCluster from "./components/resumecluster";
import ResumeHeader from "./components/resumeheader";
import SkillSlider from "./components/skillslider";
import "./resume.css";

const ResumePage = () => {
  return (
    <div className="resumeContainer">
      <ResumeHeader />
      <SkillSlider />
      <ResumeCluster />
    </div>
  );
};
export default ResumePage;
