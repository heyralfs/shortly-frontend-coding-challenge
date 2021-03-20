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
`;

export default FormContainer;
