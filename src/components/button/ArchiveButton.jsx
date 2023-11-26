import PropTypes from "prop-types";
import { MdArchive } from "react-icons/md";

const ArchiveButton = ({ id, onArchive }) => {
  return (
    <div className="tooltip" data-tip="Archive">
      <button
        className="btn btn-ghost join-item btn-sm"
        onClick={() => onArchive(id)}
      >
        <MdArchive size={20} />
      </button>
    </div>
  );
};
ArchiveButton.propTypes = {
  id: PropTypes.number,
  onArchive: PropTypes.func,
};

export default ArchiveButton;
