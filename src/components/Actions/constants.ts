import { ITodo } from 'interfaces';

export const ACTION_TYPE = {
  RESET: 'RESET',
  REMOVE: 'REMOVE',
};

export const SOLUTION = {
  YES: 'Да',
  NO: 'Нет',
};

export const list: ITodo[] = [
  {
    id: Date.now(),
    title: 'Путь к гражданской войне',
    isCheck: true,
  },
  {
    id: Date.now() + 1,
    title: 'Гражданская война',
    isCheck: false,
  },
  {
    id: Date.now() + 2,
    title: 'Удивительный Человек-паук',
    isCheck: true,
  },
  {
    id: Date.now() + 3,
    title: 'Новые мстители',
    isCheck: false,
  },
  {
    id: Date.now() + 4,
    title: 'Боевой дневник карателя',
    isCheck: false,
  },
];

export const isCompleted = list.some((item) => item.isCheck);
