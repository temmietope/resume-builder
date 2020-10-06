import styled from "styled-components";
import * as Colors from "./colors.json";

export const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 85%;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  padding: 5rem 0 5rem 0;
  box-sizing: border-box;
  .navlink {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    padding: 2rem 3rem;
    /* width: 100%;
    height: 100%; */
    box-sizing: border-box;
    display: grid;
    place-items: center;
    border-radius: 5px;
  }
  .navlink-active {
    background: #d9b9ea;
    color: white;
  }
`;

export const LayoutChild = styled.div`
  border: 1px solid;
`;
