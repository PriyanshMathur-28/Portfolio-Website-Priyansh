import "./home.css"
import Social from "./Social"
import Data from "./Data";
import Scrolldown from "./Scrolldown";
// import { useState } from "react";
const Home = () => {
    return (
        <>
<div className="mainone">
 <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_content grid">
                    <div className="home_img">
                        </div>

                        <Social />
                        <Data/>
                    </div>
                    <Scrolldown/>
                </div>
            </section>
            
            </div>
        </>
    );
}

export default Home;
