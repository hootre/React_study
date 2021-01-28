import React from "react";
import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav";

class App extends React.Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({
      habits,
    });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (habit.id === item.id) {
        const count = habit.count;
        return { ...habit, count: count ? count - 1 : 0 };
      }
      return item;
    });
    this.setState({
      habits,
    });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({
      habits,
    });
  };
  resetAll = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count === 0) {
        return item;
      }
      return { ...item, count: 0 };
    });
    this.setState({
      habits,
    });
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({
      habits,
    });
  };
  render() {
    return (
      <>
        <Nav
          count={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onResetAll={this.resetAll}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
