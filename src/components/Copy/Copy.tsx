import { Button, ButtonProps, Typography } from 'antd';

const { Text } = Typography;

interface ButtonCopyProps extends ButtonProps {
  isCompleted: boolean;
  settings: {
    text: string;
  };
}

const Copy = (props: ButtonCopyProps) => {
  const { isCompleted, className, settings } = props;

  return (
    <>
      <Button disabled={!isCompleted} type="primary" className={className} shape="circle" size="large">
        <Text copyable={settings} />
      </Button>
      <figcaption>
        <Text disabled={!isCompleted}>Скопировать</Text>
      </figcaption>
    </>
  );
};

export default Copy;
