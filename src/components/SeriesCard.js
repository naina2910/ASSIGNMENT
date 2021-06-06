import "../css/SeriesCard.css"

export default function SeriesCard(props){
    return(
        <div className="seriescard">
            <div className="img">
                <img src={props.image.url} alt="{props.title}"/>
            </div>
            <p>{props.title}</p>
        </div>
    );
}