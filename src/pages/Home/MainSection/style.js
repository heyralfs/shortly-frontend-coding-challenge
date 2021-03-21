import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 40rem;

  .main--img {
    background: url(${(props) => props.bg}) left center no-repeat;
    height: 100%;
    width: 200%;
  }

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

  // mobile
  @media (max-width: 768px) {
    height: auto;

    .container {
      display: flex;
      flex-direction: column-reverse;
      padding: 0;

      .main--img {
        margin-top: 3rem;
        width: 100%;
        min-height: 100vw;
        background-position-x: left;
        background-size: 130%;
      }

      & > div {
        padding: 0 1.3rem;
        text-align: center;

        h1 {
          font-size: 2.3rem;
          margin-bottom: 1.5rem;
        }

        h2 {
          font-size: 1rem;
          br {
            display: none;
          }
        }

        .btn {
          margin: 1.5rem auto 5rem auto;
        }
      }
    }
  }
`;

export default Section;
