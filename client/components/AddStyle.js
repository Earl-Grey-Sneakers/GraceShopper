import React from 'react';
import { connect } from 'react-redux';
import { addStyle } from '../store/admin';

class AddStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand:'',
      shoeName: '',
      color: '',
      size: 0,
      price: 0,
      quantity: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addStyle({ ...this.state });
  }
  render() {
    const { brand, shoeName, size, color, price, quantity } = this.state;
    return (
      <div className="divBelowNavbar">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='brand'>Brand:</label>
          <input name="brand" value={brand} onChange={this.handleChange} />

          <label htmlFor="shoeName">Name:</label>
          <input name="shoeName" value={shoeName} onChange={this.handleChange} />

          <label htmlFor="color">Color:</label>
          <input name="color" value={color} onChange={this.handleChange} />

          <label htmlFor="size">Size:</label>
          <input name="size" value={size} onChange={this.handleChange} />

          <label htmlFor="price">Price:</label>
          <input name="price" value={price} onChange={this.handleChange} />

          <label htmlFor="quantity">Quantity:</label>
          <input name="quantity" value={quantity} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    addStyle: (style) => dispatch(addStyle(style, history)),
  };
};

export default connect(null, mapDispatchToProps)(AddStyle);
