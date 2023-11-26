import NoteContent from "./NoteContent";
import NoteActions from "./NoteActions";
import { PropTypes } from "prop-types";

const NoteItem = ({
  title,
  body,
  createdAt,
  id,
  archived,
  onDelete,
  onArchive,
  onRestore,
}) => {
  return (
    <div className="card card-compact bg-base-200">
      <div className="card-body prose justify-between break-words">
        <NoteContent title={title} body={body} />
        <NoteActions
          createdAt={new Date(createdAt).toLocaleString()}
          id={id}
          archived={archived}
          onDelete={onDelete}
          onArchive={onArchive}
          onRestore={onRestore}
        />
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  id: PropTypes.number,
  archived: PropTypes.bool,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onRestore: PropTypes.func,
};

export default NoteItem;
