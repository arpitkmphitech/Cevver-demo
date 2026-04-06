export interface IButton {
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  loader?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IImage {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}
