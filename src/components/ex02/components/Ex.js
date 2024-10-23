const Ex = ({ text, bgColor }) => {
  return (
    <>
      <div className="box" style={{ backgroundColor: bgColor }}>
        {text}
      </div>
    </>
  );
};

export default Ex;
