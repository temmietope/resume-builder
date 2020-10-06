import React from "react";
import * as Styles from "../../styles/dashboardStyle";
const Details = () => {
  return (
    <>
      <Styles.DetailsHeader>
        <h2>Personal Details</h2>
        <p>Fill in details you want on your Resume</p>
      </Styles.DetailsHeader>
      <Styles.DetailsBody>
        <Styles.DetailsImageDiv>
          <h5>Photo</h5>
          <div className="details__image">
            <i className="fas fa-camera" />
            <button>Upload Photo</button>
          </div>
        </Styles.DetailsImageDiv>
        <Styles.DetailsBasic>
          <h5>Basic Info</h5>
          <div className="basic__info">
            <p>
              <label>Full Name</label>
              <input type="text" />
            </p>
            <div className="name">
              <p>
                <label>Email</label>
                <input type="email" />
              </p>
              <p>
                <label>Phone</label>
                <input type="text" />
              </p>
            </div>
            <p>
              <label>Address</label>
              <input type="text" />
            </p>
            <div className="name">
              <p>
                <label>State</label>
                <input type="text" />
              </p>
              <p>
                <label>Country</label>
                <input type="text" />
              </p>
            </div>
          </div>
        </Styles.DetailsBasic>
      </Styles.DetailsBody>
    </>
  );
};

export default Details;
