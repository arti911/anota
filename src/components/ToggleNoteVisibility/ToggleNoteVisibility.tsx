import { Button, Typography } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../hook";

import { setVisibleNote } from "../../slices/noteSlice";

const { Text } = Typography;

const ToggleNoteVisibility = () => {
  const dispatch = useAppDispatch();

  const { isVisibleNote } = useAppSelector((state) => state.note);

  const onToggleNoteVisibility = () => dispatch(setVisibleNote(!isVisibleNote));

  return (
    <>
      <Button
        type="primary"
        icon={isVisibleNote ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        onClick={onToggleNoteVisibility}
        shape="circle"
        size="large"
      />
      <figcaption>
        <Text>{isVisibleNote ? "Скрыть" : "Показать"}</Text>
      </figcaption>
    </>
  );
};

export default ToggleNoteVisibility;
