import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$color};
`;

const Event = () => {
  const [bgColor, setBgcolor] = useState("blue");
  const [on, setOn] = useState(true);

  const onClickBox = () => {
    if (on === true) {
      setBgcolor("blue");
      setOn(false);
    } else if (on === false) {
      setBgcolor("darkcyan");
      setOn(true);
    }
    console.log(on);
  };

  return (
    <div>
      <Box $color={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};

export default Event;
