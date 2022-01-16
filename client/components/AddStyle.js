import React from 'react';
import { connect } from 'react-redux';
import { addStyle } from '../store/styles';

class AddStyle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeName: '',
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
    const { shoeName, size, price, quantity } = this.state;
    return (
      <div className="divBelowNavbar">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input name="name" value={shoeName} onChange={this.handleChange} />
          <label htmlFor="size">Size:</label>
          <input name="size" value={size} onChange={this.handleChange} />

          <label htmlFor="price">Price:</label>
          <input name="price" value={price} onChange={this.handleChange} />

          <label htmlFor="quantitiy">Quantitiy:</label>
          <input name="quantitiy" value={quantity} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStyle: (style) => dispatch(addStyle(style)),
  };
};

export default connect(null, mapDispatchToProps)(AddStyle);
