import PropTypes from "prop-types";
import RestoreButton from "./../button/RestoreButton";
import DeleteButton from "./../button/DeleteButton";
import ArchiveButton from "./../button/ArchiveButton";

const NoteActions = ({
  createdAt,
  id,
  onDelete,
  archived,
  onArchive,
  onRestore,
}) => {
  return (
    <div className="card-actions items-center justify-between">
      <div className="badge badge-primary badge-sm">{createdAt}</div>
      <div className="flex">
        {archived && <RestoreButton id={id} onRestore={onRestore} />}
        {!archived && <ArchiveButton id={id} onArchive={onArchive} />}
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

NoteActions.propTypes = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
};

export default NoteActions;
