import CustomButton from "./style";

const Button = ({ model = "primary", children, notification, ...styles }) => {
  return (
      <CustomButton model={model} {...styles}>{children}</CustomButton>
  );
};

export default Button;
