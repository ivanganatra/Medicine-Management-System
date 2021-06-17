import Customer from './customerPage';
import Seller from './ownerPage';

const isLoggedIn="owner";
function Profile() {

    if(isLoggedIn==="owner"){
      return (
        <>
        <Seller/>
        </>
      );
    }
    if(isLoggedIn==="customer"){
      return (
        <>
        <Customer/>
        </>
      );
    }
}

export default Profile;
