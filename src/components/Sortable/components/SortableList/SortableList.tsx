import { ComponentClass, ReactNode } from 'react';
import { SortableContainer, SortableContainerProps } from 'react-sortable-hoc';

interface SortableListProps extends SortableContainerProps {
  renderItem: () => ReactNode;
}
const SortableList: ComponentClass<SortableListProps> = SortableContainer(({ renderItem }: SortableListProps) =>
  renderItem()
);

export default SortableList;
