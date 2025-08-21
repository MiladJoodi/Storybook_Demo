// Button.tsx
export interface ButtonProps {
  children?: React.ReactNode;
  color?: 'blue' | 'gray';
  onClick?: () => void;
}

export function Button({ children, color = 'blue', onClick }: ButtonProps) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
}
