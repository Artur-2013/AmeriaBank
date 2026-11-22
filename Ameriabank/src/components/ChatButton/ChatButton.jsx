import { useState } from "react";
import { MessageSquareText } from "lucide-react";
import "./ChatButton.css";

export default function ChatButton() {
  const [showHint, setShowHint] = useState(true);

  return (
    <div className="chat">
      {showHint && <div className="chat__hint">Հարցեր ունե՞ս</div>}

      <button
        className="chat__btn"
        aria-label="Չատ"
        onClick={() => setShowHint(false)}
      >
        <MessageSquareText size={26} />
      </button>
    </div>
  );
}