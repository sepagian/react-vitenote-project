const AddNoteButton = () => {
  return (
    <button
      className="btn btn-primary fixed inset-x-0 bottom-4 left-4 right-4 mx-auto max-w-3xl"
      onClick={() => document.getElementById("addNoteModal").showModal()}
    >
      Add Note
    </button>
  );
};

export default AddNoteButton;
