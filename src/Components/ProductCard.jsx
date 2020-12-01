import * as React from "react";

import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Chip,
  TextField,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

import APIURL from "../utils/APIURL";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";

import { myAxios } from "../utils/axiosBase";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ProductCard({ item }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [fav, setFav] = React.useState(false);
  const [textComment, setTextComment] = React.useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const makeComment = async () => {
    try {
      await myAxios({
        method: "post",
        url: "/comment",
        data: { comment: textComment, offerId: item.id },
      });
      setTextComment("");
    } catch (error) {
      alert("Ocurrió un error al hacer el comentario");
    }
  };

  const addToFav = async () => {
    if (fav === false) {
      try {
        const { data } = await myAxios({
          method: "post",
          url: "/favorites",
          data: { offerId: item.id },
        });
        console.log(data);
        setFav(true);
      } catch (error) {
        alert("Ocurrió un error al hacer el comentario");
      }
    } else {
      try {
        const { data } = await myAxios({
          method: "delete",
          url: `/favorites/${item.id}`,
        });
        console.log(data);
        setFav(false);
      } catch (error) {
        alert("Ocurrió un error al hacer el comentario");
      }
    }
  };
  return (
    <Card style={{ width: "600px", marginTop: "20px" }}>
      <CardHeader
        title={item.name}
        avatar={<Avatar aria-label="recipe">{item.name.split("")[0]}</Avatar>}
        subheader={`${item.typeOffer}`}
        action={<Chip color="primary" label={item.status} variant="outlined" />}
      />
      <CardMedia
        style={{ paddingTop: "56.25%" }}
        image={`${APIURL}${item.images[0]}`}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {`${item.description} \n se hace ${item.typeTransaction} por ${item.unitMeasurement}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={addToFav} aria-label="add to favorites">
          <FavoriteIcon color={fav ? "primary" : "disabled"} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comentarios:</Typography>
          {item.comments.map((user, idx) => {
            return (
              <CardHeader
                key={idx}
                title={user.user.name}
                avatar={
                  <Avatar
                    aria-label="recipe"
                    src={`${APIURL}${user.user.img}`}
                  />
                }
                subheader={`${user.comment}`}
              />
            );
          })}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <TextField
              value={textComment}
              onChange={(e) => {
                setTextComment(e.target.value);
              }}
              fullWidth
              variant="outlined"
              label="comentar"
            />
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              color="primary"
              onClick={makeComment}
            >
              Comentar
            </Button>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
