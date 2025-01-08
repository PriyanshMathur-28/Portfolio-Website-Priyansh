import { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
    const [initialstate, changestate] = useState(true);

    const toggletab = (tab) => {
        changestate(tab === 'education');
    };

    return (
        <section className="qualification section" id="Qualification">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal Journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div
                        className={initialstate === true ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggletab('education')}
                         style={{border:"1px solid gray", backgroundColor:"black",borderRadius:"10px",padding:"5px",color:"white",fontSize:"15px"}} >
                        <i className="fa-solid fa-graduation-cap qualification_icon"></i> Education
                    </div>

                    <div
                        className={initialstate === false ? "qualification_button button--flex" : "font_hello"}
                        onClick={() => toggletab('experience')}
                        style={{border:"1px solid gray", backgroundColor:"black",borderRadius:"10px",padding:"5px",paddingRight:"10px",paddingLeft:"10px",color:"white",fontSize:"15px"}}>
                        <i className="fa-solid fa-briefcase qualification_icon"></i> Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={initialstate === true ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title"><i className="fa-regular fa-calendar"></i> &nbsp;2023 - Present</h3><br />
                                <span className="qualification_subtitle">Vellore Institute of Technology, Vellore <br /><br /> CGPA: 8.32</span>
                                <div className="qualification_calendar">
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title"> <i className="fa-regular fa-calendar"></i>&nbsp; 2023 (April)</h3><br />
                                <span className="qualification_subtitle">Grade 12 <br /><br />(Jayshree Periwal High School, Jaipur)</span>
                                <div className="qualification_calendar">
                                Aggregate 92% <br/><br/>
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                            <h3 className="qualification_title"> <i className="fa-regular fa-calendar"></i>&nbsp; 2021 (April)</h3><br />
                                <span className="qualification_subtitle">Grade 10 <br /><br />(Jayshree Periwal High School, Jaipur)</span>
                                <div className="qualification_calendar">
                                Aggregate 95.2% <br/><br/>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className={initialstate === false ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title"> <i className="fa-regular fa-calendar"></i>&nbsp;2024   - Present</h3> <br/>
                                <span className="qualification_subtitle"><p style={{fontSize:"15px", fontWeight:"500"}}>Mern Stack</p></span>
                                <div className="qualification_calendar">
                                    Web Development  
                                </div>
                            </div>
                            <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
