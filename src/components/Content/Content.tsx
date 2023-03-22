import { EditFilled } from '@ant-design/icons';
import { Layout, Button, Row, Col, Empty } from 'antd';
import { arrayMove } from 'react-sortable-hoc';

import Note from 'components/Note';
import { ISort } from 'components/Note/interface';
import SortableItem from 'components/Sortable/components/SortableItem';
import SortableList from 'components/Sortable/components/SortableList';
import { useAppDispatch, useAppSelector } from 'hook';
import { saveNotesAfterSorting } from 'slices/appSlice';
import { onToggleShow } from 'slices/modalSlice';

import './style.scss';

const { Content } = Layout;

const ContentAnota = () => {
  const dispatch = useAppDispatch();

  const { notes, search } = useAppSelector((state) => state.anota);

  const onShowModal = () => dispatch(onToggleShow(true));

  const onSortEnd = ({ oldIndex, newIndex }: ISort) => {
    dispatch(saveNotesAfterSorting(arrayMove(notes, oldIndex, newIndex)));
  };

  if (search.value !== '' && search.notes.length === 0) return <Empty />;
  return (
    <Content className="anota-main">
      <Row gutter={[16, 24]}>
        {search.notes.length > 0 ? (
          search.notes.map((item) => {
            const { id, title, todos, isVisibleNote } = item;
            return (
              <Col key={item.id} className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
                <Note id={id} title={title} todos={todos} isVisibleNote={isVisibleNote} />
              </Col>
            );
          })
        ) : (
          <SortableList
            axis="xy"
            pressDelay={205}
            helperClass="anota-main__sort-list"
            onSortEnd={onSortEnd}
            useWindowAsScrollContainer
            renderItem={() => (
              <div style={{ display: 'contents' }}>
                <SortableItem
                  items={notes}
                  index={0}
                  renderItem={(item) => {
                    const { id, title, todos, isVisibleNote } = item;

                    return (
                      <Col className="note" xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Note id={id} title={title} todos={todos} isVisibleNote={isVisibleNote} />
                      </Col>
                    );
                  }}
                />
              </div>
            )}
          />
        )}
      </Row>
      <Button
        type="primary"
        shape="circle"
        icon={<EditFilled />}
        size="large"
        className="anota__btn-add-note"
        onClick={onShowModal}
      />
    </Content>
  );
};

export default ContentAnota;
