function Display({ children = 0 }) {
  return (
    <div id="timerDisplay" className="flex-col align-center justify-center">
      <h3>{children}</h3>
    </div>
  );
}
export default Display;
