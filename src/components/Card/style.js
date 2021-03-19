import styled from "styled-components";

const CardBody = styled.div`
  background: #fff;
  position: relative;
  width: 100%;
  border-radius: 0.5rem;

  margin-top: 2.5rem;
  padding: 4rem 2rem 2rem 2rem;

  &.card--2 {
    top: 2.5rem;
  }
  &.card--3 {
    top: 5rem;
  }

  .card--icon {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    position: absolute;
    top: -2.5rem;
    left: 2rem;
    background: ${({ theme }) => theme.colors.primary.DarkViolet};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card--title {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 1.2rem;
    }
  }

  .card--text {
    p {
      font-size: 0.8rem;
    }
  }
`;

export default CardBody;
