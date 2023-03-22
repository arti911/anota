import { SearchOutlined } from '@ant-design/icons';
import { Layout, Statistic, Input } from 'antd';
import { debounce } from 'lodash';
import { SyntheticEvent, useEffect } from 'react';

import Logo from 'components/Logo';
import { useAppDispatch, useAppSelector } from 'hook';
import { setSearch } from 'slices/appSlice';
import { searchNotesFn } from 'utils';

import './style.scss';

const { Header } = Layout;

const HeaderAnota = () => {
  const dispatch = useAppDispatch();

  const { notes, search } = useAppSelector((state) => state.anota);

  const onSearch = (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;

    const searchNotes = searchNotesFn(notes, element.value);

    dispatch(
      setSearch({
        notes: element.value === '' ? [] : searchNotes,
        value: element.value,
      })
    );
  };

  useEffect(() => {
    const searchNotes = searchNotesFn(notes, search.value);

    dispatch(
      setSearch({
        notes: search.value === '' ? [] : searchNotes,
        value: search.value,
      })
    );
  }, [dispatch, notes, search.value]);

  const countNotes =
    search.notes.length > 0 || (search.value !== '' && search.notes.length === 0) ? search.notes.length : notes.length;

  return (
    <Header className="anota-header">
      <div className="anota-header__item anota-header__logo">
        <Logo />
      </div>
      <div className="anota-header__item anota-header__search">
        <Input
          size="large"
          placeholder="search"
          prefix={<SearchOutlined />}
          allowClear
          onChange={debounce(onSearch, 300)}
        />
      </div>
      <div className="anota-header__item anota-header__count">
        <Statistic title="Количество заметок" value={countNotes} />
      </div>
    </Header>
  );
};

export default HeaderAnota;
