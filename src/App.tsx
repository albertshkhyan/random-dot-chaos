import Header from "./components/Header";
import ControlsPanel from "./components/ControlsPanel";
import DotCanvas from "./components/DotCanvas";

export default function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
      {/* Animated Header */}
      <Header />

      {/* Control Panel with Button Actions */}
      <ControlsPanel />

      {/* Fullscreen Canvas for Animated Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <DotCanvas />
      </div>
    </div>
  );
}
