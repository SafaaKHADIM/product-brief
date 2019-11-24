import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBriefs } from '../actions/briefActions';
import ListItem from '@material-ui/core/ListItem';







 class  Brieflist extends Component{




componentWillMount() {
  this.props.fetchBriefs();
}


briefslist(){
  if(typeof(this.props.briefs.data)!="undefined"){
  return this.props.briefs.data.map(brief => {
      return (
        <div>
        <ListItem >{brief.title}</ListItem>
        <ListItem >{brief.comment}</ListItem>
        <ListItem >{brief.productId}</ListItem>
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
  briefs: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  briefs: state.briefs.briefs,
});

export default connect(mapStateToProps, { fetchBriefs })(Brieflist);
