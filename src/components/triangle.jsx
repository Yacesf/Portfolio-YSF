function Triangle({ zIndex, border, opacity, borderLeft, borderRight, borderBottom, bgColor, top, left }) {
  return (
    <div
      style={{
        top,
        left,
      }}
      className={`absolute w-0 h-0 ${zIndex} ${opacity} ${border} ${borderLeft} ${borderRight} ${borderBottom} ${bgColor}`}
    ></div>
  );
}

export default Triangle;
