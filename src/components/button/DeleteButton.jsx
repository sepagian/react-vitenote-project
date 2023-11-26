import { MdDelete } from "react-icons/md";
import { PropTypes } from "prop-types";
const DeleteButton = ({ id, onDelete }) => {
  return (
    <div className="tooltip" data-tip="Delete">
      <button
        className="btn btn-ghost join-item btn-sm"
        onClick={() => onDelete(id)}
      >
        <MdDelete size={20} />
      </button>
    </div>
  );
};
DeleteButton.propTypes = {
  id: PropTypes.number,
  onDelete: PropTypes.func,
};

export default DeleteButton;
