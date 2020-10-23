import React from "react";
import { useState, useContext } from "react";
import resumeContext from "../../context/resumeContext";
import * as Styles from "../../styles/dashboardStyle";
import { additionalInfo, links } from "./additionalInfo";
import InputTag from "./inputTag";
const Details = () => {
  const [initialInfo, setInitialInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    country: "",
  });
  const inputContext = useContext(resumeContext);
  const { userInput, updateUserInput } = inputContext;
  // console.log(userInput);

  const [infoAdded, setInfo] = useState([]);

  const addInfo = (val) => {
    if (infoAdded.includes(val)) {
      return;
    } else setInfo([...infoAdded, val]);
  };

  const onChange = (e) => {
    setInitialInfo({ ...initialInfo, [e.target.name]: e.target.value });
    updateUserInput(e.target.name, e.target.value);
  };

  const { name, email, phone, address, state, country } = initialInfo;
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
              <input type="text" name="name" value={name} onChange={onChange} />
            </p>
            <div className="name">
              <p>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </p>
              <p>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
              </p>
            </div>
            <p>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={onChange}
              />
            </p>
            <div className="name">
              <p>
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={onChange}
                />
              </p>
              <p>
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={country}
                  onChange={onChange}
                />
              </p>
            </div>
            {infoAdded.map((info, index) => {
              return <InputTag info={info} key={index} onChange={onChange} />;
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
