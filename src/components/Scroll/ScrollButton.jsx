import Fab from "@mui/material/Fab";
import { UpOutlined } from "@ant-design/icons";

const ScrollButton = () => {
  return (
    <Fab size="small" aria-label="scroll back to top" >
      <UpOutlined />
    </Fab>
  );
};

export default ScrollButton;
