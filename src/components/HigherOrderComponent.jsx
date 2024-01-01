import React, { Component } from "react";

export default class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements space-x-6">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
  // Filter data based on user_type
  renderFilter = () => {
    const data = this.state.userData;
    const filRows = data.map(
      (item) =>
        item.user_type == "Designer" && (
          <React.Fragment key={item.id}>
            <li className="list-elements space-x-6">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
            </li>
          </React.Fragment>
        )
    );
    return filRows;
  };

  // Filter user based on first letter
  renderName = () => {
    const data = this.state.userData;
    const filRows = data.map(
      (item) =>
        item.name[0].toLowerCase() == "j" && (
          <React.Fragment key={item.id}>
            <li className="list-elements space-x-6">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
            </li>
          </React.Fragment>
        )
    );
    return filRows;
  };

  // Filter user based on age
  renderAge = () => {
    const data = this.state.userData;
    const filRows = data.map(
      (item) =>
        item.age > 28 &&
        item.age <= 50 && (
          <React.Fragment key={item.id}>
            <li className="list-elements space-x-6">
              <span>Id: {item.id}</span>
              <span>Name : {item.name}</span>
              <span>User Type: {item.user_type}</span>
            </li>
          </React.Fragment>
        )
    );
    return filRows;
  };

  // Filter user based on age
  renderExp = () => {
    const data = this.state.userData;
    const filRows = data
      .filter((item) => {
        return item.user_type == "Designer";
      })
      .reduce((total, num) => {
        return total.years + num.years;
      });
    return filRows;
  };
  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box my-10">
          <ul>{this.renderItems()} </ul>
        </div>

        <h1>Display based on user type</h1>
        <div className="display-box my-10">
          <ul>{this.renderFilter()} </ul>
        </div>

        <h1>Filtering All Data Starting with J</h1>
        <div className="display-box my-10">
          <ul>{this.renderName()} </ul>
        </div>

        <h1>
          Filtering All Data based on age greater than 28 and less than or equal
          to 50
        </h1>
        <div className="display-box my-10">
          <ul>{this.renderAge()} </ul>
        </div>

        <h1>FIND THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
        <div className="display-box my-10">
          <ul>{this.renderExp()} </ul>
        </div>
      </React.Fragment>
    );
  }
}
