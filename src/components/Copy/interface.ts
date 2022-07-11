import { ButtonProps } from "antd";

export interface ICopy extends ButtonProps {
  isCompleted: boolean;
  handlers: any;
//   className: string;
}
