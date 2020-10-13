import styled from "styled-components";

export const Container = styled.div`
  background-color: #2f2f2f;
  padding: 60px 30px 30px 30px;
  position: relative;
  color: white;

  .toledo-logo {
    margin-bottom: 30px;
    width: 100%;
    @media (max-width: 790px) {
      width: 100%;
    }
  }

  .footer-menu {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;

    .footer-city-selector {
      margin-left: 40px;
    }

    @media (max-width: 420px) {
      display: inline-block;
    }

    ul li {
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;

        &:visited {
          color: inherit;
        }
      }
    }
  }
`;

export const Coders = styled.div.attrs({
  className: "coders"
})`
  background-color: #262626;
  .container {
    display: flex;
    padding: 20px;
    flex-direction: row;
    color: white;
    justify-content: flex-end;
    align-items: center;

    span {
      margin-right: 20px;
    }
  }
`;