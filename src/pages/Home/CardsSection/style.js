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
`;

export default Section;
