import "./about.css";
import Info from "./info";

const About = () => {
    const Aboutimg = "/p2.jpg"; // Correct way to reference an image from the public folder

    return (
        <section className="about_section" id="about">
            <br></br><br></br>
            <br></br>
            <br></br>
            <h2 className="section_title">About me</h2>
            <span className="section_subtitle">My Introduction</span>
            
            <div className="about_container container grid">
                <img src={Aboutimg} alt="About me" className="about_img" />
                {/* Add content here if necessary */}

                <div className="about_data">   
                    <Info/>    
                    <p className="about_description">
                        Frontend Developer, I create websites using HTML, CSS, JavaScript, React, Tailwind and other technologies. I am passionate about creating user-friendly and 
                        responsive websites that meet the needs of users. I am a quick learner and enjoy working with new technologies. I have more than 6 months of experience in
                        web development and have worked on several projects. I am excited to continue learning and growing as an individual and as a developer.
                    </p>
                    <a href="/APAAR ID.pdf" download="APAAR ID.pdf" className="button button--flex">
                        Download CV &nbsp;<i className="fa-solid fa-file-export" style={{color:"white"}}></i>
                        
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;