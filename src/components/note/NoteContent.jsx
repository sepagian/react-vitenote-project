import { PropTypes } from "prop-types";

const NoteContent = ({ title, body }) => {
  return (
    <div>
      <h2 className="card-title">{title}</h2>
      <div className="prose whitespace-pre-line pb-4 font-serif text-base">
        {body}
      </div>
    </div>
  );
};

NoteContent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default NoteContent;
