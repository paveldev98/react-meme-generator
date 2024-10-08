import './App.css';
import { useState } from 'react';
import DownloadButton from './DownloadButton';
import Input from './Input';
import MemePreview from './MemePreview';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('aag');

  const generateMemeUrl = () => {
    return `https://api.memegen.link/images/${memeTemplate}/${topText.trim().replace(/ /g, '_') || '_'}/${bottomText.trim().replace(/ /g, '_') || '_'}.jpg`;
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ color: '#4681f4' }}>React Meme Generator</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <Input
          name="top-text"
          label="Top text"
          placeholderText="Type your text on top"
          onChange={(event) => {
            setTopText(event.target.value);
          }}
        />
        <Input
          name="bottom-text"
          label="Bottom text"
          placeholderText="Type your bottom text"
          onChange={(event) => {
            setBottomText(event.target.value);
          }}
        />
        <Input
          name="meme-template"
          label="Meme template"
          placeholderText='Type e.g. "aag" '
          onChange={(event) => {
            setMemeTemplate(event.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MemePreview memeURL={generateMemeUrl()} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DownloadButton memeURL={generateMemeUrl()} />
      </div>
    </>
  );
}
