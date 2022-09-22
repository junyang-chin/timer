function Input({ id, size, ...otherProps }) {
  //   three sizes
  const large = {
    height: "60px",
    width: "180px",
  };
  const medium = {
    height: "40px",
    width: "100px",
  };
  const small = {
    height: "20px",
    width: "80px",
  };

  const sizes = {
    large,
    medium,
    small,
  };

  let height = sizes[size].height;
  let width = sizes[size].width;

  return (
    <input
      type="number"
      id={id}
      className="input"
      style={{
        height: height,
        width: width,
        paddingInline: '10px'
      }}
      placeholder={id}
      {...otherProps}
    />
  );
}
export default Input;
