import { ClassProp } from 'class-variance-authority/types';
import { ComponentProps } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;

declare type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

declare const inputStyles: (props?: ClassProp | undefined) => string;

export { }

/* ---------------- Modal ---------------- */
declare const modalContentStyles: (
  props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    variant?: "default" | "alert" | "fullscreen" | null | undefined;
  } & ClassProp) | undefined
) => string;

declare type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
} & ComponentProps<"div"> &
  VariantProps<typeof modalContentStyles>;

export declare const Modal: ForwardRefExoticComponent<
  Omit<ModalProps, "ref"> & RefAttributes<HTMLDivElement>
>;

