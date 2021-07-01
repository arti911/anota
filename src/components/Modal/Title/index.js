import { Typography } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const { Text } = Typography;

const TitleModal = (props) => {
  const title = useSelector((state) => state.modal.title);

  useEffect(() => {
    props.setTitleHandler(title);
  }, []);

  const options = {
    onChange: props.setTitleHandler
  };

  return <Text editable={options}>{props.title}</Text>;
};

export default TitleModal;
