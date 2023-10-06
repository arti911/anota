import { ReactNode } from "react";
import { SortableContainer, SortableContainerProps, SortableElement, SortableElementProps } from "react-sortable-hoc";

const Wrapper = ({ children }: { children: ReactNode }) => children;

interface SortableListProps extends SortableContainerProps {
  children: ReactNode;
}

interface SortableItemProps extends SortableElementProps {
  children: ReactNode;
}

const SortableList = SortableContainer<SortableListProps>(Wrapper);
const SortableItem = SortableElement<SortableItemProps>(Wrapper);

export { SortableList, SortableItem };
