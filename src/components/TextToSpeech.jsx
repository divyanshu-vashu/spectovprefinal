import React, { useState, useEffect } from 'react';
import '../Styles/TTS.css';

const TextToSpeech = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (isEnabled) {
      speakContent();
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isEnabled]);

  const speakContent = () => {
    const text = document.body.innerText; // Get all the text on the body
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

  return (
    <div>
      <button onClick={toggleTTS} className='tts-button'>
        {isEnabled ? 'Disable' : 'Enable'} Text-to-Speech
      </button>
    </div>
  );
};

export default TextToSpeech;
