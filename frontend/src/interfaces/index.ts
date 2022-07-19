export interface ButtonInterface {
  value: string;
  type: string;
  style: {
    border?: string;
    padding?: string;
    borderRadius?: string;
    height?: string;
    width?: string;
    margin?: string;
  };
  click?: () => void;
  disabled?: boolean;
}

export interface Todo {
  _id: string;
  title: string;
  status: number;
  uid: string;
}

export interface TodoState {
  todos: Todo[];
}
