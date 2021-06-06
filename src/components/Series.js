import Title from "./Title";
import React,{Component} from "react"
import MovieCard from "./MovieCard";
import "../css/movie.css"

export default class Series extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            error:null,
            isLoading:true
        };
    }
    componentDidMount(){
        fetch("./assets/data.json", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          })
        .then(response => response.json())
        .then(response => {
            this.setState({data:response.entries})
        })
        .finally(()=> this.setState({isLoading:false}))
        .catch(error =>this.setState({error:"Error.."+error.message}));
    }
    render(){
        
        var items=this.state.data.filter((item)=>{
           return item.releaseYear>=2010 && item.programType=="series"
        }).slice(0,21).sort(function(a, b){
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          })
        
        return(
            <div>
                <Title title="Popular Series"/>
                <div className="moviecontainer">
                    {
                        items.map((item)=>{
                            return(
                                <MovieCard title={item.title} image={item.images.PosterArt}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }  
}