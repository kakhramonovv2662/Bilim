import styled from "styled-components";

export const MainContainer = styled.div`
  .footer-wrapper {
    padding: 40px 0;
  }
`;

//hero
export const HeroContainer = styled.div`
  background-color: #5aa9ff;

  .hero-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-wrapper {
    text-align: center;
    padding: 80px 0;
  }

  .hero-title {
    max-width: 800px;
    display: block;
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 2.8rem;
    font-weight: 600;
  }

  .hero-text {
    max-width: 800px;
    display: block;
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  .hero-search-input {
    width: 90%;
    border: none;
    padding: 12px;
    border-radius: 20px;

    :focus {
      outline: none;
      box-shadow: 0 0 8px 0.5px #c8cbcf;
    }

    ::placeholder {
      font-family: "Poppins", serif;
      font-weight: 500;
      color: #b2b5b8;
    }
  }
`;

//main

export const MainList = styled.ul`
  margin: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .main-title {
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #252930;
  }

  @media only screen and (max-width: 850px) {
    display: block;
  } ;
`;

export const MainListItem = styled.li`
  width: 300px;
  margin: 15px 12px;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 1px 0.6px #e2e5e8;
  transition: 0.5s ease;
  cursor: pointer;

  :hover {
    .main-color {
      background-color: #fff !important;
      transition: 0.5s ease;
    }
    background-color: #cde4fd;
    box-shadow: 0 0 10px 1px #cbcdd0;
    transition: 0.5s ease;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
    margin: 15px 0;
  } ;
`;

export const MainListItemLink = styled.a`
  display: block;
`;

export const MainIcon = styled.span`
  width: 50px;
  height: 50px;
  display: inline-block;
  background-color: #cde4fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 14px;
  transition: 0.5s ease;
`;

export const MainText = styled.p`
  color: #5d6778;
`;

//footer
export const FooterTitle = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  } ;
`;

export const FooterText = styled.p`
  max-width: 730px;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  text-align: center;
  opacity: 0.8;
  margin: 0 auto;
  margin-bottom: 30px;

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  } ;
`;

export const FooterButton = styled.button`
  display: block;
  font-family: "Poppins", serif;
  font-weight: 600;
  font-size: 17px;
  border: none;
  padding: 10px 20px;
  color: #5aa9ff;
  border-radius: 10px;
  box-shadow: 0 0 1px 0.5px #f4fcf6;
  margin: 0 auto;
  background-color: #fff;
  transition: 0.3s ease;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 10px 2px #828d9f;
    transition: 0.3s ease;
  }
`;
