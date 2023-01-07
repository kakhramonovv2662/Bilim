import styled from "styled-components";

export const FooterStyle = styled.footer`
  padding: 50px;

  .footer-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-text {
    text-align: center;
    margin-top: 20px;
    font-size: 0.875rem;
    color: #5d6778;

    @media only screen and (max-width: 500px) {
      font-size: 0.575rem;
    }
  }
`;
