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
                <div className="right">
                    <img src="http://www.completewebdevelopercourse.com/content/5-bootstrap/App-Store-Icon.png"/>
                    <img src="https://www.dbmena.com/tech/wp-content/uploads/2019/05/google_play_logo.png"/>
                    <img src="https://developer.microsoft.com/en-us/store/badges/images/English_get-it-from-MS.png"/>
                </div>
            </div>
        </div>
    );
}