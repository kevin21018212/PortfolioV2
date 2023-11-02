


const ProjectInfo = ({projectData}:any) =>{
 return(         <div className="projects-content">
 {projectData && (
   <>
     <div className="projects-content-right">
       <p className={`textsmall  ${projectData ? "active" : ""}`}>{projectData.topRight}</p>
       <p className={`textlarge ${projectData ? "active" : ""}`}>{projectData.middleRight}</p>
       <p className={`textsmall  ${projectData ? "active" : ""}`}>{projectData.bottomRight}</p>
     </div>
     <div className="projects-content-left">
       <div className={`${projectData ? "active" : ""}`}>
         <p className="texttitle">Idea</p>
         <p className="textsmall">{projectData.middleMiddle}</p>
       </div>
       <div className="bottom-middle">
         <p className={`textxsmall  ${projectData ? "active" : ""}`}>{projectData.bottomMiddle}</p>
       </div>
     </div>
   </>
 )}
</div>
)
}
export default ProjectInfo;