import React, {Component} from 'react';

export default class FilterObject extends Component {
  
  constructor(){
    super()

    this.state = {
      beers: [
        {
          name: "Hop Nosh", 
          style: "IPA",
          abv: 7.2
        }, 
        { 
          name: "Poly Porter",
          style: "porter", 
          flavors: 'Creamy, chocolate, sweet'
        }, 
        { 
          name: "Fisher", 
          style: "Pilsner", 
          color: "Straw Gold"
        } 
      ],

      userInput: '',
      filteredBeers: []
    }
  }
  // handleChange(val) {   
  //   console.log(e.target.value) //use this console.log in the future
  //   let {val} = e.target
  //   this.setState({userInput: val})
  // }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterBeers(prop) {
    console.log(this.state.userInput)
    let beers = this.state.beers;
    let filteredBeers = [];

    for ( let i = 0; i < beers.length; i++ ) {
      if ( beers[i].hasOwnProperty(prop) ) {
        filteredBeers.push(beers[i]);
      }
    }
    this.setState({ filteredBeers: filteredBeers})

  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Beers that need to be Filtered </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.beers, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterBeers(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredBeers, null, 10) } </span>
      </div>

    )
    
  }
}

