import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBrief } from '../actions/briefActions';
import { fetchProducts } from '../actions/briefActions';







 class  Briefform extends Component{

constructor(props) {
  super(props);
  this.state = {
    title: '',
    comment: '',
    productId:''
  };
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

onSubmit(e) {
//  e.preventDefault();
  const brief = {
    title: this.state.title,
    comment: this.state.comment,
    productId:this.state.productId
  };
  this.props.createBrief(brief);
}


componentWillMount() {
  this.props.fetchProducts();
}


productslist(){
  if(typeof(this.props.products.data)!="undefined"){
  return this.props.products.data.map(product => {
      return <MenuItem value={product.id}>{product.name}</MenuItem>;
    })
  }
}

render(){

return (
  <div>
  <form  onSubmit={this.onSubmit}>
  <FormControl >
        <TextField name="title" label="title" onChange={this.onChange} value={this.state.title}/>
        <br/>
        <TextField name="comment" label="comment" onChange={this.onChange} value={this.state.comment} />
        <br/>
        <br/>
        <Select name="productId" onChange={this.onChange} defaultValue="" input={<Input id="grouped-select" />}>
          {this.productslist()}
        </Select>
        <br/>
        <Button type="submit" variant="contained" color="secondary" >ok</Button>
      </FormControl>
</form>
  </div>
    );
}
}



Briefform.propTypes = {
  createBrief: PropTypes.func.isRequired,
  fetchProducts:PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  products: state.briefs.products,
});

export default connect(mapStateToProps, { createBrief ,fetchProducts})(Briefform);
