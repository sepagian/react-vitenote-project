import { useState } from "react";
import PropTypes from "prop-types";

const AddNoteModal = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const onTitleChangeHandler = (event) => {
    const setTitle = event.target.value.slice(0, 50);
    setNote({
      ...note,
      title: setTitle,
    });
  };

  const onBodyChangeHandler = (event) => {
    const setBody = event.target.value.slice(0, 50);
    setNote({
      ...note,
      body: setBody,
    });
  };

  const onSubmitHandler = () => {
    if (!note.title || !note.body) return;
    addNote(note);
    setNote({
      title: "",
      body: "",
    });
  };

  return (
    <dialog id="addNoteModal" className="modal">
      <div className="modal-box">
        <div className="form-control flex">
          <input
            type="text"
            placeholder="Your note title goes here..."
            className="input input-bordered"
            name="title"
            value={note.title}
            onChange={onTitleChangeHandler}
          />
          <label className="label pb-5">
            <span className="label-text-alt">
              {note.title.length}/50 characters
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered h-40"
            placeholder="Your note body goes here..."
            name="body"
            value={note.body}
            onChange={onBodyChangeHandler}
          />
          <label className="label">
            <span className="label-text-alt">
              {note.body.length}/280 characters
            </span>
          </label>
          <div className="modal-action">
            <form
              method="dialog"
              className="flex gap-2"
              onSubmit={onSubmitHandler}
            >
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById("addNoteModal").close()}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

AddNoteModal.propTypes = {
  addNote: PropTypes.func,
};
export default AddNoteModal;
