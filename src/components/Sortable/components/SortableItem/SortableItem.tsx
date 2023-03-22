import { ComponentClass, ReactNode } from 'react';
import { SortableElement, SortableElementProps } from 'react-sortable-hoc';

import TypeSortableElement from './type';

interface SortableItemProps extends SortableElementProps {
  items: TypeSortableElement[];
  renderItem: (item: TypeSortableElement) => ReactNode;
}

const SortableItem: ComponentClass<SortableItemProps> = SortableElement(({ items, renderItem }: SortableItemProps) => {
  if (items.length === 0) return <h1>Empty.</h1>;

  return items.map((item) => renderItem(item));
});

export default SortableItem;
