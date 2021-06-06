export default function MovieCard(props){
    return(
        <div className="card">
            <div className="img">
                <img src={props.url} alt="{props.title}" height={props.height} width={props.width}/>
            </div>
        </div>
    );
}