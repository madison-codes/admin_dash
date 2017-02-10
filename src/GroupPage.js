import React , { Component } from 'react';

export default class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOldest: false
    };
  }

  toggleOldestFilter(){
    const oldest = this.state.filterOldest;
    this.setState({ filterOldest: !oldest });
  }

  render(){
    return(
      <section>
        <h1>GROUP</h1>
        <ul>
        {
          this.props.groupMembers.map((member) =>
            <li>{ member.username }</li>
          )
        }
        </ul>
        <ul>
        {
          this.props.sketches.map((sketch) =>
            <li>
              <p>{ sketch.sketch_created }</p>
              <p>{ sketch.sketch_updated }</p>
            </li>
          )
        }
        </ul>
        <button onClick={() => this.setState({ filterOldest: true })}>Oldest</button>
        <article> article <b>three</b> until I can break it up even more </article>
      </section>
    )
  }
}
