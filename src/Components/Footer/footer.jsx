import "./footer.css"
const Footer = () => {
  return (
    <>

    <footer className="footer"> 
    <div className="footer_container container">
        <h1 className="footer_title">Priyansh Mathur</h1>

        <ul className="footer_list">
            <li>
                <a href="#about" className="footer_link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer_link">Projects</a>
            </li>
            <li>
                <a href="#Qualification" className="footer_link">Qualification</a>
            </li>
   
        </ul>

        <div className="footer_social">
        <a href="https://www.instagram.com/craftedbypriyansh/" className="footer_social-link" target="_blank">
        <i className="fa-brands fa-instagram "></i>
        </a>
        <a href="https://www.linkedin.com/in/priyanshmathur28/" className="footer_social-link" target="_blank">
        <i className="fa-brands fa-linkedin"></i> 
        </a>
        <a href="https://github.com/PriyanshMathur-28" className="footer_social-link" target="_blank">
        <i className="fa-brands fa-github"></i>       
        </a>
        </div>
        <span  className="footer_copy">&#169; Priyansh Mathur. All Rights Reserved</span>
    </div>
    </footer>
    </>
  )
}

export default Footer;