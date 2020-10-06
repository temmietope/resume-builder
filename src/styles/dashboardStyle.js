import styled from "styled-components";
import * as Colors from "./colors.json";

export const DashboardWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-right: 5rem;
  display: grid;
  grid-template-columns: 15% 55% 30%;
`;

export const DashboardDiv = styled.div`
  padding: 3rem;
`;

export const DetailsHeader = styled.header`
  h2 {
    font-size: 2rem;
  }
`;

export const DetailsBody = styled.div`
  h5 {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
  }
  section {
    box-shadow: 0px 2px 4px #1717172e;
    padding: 1rem;
    margin: 1rem 0;
  }
`;

export const DetailsImageDiv = styled.section`
  .details__image {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    i {
      font-size: 5rem;
      border: 1px solid;
      color: gray;
      opacity: 0.5;
      padding: 2rem;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    button {
      border: 1px solid ${Colors["app-button-color"]};
      background: none;
      color: ${Colors["app-button-color"]};
      padding: 0.5rem 1rem;
      border-radius: 5px;
      font-size: 1rem;
      outline: none;
      font-weight: bold;
    }
  }
`;

export const DetailsBasic = styled.section`
  input {
    width: 100%;
    outline: none;
    padding: 0.6rem 1rem;
    border-radius: 5px;
    border: 1px solid ${Colors["app-button-color"]};
    font-size: 0.8rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: ${Colors["black"]};
  }
  .basic__info {
    width: 100%;

    .name {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
`;

export const Overview = styled.div`
  border: 1px solid;
`;
