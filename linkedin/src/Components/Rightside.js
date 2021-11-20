import React from "react";
import styled from "styled-components";

const Rightside = () => {
  return (
    <Container>
      <FollowCart>
          dslsm
      </FollowCart>
    </Container>
  );
};

export default Rightside;
const Container = styled.div`
  grid-area: rightside;
`;
const FollowCart = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  padding: 13px;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%) , 0 0 0 rgb( 0 0 0 /20%) ;
`;
