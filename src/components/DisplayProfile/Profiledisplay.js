import Customer from './CustomerdetailsPage';
import Seller from './OwnerdetailsPage';

const isLoggedIn="customer";
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
