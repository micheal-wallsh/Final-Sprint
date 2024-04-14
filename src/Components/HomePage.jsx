import switchLogo from "../Pictures/Switch Logo.png"
import xboxLogo from "../Pictures/Xbox logo.png"
import psLogo from "../Pictures/ps5 logo.png"
import { Link } from "react-router-dom";
import "./HomePage.css"
//The homepage componet for the website

const HomePage = (games) => {
    return (
        <div className="pageSelection">
          <Link to ="/switch" className="pageSelector"><img src={switchLogo} width="100px" height="100px"/></Link>
          <Link to ="/xbox" className="pageSelector"><img src={xboxLogo} width="100px" height="100px"/></Link>
          <Link to ="/playstation" className="pageSelector"><img src={psLogo} width="100px" height="100px"/></Link>
        </div>
    )
  }
export default HomePage