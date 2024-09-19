export default function MemePreview(props) {
  return (
    <div>
      <img alt="meme-preview" src={props.memeURL} data-test-id="meme-image" />
    </div>
  );
}
