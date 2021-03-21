import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: #f0f1f6;
  padding-bottom: 11rem;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  .text {
    display: grid;
    place-items: center;
    margin-top: 7rem;
    margin-bottom: 3rem;
    text-align: center;

    h2 {
      font-size: 2rem;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 10fr 1fr 10fr 1fr 10fr;
  }

  .cards--divisor {
    height: 0.5rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary.Cyan};
    position: relative;
    top: 65%;
  }

  @media (max-width: 768px) {
    padding-bottom: 5rem;

    .container {
      display: flex;
      flex-direction: column;

      .text {
        margin-top: 5rem;

        h2 {
          font-size: 1.5rem;
        }

        p {
          br {
            display: none;
          }
        }
      }

      .cards {
        display: flex;
        flex-direction: column;
        margin-top: 3rem;

        .cards--divisor {
          height: 5rem;
          width: 0.5rem;
          background-color: ${({ theme }) => theme.colors.primary.Cyan};
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
      }
    }
  }
`;

export default Section;
