export interface ButtonProps {
  children?: React.ReactNode;
  color?: 'blue' | 'gray';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, color = 'blue', onClick, disabled = false }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '16px',
        color: 'white',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
