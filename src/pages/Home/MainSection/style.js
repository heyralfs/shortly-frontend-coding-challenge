import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.bg}) right bottom no-repeat;
  background-position-x: 110%;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  .container > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary.DarkViolet};
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
  }

  h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.neutral.Gray};
    font-weight: 500;
  }

  .btn {
    margin-top: 2rem;
    width: 10rem;
    height: 3rem;
    border-radius: 3rem;
  }
`;

export default Section;
