import styled from "styled-components";
import * as Colors from "./colors.json";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const DashboardLink = styled.button`
  padding: 1rem 2rem;
  border: none;
  outline: none;
  background: #376e89;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  :hover {
    background: #89aebf;
  }
`;
