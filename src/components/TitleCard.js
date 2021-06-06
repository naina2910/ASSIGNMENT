export default function TitleCard(props){
    return(
        <div className="card">
            <div className="img">
                <div className="layer"></div>
                <img src="assets/card.png" alt="{props.cardname}" />
                <div className="centered">{props.cardname}</div>
            </div>
            Popular {props.cardname}
        </div>
    );
}