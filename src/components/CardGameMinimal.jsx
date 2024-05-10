import { Card, CardMedia } from "@mui/material";
import WishCheck from "./WishCheck";
import { Link } from "react-router-dom";
import { getUri } from "../helper/common";

const CardGameMinimal = (props) => {
  return (
    <Link to={getUri(props.game.URI)} style={{ textDecoration: "none" }}>
      <Card elevation={8}>
        <WishCheck game={props.game}>
          <CardMedia
            component="img"
            image={props.game.FilePath}
            sx={{ padding: 0 }}
          />
        </WishCheck>
      </Card>
    </Link>
  );
};

export default CardGameMinimal;
