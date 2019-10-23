import React, {Component} from 'react';

//Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'


export default class TopicBrowser extends Component {
  constructor() {
    super()
  }

  render(){
    return (
        
        <div>
          <EvenAndOdd />
          <FilterObject />
          <FilterString />
          <Palindrome />
          <Sum />
        </div>
    )
  }
}

//export default TopicBrowser; <----- this can be placed right before class TopicBrowser extends Component