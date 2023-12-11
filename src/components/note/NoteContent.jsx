import { PropTypes } from "prop-types";
import { Link } from "wouter";

const NoteContent = ({ id, title, body }) => {
  return (
    <div>
      <Link href={`/note/${id}`}>
        <a className="card-title text-primary">{title}</a>
      </Link>
      <div className="prose whitespace-pre-line pb-4 font-serif text-base">
        {body}
      </div>
    </div>
  );
};

NoteContent.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
};

export default NoteContent;
