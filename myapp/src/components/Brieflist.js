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
      name: '',
  }
}



 async componentWillMount() {
   await this.props.fetchBriefs();
   console.log("componentDidMount", this.props.briefs.data )
   if(typeof(this.props.briefs.data)!="undefined"  ){
     console.log("componentDidMount ? ? ? " )

     for (const brief of this.props.briefs.data){
       console.log("breif", brief);
       await this.props.findproduct(brief.productId)

     }

   }
}

async shouldComponentUpdate(nextProps, nextState){
  console.log("should it ?")
  if(JSON.stringify(nextProps.briefs.data) !== JSON.stringify(this.props.briefs.data) ){
    console.log("it should !!!!!!!",nextProps.briefs.data)

    for (const brief of nextProps.briefs.data){
      console.log("breif", brief);
      await this.props.findproduct(brief.productId)

    }
  }
}



// async componentDidMount() {
//
// if(typeof(this.props.briefs.data)!="undefined"  ){
//     this.props.briefs.data.map(brief =>{this.props.findproduct(brief.productId);
//   })
// // console.log("raha db defined");
// // console.log(this.props.product);
// }
// else {
//   console.log("ana f else :')'");
//   await this.props.fetchBriefs();
//   this.componentDidMount();
// }
//
// }

briefslist(){

  if(typeof(this.props.briefs.data)!="undefined"  ){
    console.log("the big brief", this.props.briefs)
  return this.props.briefs.data.map(brief => {
      return (
        <div>
        <ListItem >{brief.title}</ListItem>
        <ListItem >{brief.comment}</ListItem>
        <ListItem ></ListItem>
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
