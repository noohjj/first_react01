const Contents = ({ text, bgColor }) => {
  // const { text, bgColor } = Props;
  // => 비구조화 할당
  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};

export default Contents;
