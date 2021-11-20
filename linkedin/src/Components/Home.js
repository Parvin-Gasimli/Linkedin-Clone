import React from "react";
import styled from "styled-components";

const Home = (props) => {
  return (
    <div>
      <Container>
        <Section>
          <h5>
            <a>Hiring in a hurry?-</a>
          </h5>
          <p>
            Find Talanted pros in record with UpWork and keep buisness moving
          </p>
        </Section>
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1120px;
  margin-right: auto;
  margin-left: auto;
`;
const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p{
      font-size: 14px;
      color: #434649;
      font-weight: 600;
  }
  @media(max-width:768px){
      flex-direction: column;
      padding: 0 5px;
  }
`;
