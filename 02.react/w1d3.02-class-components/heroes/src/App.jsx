import React, { Component } from "react";
import HeroCard from "./components/HeroCard";

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <HeroCard
                heroName={"Black Panther"}
                alias={"T'Challa"}
                team={"Avengers"}
                issueNumber={125}
              />
            </div>
            <div className="col">
              <HeroCard
                heroName={"Ms. Marvel"}
                alias={"Kamala Khan"}
                team={"Young Avengers"}
                issueNumber={210}
              />
            </div>
            <div className="col">
              <HeroCard
                heroName={"Shang Chi"}
                alias={"Shawn"}
                team={"None"}
                issueNumber={43}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
