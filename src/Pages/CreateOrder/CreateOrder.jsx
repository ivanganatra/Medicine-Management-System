import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../../reduxSlices/authSlice";
import db, { storage } from '../../firebase';
import firebase from 'firebase';
import FileUpload from "../../components/FileUpload/FileUpload";

function CreateOrder() {
  const userData = useSelector(selectUserData);
  const [orderInfo, setOrderInfo] = useState({
    prescriptions: []
  });

  const [description, setDescription] = useState("");

  const updateUploadedFiles = (files) =>
    setOrderInfo({ ...orderInfo, prescriptions: files });

  console.log(orderInfo, description);
  const handleSubmit = (event) => {
    event.preventDefault();
    // post data to firebase

    db.collection("profiles").doc(userData.userId).get().then(doc => {
      if(doc.exists) {
        const imgFile = orderInfo.prescriptions[0];
        const uploadTask = storage.ref(`images/${imgFile.name}`).put(imgFile);
        uploadTask.on('state_changed', console.log, console.error, () => {
          storage.ref('images').child(imgFile.name).getDownloadURL()
              .then(firebaseURL => {
                db.collection("orders").add({
                    created_by: userData.userId,
                    description: description,
                    img_url: firebaseURL,
                    status: "pending",
                    created_at: firebase.firestore.FieldValue.serverTimestamp(),
                });
                // Order Added Confirmation Modal
                alert("Order Added Successfully");
              })
      })
      } else {
        // A modal saying Please Complete your profile before posting any order, and a redirect to profile page button
        alert("Please complete your profile");
      }
    })

  };

  return (
    <div className="main-container" style={{ paddingTop: "95px" }}>
      <div className="container">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-12">
            <h1 className="text-center">Create new Order</h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="w-100 text-center">
              <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Prescription"
                updateFilesCb={updateUploadedFiles}
              />
              <div class="form-floating mx-md-5 pb-4">
                <textarea onChange={(event) => setDescription(event.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px",boxShadow:"none"}}></textarea>
                <label for="floatingTextarea2">Add details about your requirements (optional)</label>
              </div>
              <button type="submit" className="Green_Button Header_Login mx-0">Create Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;