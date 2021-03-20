import styled from "styled-components";

const ResultBox = styled.div`
  width: 100%;
  height: 4rem;
  background: #fff;
  border-radius: 0.5rem;
  margin-top: 1.3rem;
  padding: 0 1.3rem;

  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 1.3rem;
  align-items: center;

  // animated arrival
  opacity: 0;
  transform: translateY(-20px);
  animation: animatedArrival 300ms forwards;

  @keyframes animatedArrival {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  //

  .short {
    color: ${({ theme }) => theme.colors.primary.Cyan};
    text-align: right;
  }

  .btn {
    font-size: 0.9rem;
    height: 2.5rem;
    width: 5.5rem;
    border-radius: 0.5rem;
    &.copied {
      background: ${({ theme }) => theme.colors.primary.DarkViolet};
    }
  }
`;

export default ResultBox;
