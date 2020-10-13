import styled from "styled-components";
import { Button as RCButton, Navbar as RCNavbar } from "reactstrap";

export const Container = styled(RCNavbar)`
  background-color: #c40233;
  position: fixed;
  width: 100%;
  z-index: 3;
  font-size: 16px;
  font-weight: 700;

  .nav-link {
    color: #ffffffd9 !important;

    &:hover {
      color: #fff !important;
    }
  }
  #logo {
    transition: width 0.3s;

    @media (max-width: 900px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 60%;
    }
  }
`;

export const Button = styled(RCButton)`
  width: 155px;
  height: 45px;
  background-color: #2f2f2f;
  border: none;
  outline: none;

  &:active {
    border: none;
    outline: none;
  }
`;

export const HeaderContainer = styled.div`
  background-color: #f5f5f5;
  .fixed-nav {
    position: fixed;
    z-index: 999999;
    top: 0;
  }
`;