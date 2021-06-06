import Title from "./Title";
import TitleCard from "./TitleCard";
import "../css/home.css"
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <div className="wrapper">
            <Title title="Popular Titles"/>
            <div className="container">
               <Link to="/series"><TitleCard cardname="Series"/></Link> 
               <Link to="/movies"><TitleCard cardname="Movies"/></Link>
            </div>
        </div>
    );
}