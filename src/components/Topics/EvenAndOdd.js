import React, {Component} from 'react';


export default class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput){
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for ( i = 0; i < arr.length; i++ ){
      if ( arr[i] % 2 === 0 ) {
        evens.push ( parseInt (arr[i], 10) );
      }else{
        odds.push ( parseInt (arr[i], 10) )
      }
    }
    // NEED TO this.setSate
  }


  render(){
    return (
      // <p>Even And Odd Component</p>
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" />
        <Button className="confirmationButton" onClick={ ()=> { () }}></Button>
        <span className="resultsBox"></span>
        <span className="resultsBox"></span>
      </div>
    )
  }
}
