import "./skill.css"
import Backend from "./Backend";
import Frontend from "./Frontend";
import Techstacks from "./Techstacks";
const Skill = () =>
{
    return(
        <>
            <section className="skills section" id="skills">
                <h2 className="section_title">Skills</h2>
                <span className="section_subtitle"  style={{color:"#007BFF"}}>My technical level</span>
                <div className="skills_container container grid">
                <Frontend/>
                <Backend/>
                <div  style={{display:"flex", alignItems:"center", marginLeft:"50%"}}>
                <Techstacks/>

                </div>
                </div>
            </section>  
        </>
    )
}

export default Skill;