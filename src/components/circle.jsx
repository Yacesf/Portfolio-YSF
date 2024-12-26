function Circle({ size, border, opacity, bgColor, top, left }) {
  return (
    <div
      style={{
        top,
        left,
      }}
      className={`absolute rounded-full ${size} ${border} ${bgColor} ${opacity}`}
    ></div>
  );
}

export default Circle;
