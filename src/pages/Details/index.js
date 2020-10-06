import React from "react";
import * as Styles from "../../styles/dashboardStyle";
import { additionalInfo } from "./additionalInfo";
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
            <p>
              <label>Job Title</label>
              <input type="text" />
            </p>
            <p>
              <label>Date of Birth</label>
              <div className="dob">
                <input type="number" placeholder="Day" />
                <input type="text" placeholder="Month"/>
                <input type="text" placeholder="Year"/>
              </div>
            </p>
            <p>
              <label>Objective</label>
              <textarea rows="5"/>
            </p>
            <p>
              <label>Nationality</label>
              <input type="text" />
            </p>
          </div>
        </Styles.DetailsBasic>
        <Styles.DetailsAdditionalInfo>
          <h5>Additional Info</h5>
          {additionalInfo.map((info, index) => {
            return (
              <button key={index}>
                <i className="fas fa-plus" />
                <span>{info.text}</span>
              </button>
            );
          })}
        </Styles.DetailsAdditionalInfo>
      </Styles.DetailsBody>
    </>
  );
};

export default Details;
