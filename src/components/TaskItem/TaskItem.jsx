import Status from "../Status";

import {
  Card,
  Title,
  Type,
  DateContainer,
  Footer,
  Avatar,
  Name,
  EditList,
  Wrapper,
} from "./style";

const TaskItem = ({ title, type, date, name, status }) => {
  return (
    <Card tabIndex="0">
      <Title>
        Prepare backlogs for developers before sprints <Type>Reminder</Type>
      </Title>
      <DateContainer>
        <span>Due date:</span>
        May 13, 2021
      </DateContainer>
      <Footer>
        <Wrapper>
          <Avatar
            src="/assets/img/avatar.png"
            alt="Avatar"
            width="24"
            height="24"
          />
          <Name>Juana Bridges</Name>
        </Wrapper>
        <Wrapper>
          <EditList>
            <li>
              <img
                src="/assets/icons/active.svg"
                alt="Active"
                width="12"
                height="12"
                title="Active"
              />
            </li>
            <li>
              <img
                src="/assets/icons/completed.svg"
                alt="Completed"
                width="12"
                height="12"
                title="Completed"
              />
            </li>
            <li>
              <img
                src="/assets/icons/edit.svg"
                alt="Edit"
                width="12"
                height="12"
                title="Edit"
              />
            </li>
            <li>
              <img
                src="/assets/icons/trash.svg"
                alt="Delete"
                width="12"
                height="12"
                title="Delete"
              />
            </li>
          </EditList>
          <Status />
        </Wrapper>
      </Footer>
    </Card>
  );
};

export default TaskItem;
