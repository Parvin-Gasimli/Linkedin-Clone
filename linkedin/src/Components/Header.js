import styled from "styled-components";
import React from "react";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NabList>
              <a>
                <img src="/images/nav-home.svg" />
                <span>Home</span>
              </a>
            </NabList>

            <NabList>
              <a>
                <img src="/images/nav-network.svg" />
                <span>My-Network</span>
              </a>
            </NabList>

            <NabList>
              <a>
                <img src="/images/nav-jobs.svg" />
                <span>Jobs</span>
              </a>
            </NabList>

            <NabList>
              <a>
                <img src="/images/nav-messaging.svg" />
                <span>Messaging</span>
              </a>
            </NabList>

            <NabList>
              <a>
                <img src="/images/nav-notifications.svg" />
                <span>Notifications</span>
              </a>
            </NabList>
            <User>
              <a>
                <img src="/images/user.svg" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" />
                <span>
                  Work
                  <img className="down" src="/images/down-icon.svg" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 27px;
  position: fixed;
  z-index: 100;
  top: 0;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1120px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0px 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  width: 48px;
  z-index: 1;
  top: 10px;
  left: 3px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s;
`;
const Nav = styled.div`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
`;
const NabList = styled.li`
  display: flex;
  align-items: center;
  a {
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 60px;
    min-width: 33px;
    position: relative;
    margin-right: 55px;
    text-decoration: none;
    img {
        width: 33px;
    height: 34px;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 40px;
      margin-right: 57px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 47px;
  right: 320px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 120px;
  text-align: center;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;

 display: none;
  color: black;
`;
const User = styled(NabList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
      
    }
  }
`;

const Work = styled(User)`
  .down {
    width: 20px;
    height: 20px;
  }

  border-left: 1px solid black;
`;
