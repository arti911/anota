import { SortableContainer } from "react-sortable-hoc";
import SortableItemNote from "../SortableItemNote";

const SortableListOfNotes = SortableContainer((props) => (
  <div style={{ display: "contents" }}>
    {props.notes.map((item, index) => (
      <SortableItemNote note={item} indx={index} key={item.id} index={index} />
    ))}
  </div>
));

export default SortableListOfNotes;
