import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  title: {
    fontWeight: "bold",
    size: 12,
  },
});

export default function Cards({ title, calories, image, ingredients }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia image={image} height="140" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <img src={image} alt="" />
            </Typography>
            <h3 color="blue">{title}</h3 >
            <h4>Calories: {Math.floor(calories)}</h4>
            <Typography variant="body2" color="textSecondary" component="p">
              <ol>
                {/* {ingredients.map((ingredient) => (
                  <li>{ingredient.text}</li>
                ))} */}
              </ol>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Recieps
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
