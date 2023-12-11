import { useParams } from "wouter";
import { PropTypes } from "prop-types";

const NoteDetail = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === Number(id));

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
  notes: PropTypes.array.isRequired,
};

export default NoteDetail;
