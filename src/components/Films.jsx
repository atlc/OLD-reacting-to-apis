import React, { Component } from "react";

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filmsList: [],
        };
    }

    componentDidMount() {
        fetch("https://api-ghibli.herokuapp.com/films")
            .then((response) => response.json())
            .then((films) => this.setState({ filmsList: films }));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.props.goHome} className="btn btn-danger mb-5">
                        Return to home?
                    </button>
                </div>
                {this.state.filmsList.map((film) => (
                    <div key={film.id} className="card text-center">
                        <div className="card-body">
                            <h3 className="card-title">{film.title}</h3>
                            <h5>Directed by: {film.director}</h5>
                            <h5>Produced by: {film.producer}</h5>
                            <p className="card-text">{film.description}</p>
                            <p className="card-text">
                                <small className="text-muted">Released in {film.release_date}</small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Rotten Tomatoes Rating: {film.rt_score}/100</small>
                            </p>
                            <a href={"http://www.google.com/search?q=" + film.title} className="btn btn-danger">
                                Check it out on Google.
                            </a>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}

export default Films;
