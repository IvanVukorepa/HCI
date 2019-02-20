import React from "react"

class Category extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            genres: []
        }
    }

    componentDidMount(){
        this.setState({
            genres: this.props.genres
        }); 
    }

    componentDidUpdate = () => {
        if(this.state.genres !== this.props.genres)
            this.setState({
                genres: this.props.genres
            });    
    }

    genreClick = (a) => {
        this.props.genreClick(a);
    }

    render(){
        return(
            <div className="categories">
            {this.state.genres.map(genre => {
                return(
                    <div key={genre.id} onClick={(e) => this.genreClick(genre.Name)}>
                        <div className="category">
                            <span className="cat">{genre.Name}</span>
                        </div>
                    </div> 
                )
            })}	
            </div>
        );
    }   
}

export default Category;

/*

/*
function category(props) {
    return (
        <Link to="/">
            <div className="category">
                <span className="cat">{props.category}</span>
            </div>
        </Link>         
    )
}

export default (props) => (
    <div className="categories">
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
        {category({category:"Kategorija"})}
    </div>
    )*/