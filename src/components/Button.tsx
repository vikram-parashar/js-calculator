function Button({ char, className = '', onPress }: any) {
  return (
    <button
      type="button"
      className={`bg-dawn-overlay text-dawn-text rounded-md grid py-[1vh] place-content-center ${className}`}
      onClick={() => onPress(char)}
    >
      {char}
    </button>
  );
}
export default Button;
