import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link, Route, Switch, useRoute } from "wouter";
import AddNoteButton from "../components/modal/AddNoteButton";
import AddNoteModal from "../components/modal/AddNoteModal";
import SearchBar from "../components/search/SearchBar";
import { getInitialData } from "../utils/index";
import ArchivedList from "./ArchivedList";
import NoteList from "./NoteList";

const Home = () => {
  const [notes, setNotes] = useState(getInitialData());
  notes.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const onArchiveHandler = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: true,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const onRestoreHandler = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: false,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const onAddNoteHandler = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const [searchInput, setSearchInput] = useState("");

  const filteredNotes = notes
    .filter((note) => !note.archived)
    .filter((note) =>
      note.title.toLowerCase().includes(searchInput.toLowerCase()),
    );

  const archivedNotes = notes
    .filter((note) => note.archived)
    .filter((note) =>
      note.title.toLowerCase().includes(searchInput.toLowerCase()),
    );

  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a
          className={
            isActive
              ? "font-bold underline decoration-2 underline-offset-8"
              : ""
          }
        >
          {props.children}
        </a>
      </Link>
    );
  };

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
              <div className="flex flex-col gap-4">
                <NoteList
                  notes={filteredNotes}
                  onDelete={onDeleteHandler}
                  onArchive={onArchiveHandler}
                  onRestore={onRestoreHandler}
                />
              </div>
            )}
          </Route>
          <Route path="/archived">
            {!archivedNotes.length ? (
              <p className="text-center">No archived notes</p>
            ) : (
              <div className="flex flex-col gap-4">
                <ArchivedList
                  notes={archivedNotes}
                  onDelete={onDeleteHandler}
                  onArchive={onArchiveHandler}
                  onRestore={onRestoreHandler}
                />
              </div>
            )}
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
        <AddNoteButton />
        <AddNoteModal addNote={onAddNoteHandler} />
      </div>
    </>
  );
};

Home.propTypes = {
  children: PropTypes.array,
  href: PropTypes.string,
};

export default Home;
