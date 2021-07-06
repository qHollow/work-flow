import styled from "styled-components";

import Header from "../components/Header";
import Aside from "../components/Aside";

const Wrapper = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Aside />
    </Wrapper>
  );
};

export default Home;