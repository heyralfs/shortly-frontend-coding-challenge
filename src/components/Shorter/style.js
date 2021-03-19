import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  padding: 3rem 3.5rem;
  background: ${({ theme }) => theme.colors.primary.DarkViolet}
    url(${(props) => props.bgDesktop});
  border-radius: 0.5rem;

  form {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
  }

  input,
  .btn {
    height: 3.5rem;
    border-radius: 0.5rem;
    border: none;
  }

  input {
    padding: 0 2rem;
  }
  input::placeholder {
    color: ${({ theme }) => theme.colors.neutral.Gray};
  }
  input:focus {
    outline: none;
  }

  .btn {
    padding: 0 2rem;
  }
`;

export default FormContainer;
