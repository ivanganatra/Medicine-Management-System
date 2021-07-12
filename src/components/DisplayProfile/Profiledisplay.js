import Customer from './CustomerdetailsPage';
import Seller from './OwnerdetailsPage';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const isLoggedIn="owner";
function Profile(props) {

    if(props.userCategory==="owner"){
      return (
        <>
        <Seller/>
        </>
      );
    }
    if(props.userCategory==="customer"){
      return (
        <>
        <Customer/>
        </>
      );
    }

    return <Redirect to="/" />
}

const mapStateToProps = state => {
  return {
    userCategory: state.auth.category
  }
}

export default connect(mapStateToProps)(Profile);
