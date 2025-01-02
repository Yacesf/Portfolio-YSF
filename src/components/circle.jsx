function Circle({ size, border, opacity, bgColor, top, left }) {
  return (
    <div
      className={`absolute rounded-full ${top} ${left} ${size} ${border} ${bgColor} ${opacity}`}
    ></div>
  );
}

export default Circle;
