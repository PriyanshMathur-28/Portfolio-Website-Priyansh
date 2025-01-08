const Scrolldown = () => {
  return (
      <div className="home_scroll ">
          <a href="#about" className="home_scroll-button button--flex">
              <svg width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="home__scroll-mouse">
                  <g id="mouse">
                      <path id="circle" d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" stroke="#000000" strokeWidth="1.5" fill="none" />
                      <path id="vertical-line" d="M12 7V10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" className="wheel" />
                  </g>
              </svg>
              <div className="hii">
              <span className="home_scroll-name">Scroll Down &nbsp;
                  <i className="fa-solid fa-arrow-down-long home_scroll-arrow"></i>
              </span>
              </div>
          </a>
      </div>
  );
};

export default Scrolldown;