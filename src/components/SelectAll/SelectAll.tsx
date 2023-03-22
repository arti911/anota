import { CheckOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';

const { Text } = Typography;

interface SelectAllProps {
  onSelect: () => void;
}

const SelectAll = (props: SelectAllProps) => {
  const { onSelect } = props;

  return (
    <>
      <Button type="primary" icon={<CheckOutlined />} shape="circle" size="large" onClick={onSelect} />
      <figcaption>
        <Text>Выбрать всё</Text>
      </figcaption>
    </>
  );
};

export default SelectAll;
