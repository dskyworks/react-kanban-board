const AddCardButton = ({ setAddingTask }) => {
  const handleAddingTask = () => {
    setAddingTask(true);
  };

  return (
    <button
      className="board__button board__button--add"
      onClick={handleAddingTask}
    >
      + Add card
    </button>
  );
};

export default AddCardButton;
