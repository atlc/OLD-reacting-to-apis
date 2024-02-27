import React, { Component } from "react";
import Films from "./Films";
import People from "./People";

class App extends Component {
    constructor(props) {
        super(props);

        this.seeFilms = this.seeFilms.bind(this);
        this.seePeople = this.seePeople.bind(this);

        this.state = {
            showFilms: false,
            showPeople: false,
        };
    }

    seeFilms() {
        this.setState({ showFilms: !this.state.showFilms });
    }

    seePeople() {
        this.setState({ showPeople: !this.state.showPeople });
    }

    render() {
        if (this.state.showPeople) {
            return <People goHome={this.seePeople} />;
        } else if (this.state.showFilms) {
            return <Films goHome={this.seeFilms} />;
        } else {
            return (
                <React.Fragment>
                    <img src={require("../logo.png")} alt="Studio Ghibli logo" />
                    <div>
                        <button onClick={this.seeFilms} className="btn btn-danger mt-5 mr-2">
                            See films?
                        </button>
                        <button onClick={this.seePeople} className="btn btn-danger mt-5 ml-2">
                            See people?
                        </button>
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default App;
