import React, { useState } from "react";
import FileUpload from "../../components/FileUpload/FileUpload";

function CreateOrder() {
  const [orderInfo, setOrderInfo] = useState({
    prescriptions: []
  });

  const updateUploadedFiles = (files) =>
    setOrderInfo({ ...orderInfo, prescriptions: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    // post data to firebase
  };

  return (
    <div className="main-container" style={{ paddingTop: "95px" }}>
      <div className="container">
        <div className="row p-3 d-flex align-items-center">
          <div className="col-12">
            <h1 className="main-heading text-center">Create new Order</h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="w-100 text-center">
              <FileUpload
                accept=".jpg,.png,.jpeg"
                label="Prescription"
                updateFilesCb={updateUploadedFiles}
              />
              <div class="form-floating mx-md-5 pb-4">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px",boxShadow:"none"}}></textarea>
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