function Button({ children, size, ...otherProps }) {
  // define button height and width

  //   three sizes
  const large = {
    height: "60px",
    width: "120px",
  };
  const medium = {
    height: "40px",
    width: "80px",
  };
  const small = {
    height: "20px",
    width: "60px",
  };

  const sizes = {
    large,
    medium,
    small,
  };

 

  let height = sizes[size].height;
  let width = sizes[size].width;

  return (
    <button
      style={{
        width: width,
        height: height,
        borderRadius: "8px",
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
}
export default Button;
