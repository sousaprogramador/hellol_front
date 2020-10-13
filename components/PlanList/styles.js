import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 80px;

  @media (min-width: 2159px) and (max-width: 2239px) {
    padding: 30px 400px;
  }

  @media (min-width: 1902px) and (max-width: 2158px) {
    padding: 30px 300px;
  }

  @media (min-width: 1840px) and (max-width: 1901px) {
    padding: 30px 200px;
  }

  @media (min-width: 1720px) and (max-width: 1839px) {
    padding: 30px 300px;
  }

  @media (max-width: 800px) {
    padding: 30px 30px;
  }

  > div {
    float: left;
    margin: 10px;
    float: left;
    margin: 10px;
  }
`;