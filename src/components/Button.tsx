interface ButtonProps {
  onClick: () => void;
  text: string;
  color: string;
}

export default function Button({ onClick, text, color }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold rounded-lg text-white transition-all duration-200 ${color} user-select-none`}
    >
      {text}
    </button>
  );
}
