export default function Input(props) {
  return (
    <div style={{ marginTop: '8px' }}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        placeholder={props.placeholderText}
        style={{
          borderRadius: '5px',
          border: '2px solid #cccccc',
          height: '20px',
          marginLeft: '5px',
        }}
      />
    </div>
  );
}
