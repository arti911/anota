import { Typography } from 'antd';
import { useEffect } from 'react';

import { useAppSelector } from 'hook';

const { Text } = Typography;

interface TitleProps {
  text: string;
  onChange: (value: string) => void;
}

const TitleModal = (props: TitleProps) => {
  const { text, onChange } = props;

  const { title } = useAppSelector((state) => state.modal);

  useEffect(() => {
    onChange(title);
  }, [onChange, title]);

  const options = {
    onChange,
  };

  return <Text editable={options}>{text}</Text>;
};

export default TitleModal;
