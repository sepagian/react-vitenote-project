import { useState } from "react";
import { Link, Route, Switch } from "wouter";
import ActiveLink from "../components/button/ActiveLink";
import AddNoteButton from "../components/modal/AddNoteButton";
import AddNoteModal from "../components/modal/AddNoteModal";
import SearchBar from "../components/search/SearchBar";
import {
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import NoteDetail from "./NoteDetail";
import NoteList from "./NoteList";

const Home = () => {
  const [notes, setNotes] = useState(getAllNotes());
  notes.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const onDeleteHandler = (id) => {
    deleteNote(id);
    const updatedNotes = getActiveNotes();
    setNotes(updatedNotes);
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    const updatedNotes = getActiveNotes();
    setNotes(updatedNotes);
  };

  const onRestoreHandler = (id) => {
    unarchiveNote(id);
    const updatedNotes = getArchivedNotes();
    setNotes(updatedNotes);
  };

  const onAddNoteHandler = ({ title, body }) => {
    addNote({ title, body });
    const updatedNotes = getAllNotes();
    setNotes(updatedNotes);
  };

  const [searchInput, setSearchInput] = useState("");

  const filteredNotes = getActiveNotes().filter((note) => {
    return note.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  const archivedNotes = getArchivedNotes().filter((note) => {
    return note.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 px-4 pb-20 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <img src="/vite.svg" alt="" className="h-8" />
            <p className="font-sans text-2xl font-bold">ViteNote</p>
          </div>
          <input
            type="checkbox"
            value="light"
            className="theme-controller toggle"
          />
        </div>
        <div className="flex gap-4">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/archived">Archived</ActiveLink>
        </div>
        <SearchBar onSearchInput={setSearchInput} />
        <Switch>
          <Route path="/">
            {!filteredNotes.length ? (
              <p className="text-center">No notes exist</p>
            ) : (
              <>
                <div className="flex flex-col gap-4">
                  <NoteList
                    notes={filteredNotes}
                    onDelete={onDeleteHandler}
                    onArchive={onArchiveHandler}
                    onRestore={onRestoreHandler}
                  />
                </div>
                <AddNoteButton />
                <AddNoteModal addNote={onAddNoteHandler} />
              </>
            )}
          </Route>
          <Route path="/archived">
            {!archivedNotes.length ? (
              <p className="text-center">No archived notes</p>
            ) : (
              <div className="flex flex-col gap-4">
                <NoteList
                  notes={archivedNotes}
                  onDelete={onDeleteHandler}
                  onArchive={onArchiveHandler}
                  onRestore={onRestoreHandler}
                />
              </div>
            )}
          </Route>
          <Route path="/:id">
            <NoteDetail getNote={getNote} />
          </Route>
          <Route>
            Sorry the page you are looking for does not exist.
            <Link
              href="/"
              className="link underline decoration-2 underline-offset-8"
            >
              Return to Home
            </Link>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Home;
