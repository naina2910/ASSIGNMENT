import "../css/header.css"
export default function Header(){
    return(
        <div className="header">
            <span style={{fontSize:"30px"}}>DEMO STREAMING</span>
            <div className="links">
                <a href="#">Log In</a>
                <a href="#" className="button">Start your free trial</a>
            </div>  
        </div>
    );
}