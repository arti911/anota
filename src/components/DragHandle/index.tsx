import { MenuOutlined } from '@ant-design/icons';
import { SortableHandle } from 'react-sortable-hoc';

import './style.scss';

const DragHandle = SortableHandle(() => (
  <div className="drag-handle">
    <MenuOutlined />
  </div>
));

export default DragHandle;
