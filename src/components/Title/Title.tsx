import { Typography } from "antd";
import { useEffect } from "react";

import { useAppSelector } from "../../hook";

import { ITitle } from "./interface";

const { Text } = Typography;

const TitleModal = (props: ITitle) => {
  const { title } = useAppSelector((state) => state.modal);

  useEffect(() => {
    props.handlers.setLocalTitle(title);
  }, []);

  const options = {
    onChange: props.handlers.setLocalTitle
  };

  return <Text editable={options}>{props.title}</Text>;
};

export default TitleModal;
