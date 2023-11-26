import { MdRestore } from "react-icons/md";
import { PropTypes } from "prop-types";
const RestoreButton = ({ id, onRestore }) => {
  return (
    <div className="tooltip" data-tip="Restore">
      <button
        className="btn btn-ghost join-item btn-sm"
        onClick={() => onRestore(id)}
      >
        <MdRestore size={20} />
      </button>
    </div>
  );
};
RestoreButton.propTypes = {
  id: PropTypes.number,
  onRestore: PropTypes.func,
};

export default RestoreButton;
