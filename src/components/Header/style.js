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
  }

  .login {
    cursor: pointer;
  }

  .btn.signUp {
    padding: 0.4rem 1rem;
    margin-left: 2rem;
  }
`;

export default HeaderContainer;
