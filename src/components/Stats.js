import React, {Component} from 'react';

class Stats extends Component {
  render(){
    return(
      <div>
      <form className="SkillsForm" action="" method="post">
        <input type="number" name="" placeholder="4" /><input type="text" placeholder="Perception"/>
        <br />
        <input type="number" name="" placeholder="1" /><input type="text" placeholder="Animal Handling"/>
        <br />
        <input type="number" name="" placeholder="3" /><input type="text" placeholder="Medicine" />
      </form>
      </div>
    )
  }
}

export default Stats;
