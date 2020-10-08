import React from "react";
import { useState } from "react";
import * as Styles from "../../styles/dashboardStyle";
import { additionalInfo, links } from "./additionalInfo";
import InputTag from "./inputTag";
const Details = () => {
  const [infoAdded, setInfo] = useState([]);

  const addInfo = (val) => {
    console.log(val);
    if (infoAdded.includes(val)) {
      return;
    } else setInfo([...infoAdded, val]);
  };

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
            {infoAdded.map((info, index) => {
              return <InputTag info={info} key={index} />;
            })}
          </div>
        </Styles.DetailsBasic>

        
        <Styles.DetailsAdditionalInfo>
          <h5>Additional Info</h5>
          <p>Personal</p>

          {additionalInfo.map((info, index) => {
            if (infoAdded.includes(info)) {
              return;
            } else
              return (
                <button key={index} onClick={() => addInfo(info)}>
                  <i className="fas fa-plus" />
                  <span>{info.text}</span>
                </button>
              );
          })}
          <p>Links</p>
          {links.map((info, index) => {
            if (infoAdded.includes(info.name)) {
              return;
            } else
              return (
                <button key={index} onClick={() => addInfo(info)}>
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
