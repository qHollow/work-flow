import { BarBody, BarTitle, BarName, Wrapper, Bar, CircleBack, CircleBar, CircleText } from "./style";

const TaskProgressBar = ({current = 0, max = 0}) => {
  return (
    <BarBody>
      <Wrapper>
        <BarTitle>Tasks</BarTitle>
        <BarName>Backlog</BarName>
      </Wrapper>
      <Bar
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <CircleBack r="30" cx="36" cy="36" />
        <CircleBar r="30" cx="36" cy="36" pathLength={max} strokeDasharray={`${current}, ${max}`} strokeLinecap="round" />
        <CircleText x="36" y="40">{current}/{max}</CircleText>
      </Bar>
    </BarBody>
  );
};

export default TaskProgressBar;
