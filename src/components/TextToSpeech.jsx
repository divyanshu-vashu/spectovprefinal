import React, { useState, useEffect, useRef } from "react";
import "../Styles/TTS.css";

const TextToSpeech = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const [popupTimer, setPopupTimer] = useState(1000);
  const popupTimeoutRef = useRef(null);

  useEffect(() => {
    // Check if sound is allowed in the browser
    const checkSoundPermission = () => {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = ' ';
      utterance.onend = () => setSoundAllowed(true);
      window.speechSynthesis.speak(utterance);
    };

    checkSoundPermission();

    // Start speaking when component mounts if sound is allowed
    if (isEnabled && showPopup && soundAllowed) {
      speakPopup();
    } else if (isEnabled && !showPopup && soundAllowed) {
      speakContent();
    } else {
      window.speechSynthesis.cancel();
    }

    return () => {
      clearTimeout(popupTimeoutRef.current);
      window.speechSynthesis.cancel(); // Cancel speech synthesis on component unmount
    };
  }, [isEnabled, showPopup, soundAllowed]);

  useEffect(() => {
    if (showPopup && soundAllowed) {
      startPopupTimer();
      popupTimeoutRef.current = setTimeout(() => {
        setShowPopup(false);
      }, 12000); // Popup will close automatically after 12 seconds
    } else {
      clearTimeout(popupTimeoutRef.current);
      setPopupTimer(12); // Reset popup timer duration
    }

    return () => {
      clearTimeout(popupTimeoutRef.current);
      window.speechSynthesis.cancel(); // Cancel speech synthesis on component unmount
    };
  }, [showPopup, soundAllowed]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.speechSynthesis.cancel(); // Cancel speech synthesis on component unmount
    };
  }, []);

  const startPopupTimer = () => {
    const timerInterval = setInterval(() => {
      setPopupTimer((prevTimer) => prevTimer - 1);
    }, 2000);

    return () => clearInterval(timerInterval);
  };

  const speakPopup = async () => {
    const popupText = `If you want to disable Text-to-Speech, press the spacebar. Popup will close in ${popupTimer} seconds.`;
    speakText(popupText);
  };

  const speakContent = () => {
    const text = document.body.innerText;
    speakText(text);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices()[0]; // Use the browser's default voice
    window.speechSynthesis.speak(utterance);
  };

  const getMicrosoftMarkVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find(
      (voice) => voice.name === "Microsoft Mark - English (United States)",
    );
  };

  const toggleTTS = () => {
    setIsEnabled(!isEnabled);
  };

  const handleClosePopup = () => {
    setIsEnabled(false);
    setShowPopup(false);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Space" && showPopup && isEnabled) {
      setIsEnabled(false);
      setShowPopup(false);
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.speechSynthesis.cancel();
    };
  }, [showPopup, isEnabled]);

  return (
    <div>
      {showPopup && (
        <div className="w-50 text-bold z-1000 fixed left-1/2 top-[40%] flex -translate-x-2/4 transform items-center justify-center rounded border-2 border-double border-[#1b00b0] bg-[#000000e0] p-10 text-base text-white shadow-[8px_-3px_49px_27px_#9F9D9C31] md:text-xl">
          <button className="close-button" onClick={handleClosePopup}>
            x
          </button>
          <p>{`Press Spacebar to disable Text-to-Speech, this automatically will close in ${popupTimer} seconds.`}</p>
        </div>
      )}
      <button
        onClick={toggleTTS}
        className="hover:border-black-2 fixed bottom-7 right-8 rounded-2xl bg-secondary bg-opacity-50 px-5 py-5 text-white transition-all duration-150 hover:bg-[#6e54ff] hover:bg-opacity-50"
      >
        {isEnabled ? "Disable" : "Enable"} Text-to-Speech
      </button>
    </div>
  );
};

export default TextToSpeech;
