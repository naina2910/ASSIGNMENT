import Title from "./Title";
import React,{Component} from "react"
import MovieCard from "./MovieCard";

export default class Movies extends Component{
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
        
        const items=this.state.data.filter((item)=>{
           return item.releaseYear>=2010 && item.programType=="movie"
        }).slice(0,21)
        
        return(
            <div>
                <Title title="Popular Movies"/>
                {console.log(items[0])}
            </div>
        );
    }  
}