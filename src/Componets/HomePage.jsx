import switchLogo from "../Pictures/Switch Logo.png"
import xboxLogo from "../Pictures/Xbox logo.png"
import psLogo from "../Pictures/ps5 logo.png"
import { Link } from "react-router-dom";

const HomePage = (games) => {
    return (
        <div className="pageSelection">
          <Link to ="/switch" className="switchButton"><img src={switchLogo} width="50px" height="50px"/></Link>
          <Link to ="/xbox" className="switchButton"><img src={xboxLogo} width="50px" height="50px"/></Link>
          <Link to ="/playstation" className="switchButton"><img src={psLogo} width="50px" height="50px"/></Link>
        </div>
    )
  }
export default HomePage