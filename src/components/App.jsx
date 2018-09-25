import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            showFilms: false,
            filmsList: [],
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(films => this.setState({ filmsList: films }));
    }

    handleClick() {
        this.setState({ showFilms: !this.state.showFilms });
    }

    render() {
        if (this.state.showFilms === false) {
            return (
                <React.Fragment>
                    <img src={require('../logo.png')} alt='Studio Ghibli logo' />
                    <div>
                        <button onClick={this.handleClick} className="btn btn-danger mt-5">See films?</button>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div>
                        <button onClick={this.handleClick} className="btn btn-danger mb-5">Return to home?</button>
                    </div>
                    {this.state.filmsList.map(film => (
                        <div key={film.id} className="card text-center">
                            <div className="card-body">
                                <h3 className="card-title">{film.title}</h3>
                                <h5>Directed by: {film.director}</h5>
                                <h5>Produced by: {film.producer}</h5>
                                <p className="card-text">{film.description}</p>
                                <p className="card-text"><small className="text-muted">Released in {film.release_date}</small></p>
                                <p className="card-text"><small className="text-muted">Rotten Tomatoes Rating: {film.rt_score}/100</small></p>
                                <a href={"http://www.google.com/search?q=" + film.title} className="btn btn-danger">Check it out on Google.</a>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            );
        }
    }
}

export default App;