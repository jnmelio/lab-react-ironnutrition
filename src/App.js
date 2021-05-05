import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import TodayFood from './components/TodayFood';

class App extends Component {
  state = {
    allFood: foods,
    filteredFood: foods,
    totalFood: []
  };

  handleAddFood = (food) => {
    this.setState({
      allFood: [food, ...this.state.allFood],
    });
  };
  handleSearch = (e) => {
    let input = e.target.value;
    const { allFood } = this.state;
    let filteredFood = allFood.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      filteredFood: filteredFood,
    });
  };
  handleAddTotal = (food, quantity)=>{
    let myFood = {...food, quantity}

    this.setState({
      totalFood: [myFood, ...this.state.totalFood]
    }) 
  }
  render() {
    const { totalFood, filteredFood } = this.state;
    return (
      <div>
        <div className="columns">
          <div className="column">
          <FoodBox
            onAdd={this.handleAddFood}
            onSearch={this.handleSearch}
            allFoods={filteredFood}
            onTotal={this.handleAddTotal}
          />
          </div>
          <div className="column">
            <TodayFood totalFood={totalFood}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
