import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.seeFilms = this.seeFilms.bind(this);
        this.seePeople = this.seePeople.bind(this);

        this.state = {
            showFilms: false,
            showPeople: false,
            filmsList: [],
            peopleList: []
        };
    }

    componentDidMount() {
        if (!this.state.showFilms) {
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(films => this.setState({ filmsList: films }));
        }

        if (!this.state.showPeople) {
            fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(people => this.setState({ peopleList: people }));
        }
    }

    seeFilms() {
        this.setState({ showFilms: !this.state.showFilms });
    }

    seePeople() {
        this.setState({ showPeople: !this.state.showPeople });
    }

    render() {
        if (this.state.showPeople) {
            return (
                <React.Fragment>
                    <div>
                        <button onClick={this.seePeople} className="btn btn-danger mb-5">Return to home?</button>
                    </div>
                    {this.state.peopleList.map(person => (
                        <div key={person.id} className="card text-center">
                            <div className="card-body">
                                <h3 className="card-title">{person.name}</h3>
                                <h5>Age: {person.age}</h5>
                                <h5>Gender: {person.gender}</h5>
                                <p className="card-text"><small className="text-muted">Hair color {person.hair_color}</small></p>
                                <p className="card-text"><small className="text-muted">Eye color: {person.eye_color}</small></p>
                                <a href={person.url} className="btn btn-danger">See my full info here:</a>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            );
        } else if (this.state.showFilms) {
            return (
                <React.Fragment>
                    <div>
                        <button onClick={this.seeFilms} className="btn btn-danger mb-5">Return to home?</button>
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
        } else {
            return (
                <React.Fragment>
                    <img src={require('../logo.png')} alt='Studio Ghibli logo' />
                    <div>
                        <button onClick={this.seeFilms} className="btn btn-danger mt-5 mr-2">See films?</button>
                        <button onClick={this.seePeople} className="btn btn-danger mt-5 ml-2">See people?</button>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default App;