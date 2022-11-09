import { FormStyled, InputStyled, ButtonStyled } from './Form.styled';

const Form = ({ onChange, onSubmit, inputValue }) => {
  return (
    <FormStyled action="" onSubmit={onSubmit}>
      <InputStyled type="text" value={inputValue} onChange={onChange} />
      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

export default Form;
