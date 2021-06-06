import "../css/MovieCard.css"

export default function MovieCard(props){
    return(
        <div className="moviecard">
            <div className="img">
                <img src={props.image.url} alt="{props.title}"/>
            </div>
            <p>{props.title}</p>
        </div>
    );
}