import { Row, Col, Layout, Statistic } from "antd";

import { useAppSelector } from "../../hook";

import Logo from "../Logo";

import "./style.scss";

const { Header } = Layout;

const HeaderAnota = () => {
  const notes = useAppSelector((state) => state.anota.notes);

  return (
    <Header className="anota-header">
      <Row justify="space-between" align="middle">
        <Col>
          <Logo />
        </Col>
        <Col>
          <Statistic
            title="Количество заметок"
            value={notes.length}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderAnota;
