import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" />
          <button>Start a Post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg.png" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.png" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.png" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article.png" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img style={{ width: "30px " }} src="/images/ellipsis.svg.png" />
            </button>
          </SharedActor>
          <Description>Descriptions</Description>
          <SharedImg>
            <a>
              <img src="/images/mount.jfif" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-679OQHapSpb9f5SwHarIQLTy5N9AQv4hzXXUKl1yOvJ7cblbFIzZsBm7E6lD8KzzgI&usqp=CAU" />
                <img src="https://icons-for-free.com/iconfiles/png/512/post+share+update+icon-1320184664023422580.png" />
                <span>Comments 85</span>
              </button>
            </li>
          </SocialCounts>
          <SocialIcons>
            <button>
              <img src="/images/like.png" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.png" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/share.png" />
              <span>Shared</span>
            </button>
            <button>
              <img src="/images/compass.png" />
              <span>Send</span>
            </button>
          </SocialIcons>
        </Article>
      </div>
    </Container>
  );
};

export default Main;
const Container = styled.div`
  grid-area: main;
`;
const CommonCart = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = styled(CommonCart)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      img {
        width: 25px;
        height: 25px;
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
        object-fit: cover;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        img {
          width: 30px;
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommonCart)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  width: 100%;
  margin-top: 8px;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      border: none;
      img {
        width: 30px;
      }
    }
  }
`;
const SocialIcons = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    border: none;
    padding: 8px;
    color: #0a66c2;
    margin-right: 12px;
    background-color: transparent;
    img{
      width: 25px;
      margin-right: 7px;
    }

    @media(min-width:768px){
   span{
    margin-left: 8px;
    
   }


    }
  }
`;
