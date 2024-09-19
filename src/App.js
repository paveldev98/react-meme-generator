import './App.css';
import { useCallback, useEffect, useState } from 'react';
import DownloadButton from './DownloadButton';
import Input from './Input';
import MemePreview from './MemePreview';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState(''); // Default template
  const [memeUrl, setMemeUrl] = useState('');

  // Function to format text inputs
  const formatText = (text) => text.trim().replace(/ /g, '_') || '_';

  // Function which generates the meme URL, memoized to avoid unnecessary recreation
  const generateMemeUrl = useCallback(() => {
    const formattedTopText = formatText(topText);
    const formattedBottomText = formatText(bottomText);
    const template = memeTemplate.trim() || 'aag'; // Default to 'aag' template if empty

    const imageUrl = `https://memegen.link/${template}/${formattedTopText}/${formattedBottomText}.jpg`;
    return imageUrl;
  }, [topText, bottomText, memeTemplate]); // Dependencies include all values used in the function

  // Update the meme URL whenever text or template changes
  useEffect(() => {
    const newMemeUrl = generateMemeUrl();
    setMemeUrl(newMemeUrl);
  }, [generateMemeUrl]); // Properly add the generateMemeUrl to the dependencies

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
          value={topText}
          onChange={(event) => setTopText(event.target.value)}
        />
        <Input
          name="bottom-text"
          label="Bottom text"
          placeholderText="Type your bottom text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
        />
        <Input
          name="meme-template"
          label="Meme template"
          placeholderText='Type e.g. "doge" '
          value={memeTemplate}
          onChange={(event) => setMemeTemplate(event.target.value)}
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
        <MemePreview memeURL={memeUrl} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DownloadButton memeURL={memeUrl} />
      </div>
    </>
  );
}
