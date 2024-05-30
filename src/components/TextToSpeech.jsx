import React, { useState, useEffect, useRef } from 'react';
import '../Styles/TTS.css';
import ttsIcon from '../assets/text-to-speech.png'; // Add your icon image path here

const TextToSpeech = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const [popupTimer, setPopupTimer] = useState(12); // Initial popup timer duration
  const [soundAllowed, setSoundAllowed] = useState(false); // State to track if sound is allowed
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
      setPopupTimer(prevTimer => prevTimer - 1);
    }, 1000);

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

  const toggleTTS = () => {
    setIsEnabled(!isEnabled);
  };

  const handleClosePopup = () => {
    setIsEnabled(false);
    setShowPopup(false);
  };

  const handleKeyDown = (event) => {
    if (event.code === 'Space' && showPopup && isEnabled) {
      setIsEnabled(false);
      setShowPopup(false);
      event.preventDefault();
    }
  };

  // Function to handle sound permission request
  const requestSoundPermission = () => {
    setSoundAllowed(false);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = ' ';
    utterance.onend = () => setSoundAllowed(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      {showPopup && <div className="overlay"></div>}
      {showPopup && !soundAllowed && (
        <div className="tts-popup">
          <p>Allow sound to use Text-to-Speech </p>
          <br/>
          <div className="tts_button_cont">
          <button onClick={requestSoundPermission} className="allow-sound-button">Allow Sound</button>
          <button onClick={handleClosePopup} className="allow-sound-button">Cancel</button>
          </div>
        </div>
      )}
      {showPopup && soundAllowed && (
        <div className="tts-popup">
          <button className="close-button" onClick={handleClosePopup}>Close</button>
          <p>{`If you want to disable Text-to-Speech, press the spacebar. Popup will close in ${popupTimer} seconds.`}</p>
        </div>
      )}
      <button onClick={toggleTTS} className='tts-icon-button' disabled={!soundAllowed}>
        <img src={ttsIcon} alt="TTS Icon" />
        <span>{isEnabled ? 'Disable' : 'Enable'} Text-to-Speech</span>
      </button>
    </div>
  );
};

export default TextToSpeech;
