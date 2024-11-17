import Button from "./Button";
import { useDotsStore } from "../store/useDotsStore";
import { debounce } from "../utils/timeUtils.ts";

export default function ControlsPanel() {
  const { addDots, updateSpeed, resetState } = useDotsStore();

  const handleAddDots = debounce(() => {
    addDots(5); // Adds dots only after user stops clicking rapidly
  }, 300);

  return (
    <div className="relative z-10 flex gap-4 justify-center mt-6">
      <Button
        onClick={handleAddDots}
        text="Add 5 Dots"
        color="bg-blue-500 hover:bg-blue-600"
      />
      <Button
        onClick={() => updateSpeed(2)}
        text="Double Speed"
        color="bg-green-500 hover:bg-green-600"
      />
      <Button
        onClick={resetState}
        text="Reset State"
        color="bg-red-500 hover:bg-red-600"
      />
    </div>
  );
}
