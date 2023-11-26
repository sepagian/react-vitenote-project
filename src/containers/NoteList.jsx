import { PropTypes } from "prop-types";
import NoteItem from "../components/note/NoteItem";

const NoteList = ({ notes, onDelete, onArchive, onRestore }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            onRestore={onRestore}
            {...note}
          />
        ))}
      </div>
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onRestore: PropTypes.func,
};

export default NoteList;
