import styled from "styled-components";

export const Container = styled.div`
  cursor: default;
  width: 100%;
  position: relative;
  min-height: 600px;
  background-color: #f5f5f5;
  padding: 30px 0 80px;

  .wrapper-content > .show {
    padding: 0 5px;
  }
  #plans-title {
    font-weight: 100;
    font-family: Lato;
    font-size: 3em;
    text-align: center;
    margin: 30px auto;
  }

  .plans {
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #city-name {
    text-transform: capitalize;
  }

  @keyframes zoominoutsinglefeatured {
    0% {
      transform: scale(0, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .fade-out {
    opacity: 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    40% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }

  .hidden {
    display: none;
  }

  .show {
    display: block;
    animation-name: zoominoutsinglefeatured;
    animation-duration: 1s;
  }

  .fade-in {
    -webkit-animation: fadeIn 1s forwards;
    animation: fadeIn 1s forwards !important;
  }

  #plan-form {
    background: red;
  }
`;