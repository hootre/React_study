import React, { Component } from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";

class Habits extends Component {
  handleResetAll = () => {
    this.props.onResetAll();
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
          <button onClick={this.handleResetAll}>Reset All</button>
        </ul>
      </>
    );
  }
}

export default Habits;
