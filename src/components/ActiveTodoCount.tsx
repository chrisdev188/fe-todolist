type Props = {
  count: number;
};

const ActiveTodoCount = (props: Props) => {
  return <span>{props.count} items left</span>;
};

export default ActiveTodoCount;
