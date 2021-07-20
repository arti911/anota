import { useSelector } from "react-redux";
import { SortableContainer } from "react-sortable-hoc";
import SortableItemNote from "../SortableItemNote";

const SortableListOfNotes = SortableContainer(() => {
  const notes = useSelector((state) => state.anota);

  return (
    <div style={{ display: "contents" }}>
      {notes.map((item, index) => (
        <SortableItemNote
          note={item}
          indx={index}
          key={item.id}
          index={index}
        />
      ))}
    </div>
  );
});

export default SortableListOfNotes;
