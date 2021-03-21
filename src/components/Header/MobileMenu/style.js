import styled from "styled-components";

const MenuContainer = styled.nav`
  width: calc(100% - 2.6rem);
  max-width: 20rem;
  padding: 2rem 1.5rem;

  color: white;
  background: ${({ theme }) => theme.colors.primary.DarkViolet};
  border-radius: 0.5rem;

  position: fixed;
  top: 5rem;
  right: 1.3rem;

  // animation
  opacity: 0;
  transform: scale(0.2);
  pointer-events: none;
  transition: all 200ms;

  &.active {
    opacity: 1;
    transform: initial;
    pointer-events: initial;
    z-index: 999;
  }

  //

  hr {
    border-color: ${({ theme }) => theme.colors.neutral.GrayishViolet};
    margin: 2rem 0;
  }

  ul {
    text-align: center;
    font-weight: 700;

    li:not(:last-child) {
      margin-bottom: 2rem;
    }
    a {
      display: block;
      width: 100%;
    }
    .btn {
      width: 100%;
      height: 2.5rem;
      border-radius: 1.25rem;
      font-weight: 700;
    }
  }
`;

export default MenuContainer;
