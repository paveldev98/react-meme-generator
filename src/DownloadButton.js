export default function DownloadButton(props) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = props.memeURL;
    link.download = 'meme.jpg';
    link.click();
  };

  return (
    <button
      style={{
        marginTop: '20px',
        background: '#4681f4',
        padding: '10px',
        border: '2px solid #4681f4',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
        marginBottom: '20px',
      }}
      onClick={handleDownload}
    >
      Download
    </button>
  );
}
