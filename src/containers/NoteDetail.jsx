import { useParams } from "wouter";
import { PropTypes } from "prop-types";

const NoteDetail = ({ getNote }) => {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="container mx-auto max-w-3xl py-8">
      <h1 className="pb-2 font-sans text-3xl font-bold">{note.title}</h1>
      <p className="prose font-serif text-xl">{note.body}</p>
    </div>
  );
};

NoteDetail.propTypes = {
  getNote: PropTypes.func.isRequired,
};

export default NoteDetail;
