function Button({ text }) {
  return (
    <button className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-2 rounded-lg">
      {text}
    </button>
  );
}

export default Button;

export function FormButton({ currentStep, steps }) {
  return (
    <button
      className="flex items-center justify-center bg-[var(--yellow)] w-[150px] p-3 rounded-lg"
      onClick={(step) => step + 1}
    >
      {currentStep === steps.length - 1 ? "Submit" : "Continue"}
    </button>
  );
}
