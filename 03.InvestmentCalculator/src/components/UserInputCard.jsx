export default function UserInputCard({ children, val, targ, onChangeValue }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        required
        value={val}
        onChange={(event) => onChangeValue(targ, event.target.value)}
      />
    </div>
  );
}
