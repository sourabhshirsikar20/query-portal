import "./topbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user,dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-facebook-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className="link" style={{textDecoration:"none",color:"inherit"}}>HOME</Link>
                </li>
                <li className="topListItem">
                    <Link to="/about" className="link" style={{textDecoration:"none",color:"inherit"}}>ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link to="/contact" className="link" style={{textDecoration:"none",color:"inherit"}}>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link to="/write" className="link" style={{textDecoration:"none",color:"inherit"}}>WRITE</Link></li>
                <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            
            {user ?(
                 <Link to="/settings"><img className="topImg" src={PF + user.profilePic} alt="" /></Link>
            ):(<ul className="topList">
                <li className="topListItem">
                    <Link to="/login" className="link">LOGIN</Link>
                </li>
                <li className="topListItem">
                    <Link to="/register" className="link">REGISTER</Link> 
                </li></ul>)}
            
            
           
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
