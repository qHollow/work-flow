import { CanbanSection, CanbanTitle, Img } from "./style";

const CanbanTale = ({children}) => {
  return (
    <CanbanSection>
      <CanbanTitle>
        Backlog
        <Img
          src="/assets/icons/settings.svg"
          alt="Settings"
          width="15"
          height="15"
        />
      </CanbanTitle>
      {
        children
      }
    </CanbanSection>
  );
};

export default CanbanTale;
