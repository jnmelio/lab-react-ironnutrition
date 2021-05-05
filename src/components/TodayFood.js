import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class TodayFood extends Component {
  render() {
    const { totalFood } = this.props;
    let total = 0
    return (
      <div>
        <h1>Today's Food</h1>
        {totalFood.map((food) => {
          return (
            <div>
              <ul>
                <li>
                  {food.quantity} {food.name} = {food.calories} calories
                </li>
              </ul>
              <p>Total : {food.calories * food.quantity} calorie</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TodayFood;
