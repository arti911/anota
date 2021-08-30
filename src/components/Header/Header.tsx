import { SyntheticEvent, useCallback } from "react";
import { Layout, Statistic, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../hook";

import { setSearch } from "../../appSlice";
import { searchNotesFn } from "../../utils";

import Logo from "../Logo";

import "./style.scss";

const { Header } = Layout;

const HeaderAnota = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.anota.notes);
  const search = useAppSelector((state) => state.anota.search);

  const onSearch = useCallback((event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;

    const searchNotes = searchNotesFn(notes, element.value);

    dispatch(setSearch({
      notes: element.value === "" ? [] : searchNotes,
      value: element.value
    }));
  }, [ dispatch, notes ]);

  const countNotes = search.notes.length > 0
    ? search.notes.length
    : search.value !== "" && search.notes.length === 0
    ? search.notes.length
    : notes.length;

  return (
    <Header className="anota-header">
      <div className="anota-header__item anota-header__logo">
        <Logo />
      </div>
      <div className="anota-header__item anota-header__search">
        <Input size="large" placeholder="search" prefix={<SearchOutlined />} allowClear onChange={onSearch} />
      </div>
      <div className="anota-header__item anota-header__count">
        <Statistic
          title="Количество заметок"
          value={countNotes}
        />
      </div>
    </Header>
  );
};

export default HeaderAnota;
