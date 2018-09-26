import React, { Component } from 'react';

class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peopleList: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(people => this.setState({ peopleList: people }));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.props.goHome} className="btn btn-danger mb-5">Return to home?</button>
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
    }
}

export default People;