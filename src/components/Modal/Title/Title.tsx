import { Typography } from "antd";
import { useEffect } from "react";

import { useAppSelector } from "../../../hook";
import { ITitle } from "../../../interfaces/Modal/types";

const { Text } = Typography;

const TitleModal = (props: ITitle) => {
  const title = useAppSelector((state) => state.modal.title);

  useEffect(() => {
    props.setTitleHandler(title);
  }, []);

  const options = {
    onChange: props.setTitleHandler
  };

  return <Text editable={options}>{props.title}</Text>;
};

export default TitleModal;
