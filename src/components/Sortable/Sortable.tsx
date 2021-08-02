import { SortableContainer, SortableElement } from "react-sortable-hoc";

const Wrapper = (props: any) => props.children;

const SortableList = SortableContainer(Wrapper);
const SortableItem = SortableElement(Wrapper);

export { SortableList, SortableItem };
