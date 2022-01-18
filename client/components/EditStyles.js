import { connect } from 'react-redux';
import React from 'react';
import { fetchStyle, updateStyle } from '../store/admin';
import {Link} from 'react-router-dom'
class EditStyles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeName: '',
      size: 0,
      quantity: 0,
      price: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchStyle(this.props.match.params.id);
    console.log('fetched: ', this.props);
  }

  componentDidUpdate() {
    if (this.state.shoeName === '') {
      this.setState({
        shoeName: this.props.style.shoeName,
        size: this.props.style.size,
        price: this.props.style.price,
        quantity: this.props.style.quantity,
      });
    }
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
    console.log('----------state-----------', this.state);
    return (
      <div className="divBelowNavbar">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="shoeName">Name:</label>
          <input name="shoeName" value={shoeName} onChange={this.handleChange} />
          <label htmlFor="size">Size:</label>
          <input name="size" value={size} onChange={this.handleChange} />

          <label htmlFor="price">Price:</label>
          <input name="price" value={price} onChange={this.handleChange} />

          <label htmlFor="quantity">Quantitiy:</label>
          <input name="quantity" value={quantity} onChange={this.handleChange} />

          <Link to={"/admin"}><button type="submit">Submit</button></Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.adminReducer,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateStyle: (style) => dispatch(updateStyle(style, history)),
    fetchStyle: (id) => dispatch(fetchStyle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStyles);
