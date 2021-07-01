import { useSelector } from "react-redux";
import { Row, Col, Layout, Statistic } from "antd";

import Logo from "../Logo";

const { Header } = Layout;

const HeaderAnota = () => {
  const notes = useSelector((state) => state.anota);

  return (
    <Header className="anota__header">
      <Row justify="space-between" align="middle">
        <Col>
          <Logo />
        </Col>
        <Col>
          <Statistic
            title="Количество заметок"
            value={notes.length}
            valueStyle={{ color: "white" }}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderAnota;
