type Props = {
  handleDeleteCompleteds: () => void;
};

const ClearCompletedButton = (props: Props) => {
  return (
    <button
      onClick={props.handleDeleteCompleteds}
      className="dark:hover:text-[#E3E4F1] transition-all"
    >
      Clear Completed
    </button>
  );
};

export default ClearCompletedButton;
