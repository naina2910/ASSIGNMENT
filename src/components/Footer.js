import "../css/footer.css"
import "font-awesome/css/font-awesome.min.css"

export default function Footer(){
    return(
        <div className="footer">
            <div className="section1">
                <p>Home | Terms and Conditions | Privacy Policy | Collection Statements | Help | Manage Account </p>
                <p>Copyright &#169; 2016 DEMO STREAMING  All Rights Reserved</p>
            </div>
            <div className="section2">
                <div className="left">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                {/* <div className="right">
                    <img src="assets/googleplay.png" alt="" />
                    <img src="assets/microsoft.png" alt="Download on Microsoft" />
                </div> */}
            </div>
        </div>
    );
}