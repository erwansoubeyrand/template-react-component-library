import React from 'react';
import './Button.scss';

export interface ButtonProps {
  disabled?: boolean;
  type?: 'primary' | 'secondary';
  label: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      className={`btn btn-${props.type} btn-size-${props.size}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default Button;
