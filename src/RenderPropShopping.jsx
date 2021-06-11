import React, { Component } from "react";

const tagStyle = {
  margin: "0.25rem",
  padding: "0.6rem 1rem",
  borderRadius: "20px",
};

const shoppingList = [
  "tissue",
  "chalk",
  "pens",
  "pencil",
  "eraser",
  "water",
  "juice",
];

function ListView(props) {
  return (
    <div>
      {props.shopping.map((item) => (
        <button
          key={item}
          value={item}
          style={tagStyle}
          onClick={props.removeItem}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function TableView(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.shopping.map((item) => (
          <tr key={item}>
            <td>{item}</td>
            <td>
              <button
                onClick={props.removeItem}
                style={{ cursor: "pointer" }}
                value={item}
              >
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopping: props.shoppingList,
    };
  }

  removeItem = (event) => {
    const { shopping } = this.state;
    const updatedList = shopping.filter((item) => item !== event.target.value);
    this.setState({ shopping: updatedList });
  };

  // addItem

  // updateItem

  // selectItem

  render() {
    const { shopping } = this.state;
    return this.props.render(shopping, this.removeItem);
  }
}

export default class RenderPropShopping extends Component {
  render() {
    return (
      <div>
        <ShoppingItems
          shoppingList={shoppingList}
          render={(shopping, removeItem) => (
            <ListView shopping={shopping} removeItem={removeItem} />
          )}
        />

        <ShoppingItems
          shoppingList={shoppingList}
          render={(shopping, removeItem) => (
            <TableView shopping={shopping} removeItem={removeItem} />
          )}
        />
      </div>
    );
  }
}
