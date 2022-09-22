function Input({ id, ...otherProps }) {
  return <input id={id} type="number" {...otherProps} />;
}
export default Input;
