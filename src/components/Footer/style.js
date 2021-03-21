import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 0;

  background: ${({ theme }) => theme.colors.neutral.VeryDarkViolet};

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }

  .footer--logo path {
    fill: #fff;
  }

  h1 {
    color: #fff;
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.neutral.Gray};
    transition: all 200ms;
    &:hover {
      color: ${({ theme }) => theme.colors.primary.Cyan};
    }
  }

  .footer--features,
  .footer--resources,
  .footer--company {
    li {
      margin-bottom: 0.5rem;
    }
  }

  .footer--socialLinks {
    ul {
      display: flex;
      justify-content: space-evenly;
    }
    a {
      path {
        transition: all 200ms;
      }
      &:hover path {
        fill: ${({ theme }) => theme.colors.primary.Cyan};
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    .footer--logo {
      margin-bottom: 3rem;
    }

    .footer--features,
    .footer--resources,
    .footer--company {
      margin-bottom: 2.5rem;
    }

    .footer--socialLinks {
      width: 100%;
      max-width: 9rem;
      ul {
      }
    }
  }
`;

export default FooterContainer;
