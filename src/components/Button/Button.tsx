import { ComponentProps, ElementType } from 'react';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export default function Button<E extends ElementType = typeof defaultElement>({
  children,

  as,
  ...otherProps
}: ButtonProps<E>) {
  const Btn = as || defaultElement;

  return <Btn {...otherProps}>{children}</Btn>;
}
