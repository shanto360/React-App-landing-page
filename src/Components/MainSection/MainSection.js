import React from 'react';
import './MainSection.css'
import homeImage from '../images/home-img.png'
const MainSection = () => {
    return (
        <div>
            <section className="home" id="home">

                <div className="content">
                    <h3>best mobile app <span>showcase</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit porro nam libero natus error consequatur sed repudiandae eos quo?</p>
                    <a href="/" className="btn">download now</a>
                </div>
                <div className="image">
                    <img src={homeImage} alt=""/>
                </div>

            </section>
        </div>
    );
};

export default MainSection;