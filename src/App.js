import './App.css';
import { useState } from 'react';
import DownloadButton from './DownloadButton';
import Input from './Input';
import MemePreview from './MemePreview';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [memeUrl, setMemeUrl] = useState('');
  const [userHasEntered, setUserHasEntered] = useState(false);

  const formattedTopText = topText.trim().replace(/ /g, '_') || '_';
  const formattedBottomText = bottomText.trim().replace(/ /g, '_') || '_';
  const firstRenderedUrl = `https://memegen.link/buzz/${formattedTopText}/${formattedBottomText}.jpg`;
  // Function which generates the memeURL
  function generateMemeUrl() {
    const imageUrl = `https://memegen.link/${memeTemplate}/${formattedTopText}/${formattedBottomText}.jpg`;
    return imageUrl;
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUserHasEntered(true);
      const newMemeUrl = generateMemeUrl();
      setMemeUrl(newMemeUrl);
    }
  };

  const memeToRender = userHasEntered
    ? memeUrl // If the user pressed enter, use the memeUrl generated from their input
    : firstRenderedUrl; // If no custom input yet, use default 'buzz' template

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
          onKeyDown={handleKeyDown}
        />
        <Input
          name="bottom-text"
          label="Bottom text"
          placeholderText="Type your bottom text"
          value={bottomText}
          onChange={(event) => setBottomText(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Input
          name="meme-template"
          label="Meme template"
          placeholderText='Type e.g. "buzz" '
          value={memeTemplate}
          onChange={(event) => setMemeTemplate(event.target.value)}
          onKeyDown={handleKeyDown}
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
        <MemePreview memeURL={memeToRender} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DownloadButton memeURL={memeToRender} />
      </div>
    </>
  );
}
