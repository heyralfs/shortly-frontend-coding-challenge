import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 14rem;
  background: ${({ theme }) => theme.colors.primary.DarkViolet}
    url(${(props) => props.bgDesktop});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .btn {
    width: 11rem;
    height: 4rem;
    border-radius: 5rem;
  }

  @media (max-width: 768px) {
    background: ${({ theme }) => theme.colors.primary.DarkViolet}
      url(${(props) => props.bgMobile});
    height: 16rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .btn {
      width: 10rem;
      height: 3rem;
      border-radius: 5rem;
    }
  }
`;

export default Section;
