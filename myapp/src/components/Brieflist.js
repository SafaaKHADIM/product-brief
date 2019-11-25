import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBriefs } from '../actions/briefActions';
import { findproduct } from '../actions/briefActions';
import ListItem from '@material-ui/core/ListItem';






class  Brieflist extends Component{
  constructor(props) {
    super(props);
    this.state = {
      names: [],
  }
}



 async componentWillMount() {
   await this.props.fetchBriefs();
}


async shouldComponentUpdate(nextProps, nextState){
  if(JSON.stringify(nextProps.briefs.data) !== JSON.stringify(this.props.briefs.data) ){
    console.log("it should !!!!!!!",nextProps.briefs.data)
    for (const brief of nextProps.briefs.data){
      console.log("breif2", brief);
      await this.props.findproduct(brief.productId);
      console.log(nextProps.product);
    }
  }
  let names = nextProps.product.data;
  if (typeof(names)!="undefined"){
    this.state.names.push(names[0].name);
  }
}



briefslist(){
  if(typeof(this.props.briefs.data)!="undefined"  ){
  let i =-1;
  return this.props.briefs.data.map(brief => {
    i++;
      return (
        <div>
        <ListItem >{brief.title}</ListItem>
        <ListItem >{brief.comment}</ListItem>
        <ListItem >{this.state.names[i]}</ListItem>
        </div>
      );
    })
  }
}



render(){
return (
  <div>
  {this.briefslist()}
  </div>
    );
}
}



Brieflist.propTypes = {
  fetchBriefs:PropTypes.func.isRequired,
  findproduct:PropTypes.func.isRequired,
  briefs: PropTypes.array.isRequired,
  product: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  briefs: state.briefs.briefs,
  product: state.briefs.product,
});

export default connect(mapStateToProps, { fetchBriefs , findproduct  })(Brieflist);
