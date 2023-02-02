type Props = {
  handleDeleteCompleteds: () => void;
};

const ClearCompletedButton = (props: Props) => {
  return (
    <button onClick={props.handleDeleteCompleteds}>Clear Completed</button>
  );
};

export default ClearCompletedButton;
