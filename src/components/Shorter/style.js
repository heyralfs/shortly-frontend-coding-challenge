import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  padding: 2.5rem 3.5rem;
  background: ${({ theme }) => theme.colors.primary.DarkViolet}
    url(${(props) => props.bgDesktop});
  border-radius: 0.5rem;

  form {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
  }

  input,
  .btn {
    height: 3.5rem;
    border-radius: 0.5rem;
    border: none;
    margin: 0.5rem 0;
  }

  input {
    padding: 0 2rem;
    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.Gray};
    }
    &:focus {
      outline: none;
    }
  }

  input.error {
    border: 2px solid ${({ theme }) => theme.colors.secondary.Red};

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary.Red};
      opacity: 0.6;
    }
  }

  .btn {
    padding: 0 2rem;
    &:disabled {
      cursor: wait;
    }
  }

  .errorMessage {
    position: absolute;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary.Red};
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2.6rem);
    margin: 0 1.3rem;
    padding: 1.2rem;

    background: ${({ theme }) => theme.colors.primary.DarkViolet}
      url(${(props) => props.bgMobile}) no-repeat center center;
    background-size: cover;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0;

      input,
      .btn {
        height: 2.8rem;
        border: none;
        margin: 0;
        padding: 0 1rem;
      }
    }

    .errorMessage {
      font-size: 0.8rem;
      position: relative;
      margin-top: -0.8rem;
      margin-bottom: -0.2rem;
    }
  }
`;

export default FormContainer;
