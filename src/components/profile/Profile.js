import Customer from './customerPage';
import Seller from './ownerPage';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../reduxSlices/authSlice';

function Profile() {
    const userData = useSelector(selectUserData);

    if(userData.category==="owner"){
      return (
        <>
        <Seller/>
        </>
      );
    }
    
    if(userData.category==="customer"){
      return (
        <>
        <Customer/>
        </>
      );
    }
}

export default Profile;
