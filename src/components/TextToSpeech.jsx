import React, { useState, useEffect, useRef } from 'react';
import '../Styles/TTS.css';

const TextToSpeech = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const [popupTimer, setPopupTimer] = useState(10);
  const popupTimeoutRef = useRef(null);

  useEffect(() => {
    if (isEnabled && showPopup) {
      speakPopup();
    } else if (isEnabled && !showPopup) {
      speakContent();
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isEnabled, showPopup]);

  useEffect(() => {
    if (showPopup) {
      startPopupTimer();
      popupTimeoutRef.current = setTimeout(() => {
        setShowPopup(false);
      }, 12000);
    } else {
      clearTimeout(popupTimeoutRef.current);
      setPopupTimer(12);
    }

    return () => {
      clearTimeout(popupTimeoutRef.current);
      window.speechSynthesis.cancel(); // Cancel speech synthesis on component unmount
    };
  }, [showPopup]);

  const startPopupTimer = () => {
    const timerInterval = setInterval(() => {
      setPopupTimer(prevTimer => prevTimer - 1);
    }, 2000); 

    return () => clearInterval(timerInterval);
  };

  const speakPopup = () => {
    const popupText = `If you want to disable Text-to-Speech, press the spacebar. Popup will close in ${popupTimer} seconds.`;
    speakText(popupText);
  };

  const speakContent = () => {
    const text = document.body.innerText; 
    speakText(text);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getMicrosoftMarkVoice();
    window.speechSynthesis.speak(utterance);
  };

  const getMicrosoftMarkVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find(voice => voice.name === 'Microsoft Mark - English (United States)');
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.speechSynthesis.cancel(); 
    };
  }, [showPopup, isEnabled]);

  return (
    <div>
      {showPopup && (
        <div className="tts-popup">
          <button className="close-button" onClick={handleClosePopup}>x</button>
          <p>{`If you want to disable Text-to-Speech, press the spacebar. Popup will close in ${popupTimer} seconds.`}</p>
        </div>
      )}
      <button onClick={toggleTTS} className='tts-button'>
        {isEnabled ? 'Disable' : 'Enable'} Text-to-Speech
      </button>
    </div>
  );
};

export default TextToSpeech;
