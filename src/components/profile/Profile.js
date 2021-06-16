import Customer from './customerPage';
import Seller from './ownerPage';

const isLoggedIn="owner";
function Profile() {

    if(isLoggedIn==="owner"){
      return (
        <>
        <Customer/>
        </>
      );
    }
    if(isLoggedIn==="customer"){
      return (
        <>
        <Seller/>
        </>
      );
    }
}

export default Profile;
