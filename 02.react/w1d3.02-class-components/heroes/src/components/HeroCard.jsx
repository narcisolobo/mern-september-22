import React, { Component } from "react";

export class HeroCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      issueNumber: this.props.issueNumber
    }
  }

  render() {
    const { heroName, alias, team } = this.props;
    const { issueNumber } = this.state;
    const releaseIssue = () => {
      this.setState({
        issueNumber: issueNumber + 1
      })
    }

    return (
        <div className="card">
          <h5 className="card-header">HERO CARD</h5>
          <div className="card-body">
            <h1 className="card-title">{ heroName } - { alias }</h1>
            <h2>{ team }</h2>
            <h2>Issue Numbers: { issueNumber }</h2>
            <button className="btn btn-primary" onClick={ releaseIssue }>New Issue Released</button>
          </div>
        </div>

    );
  }
}

export default HeroCard;
