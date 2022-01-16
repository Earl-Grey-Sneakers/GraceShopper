import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import React from 'react';
import { updateStyle, _fetchSingleStyle } from '../store/singleStyle';

class EditStyles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeName: this.props.style.id ? this.props.style.shoeName : '',
      size: this.props.style.id ? this.props.style.size : '',
      price: this.props.style.id ? this.props.style.price : '',
      quantity: this.props.style.id ? this.props.style.quantity : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchStyle(this.props.match.params.id);
    console.log('fetched: ', this.props);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateStyle({ ...this.props.style, ...this.state });
  };

  render() {
    const { shoeName, size, price, quantity } = this.state;
    console.log(this.state);
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

const mapStateToProps = (state) => {
  return {
    style: state.singleStyleReducer,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateStyle: (style) => dispatch(updateStyle(style, history)),
    fetchStyle: (id) => dispatch(_fetchSingleStyle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStyles);
