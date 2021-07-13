import { TagContainer } from "./style";

const Tag = ({tag = "UX"}) => {
  return (
    <TagContainer>#{tag}</TagContainer>
  );
};

export default Tag;