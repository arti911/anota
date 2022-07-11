import { ButtonProps } from "antd";

export interface IConfirm extends ButtonProps {
  title: string;
  textBtn: string;
  isCompleted: boolean;
  actionType: string;
  handlers: any;
};