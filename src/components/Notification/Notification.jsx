import styled, { css } from "styled-components";

import Button from "../Button";

const Wrapper = styled.div`
  position: relative;
  ${(props) =>
    props.count &&
    css`
      margin-right: 24px;
    `};
`;

const NotificationAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  position: absolute;
  top: 0;
  margin-left: 17px;
  color: #ffffff;
  background-color: #109cf1;
  width: max-content;
  height: 16px;
  border-radius: 10px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.02em;

  span {
    padding-right: 4px;
  }
`;

const Notification = ({ count }) => {
  return (
    <Wrapper count={count > 0}>
      <Button
        w={32}
        h={32}
        bgcolor={"#F6F6F6"}
        model={"secondary"}
        textColor={"#F6F6F6"}
      >
        <img src="/assets/icons/ring.svg" alt="Notification" />
      </Button>
      {count > 0 && (
        <NotificationAlert>
          <img
            src="/assets/icons/Notification.svg"
            alt="Notification"
            width="16"
            height="16"
          />
          <span>{count > 99 ? "99+" : count}</span>
        </NotificationAlert>
      )}
    </Wrapper>
  );
};

export default Notification;
