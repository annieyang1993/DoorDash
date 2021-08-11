import React from 'react';
import {Link} from 'react-router-dom';

const FooterAbsolute = () => {


    return (
        <div className="footerAbsolute">
            
            <div className="first">
                <h1 className="firstHeader">Get to Know Us</h1> <br />
                About Us <br /> <br />
                Careers <br /> <br />
                Investors <br /> <br />
                Company Blog <br /> <br />
                Engineering Blog <br /> <br />
                Merchant Blog <br /> <br />
                Drinkly Stories <br /> <br />
            </div>
            <div className="second">
                <h1 className="firstHeader">Resources</h1> <br /> 
                <a className="linkedin" href="https://www.linkedin.com/in/annie-yang-48780175/">Linkedin</a> <br /> <br />
                <a className="github" href="https://github.com/annieyang1993?tab=repositories">Github</a> <br /> <br />
            </div>
            <div className="third">
                <h1 className="firstHeader">Doing Business</h1> <br />
                Become a Dasher <br /> <br />
                Be a Partner Restaurant <br /> <br />
                Get Dasher Deliveries <br /> <br />
                Get DoorDash for Work <br /> <br />
            </div>
        </div>
    )
}

export default FooterAbsolute;