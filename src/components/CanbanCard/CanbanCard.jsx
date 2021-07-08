import { Card, CardTitle, Date, List, Img, Wrapper, Container, CanbanButton } from "./style";

const CanbanCard = ({date ="22 May, 2021", title = "Scrum project scoping."}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <Date>{date}</Date>
      <Wrapper>
        <List>
          <li>
            <Img
              src="/assets/img/avatar.png"
              alt="Avatar"
              width="24"
              height="24"
            />
          </li>
          <li>
            <Img
              src="/assets/img/avatar.png"
              alt="Avatar"
              width="24"
              height="24"
            />
          </li>
        </List>
        <Container>
          <CanbanButton
            bgimage={"/assets/icons/edit.svg"}
            title="Edit"
          />
          <CanbanButton
            bgimage={"/assets/icons/clip.svg"}
            title="Clip"
          />
        </Container>
      </Wrapper>
    </Card>
  );
};

export default CanbanCard;
