import { CustomInput, Wrapper, Label } from "./style";

const Input = ({name = "Name", type = "text"}) => {
  return (
    <Wrapper>
      <CustomInput type={type} placeholder=" " name={name} id={name}/>
      <Label for={name}>{name}</Label>
    </Wrapper>
  );
};

export default Input;
