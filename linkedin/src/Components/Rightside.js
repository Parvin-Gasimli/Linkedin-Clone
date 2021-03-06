import React from "react";
import styled from "styled-components";

const Rightside = () => {
  return (
    <Container>
      <FollowCart>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recomendatiion>View all recommendations
        <img src="/images/right-icon.svg" />
        </Recomendatiion>
       
      </FollowCart>
      <BannerCart>
        <img src="https://pbs.twimg.com/media/DlxDLEWW0AA7cfh.jpg"/>

      </BannerCart>
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
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 8px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      min-height: 15px;
      max-width: 500px;
      text-align: center;
      outline: none;
    }
  }
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;
const Recomendatiion = styled.a`
color: #0a66c2;
display: flex;
font-size: 14px;
align-items: center;


`;
const BannerCart=styled(FollowCart)`
img{
  width: 100%;
  height: 100%;
}
`
