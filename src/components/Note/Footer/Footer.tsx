import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { IFooterNote } from "./interface";

const FooterNote = (props: IFooterNote) => {
  return (
    <>
      <div />
      <div style={{ textAlign: "center" }}>
        Done {props.todos.filter((item) => item.isCheck).length} of&nbsp;{" "}
        {props.todos.length}
      </div>
      <div>
        {!props.isVisibleNote && (
          <Button type="text" icon={<EyeOutlined />} onClick={props.clickHandler} />
        )}
      </div>
    </>
  );
};

export default FooterNote;
