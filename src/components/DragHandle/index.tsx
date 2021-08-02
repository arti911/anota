import { SortableHandle } from "react-sortable-hoc";
import { MenuOutlined } from "@ant-design/icons";

import "./style.scss";

const DragHandle = SortableHandle(() => <div className="drag-handle"><MenuOutlined /></div>);

export default DragHandle;
