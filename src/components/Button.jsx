function Button({ id, children, size, ...otherProps }) {
  // define button height and width

  //   three sizes
  const large = {
    height: "60px",
    width: "120px",
    fontSize: "1.5rem",
  };
  const medium = {
    height: "40px",
    width: "80px",
    fontSize: "1rem",
  };
  const small = {
    height: "20px",
    width: "60px",
    fontSize: "0.8rem",
  };

  const sizes = {
    large,
    medium,
    small,
  };

  let height = sizes[size].height;
  let width = sizes[size].width;
  let fontSize = sizes[size].fontSize;
  return (
    <button
      id={id}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
}
export default Button;
