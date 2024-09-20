import { saveAs } from 'file-saver';

export default function DownloadButton(props) {
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
      onClick={async () => {
        try {
          const response = await fetch(props.memeURL);

          const blob = await response.blob();

          const contentType = response.headers.get('content-type');
          const extension = contentType.includes('image/jpeg') ? 'jpeg' : 'jpg';

          saveAs(blob, `meme.${extension}`);
        } catch (error) {
          console.error('Error downloading the meme:', error);
        }
      }}
    >
      Download
    </button>
  );
}
