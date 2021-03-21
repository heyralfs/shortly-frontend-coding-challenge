import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  height: 7.5rem;
  color: ${({ theme }) => theme.colors.neutral.Gray};
  z-index: 9;

  & * {
    font-size: 0.85rem;
  }

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  nav,
  & > div > div {
    display: flex;
    align-items: center;
  }

  & > div > div {
    justify-content: flex-end;
  }

  .logo {
    margin-right: 2.5rem;
  }

  .navLinks {
    display: inline;
  }

  .navLinksItem {
    list-style: none;
    display: inline-block;
    margin-right: 2rem;
    transition: all 200ms;
    &:hover {
      color: ${({ theme }) => theme.colors.neutral.VeryDarkViolet};
    }
  }

  .login {
    cursor: pointer;
  }

  .btn.signUp {
    padding: 0.4rem 1rem;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    height: 4rem;

    transition: all 200ms;
    &.bg-white {
      background: white;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .mobileMenuIcon {
      color: ${({ theme }) => theme.colors.primary.Gray};
      position: absolute;
      right: 1.3rem;
      top: 1.75rem;
      cursor: pointer;

      &:after {
        content: "";
        display: block;
        width: 1.2rem;
        height: 2px;
        border-radius: 2px;
        background: currentColor;
        box-shadow: 0 6px currentColor, 0 -6px currentColor;
      }
    }
  }
`;

export default HeaderContainer;
