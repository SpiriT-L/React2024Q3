// Button.tsx
import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => (
  <button type={type}>{children}</button>
);

export default Button;
