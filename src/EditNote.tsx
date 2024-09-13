import { useOutletContext } from "react-router-dom";
import { Note, NoteData, Tag } from "./App";
import { NewForm } from "./NewForm";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useOutletContext<Note>();
  return (
    <>
      <h1 className="mb-4">Edit Note!</h1>
      <NewForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
