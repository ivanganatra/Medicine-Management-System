// import { useSelector } from 'react-redux';
// import { selectUserData } from './reduxSlices/authSlice';
// import db from './firebase';

// export const isValidProfile = () => {
//     const userData = useSelector(selectUserData);
//     db.collection("profiles").doc(userData.userId).get().then(doc => {
//         if (!doc.exists) {
//             return false;
//         } else if(userData.category === "customer") {
//             if(doc.data)
//         }
//     })
// }