import "./sidebar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
        };
        getCats();
    }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"/>
            <p>Lorem ipsum dolor, sit </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">QUERIES</span>
            <ul className="sidebarList">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    
                ))}
                
                
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-facebook-square"></i>
        </div>
        </div>

    </div>
  )
}
