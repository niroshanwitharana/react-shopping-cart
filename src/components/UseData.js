import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ProductContext } from "../productContext/ProductContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UseData({ data }) {
  const classes = useStyles();
  const {
    cart,
    setCart
  } = useContext(ProductContext);
  const [pending, setPending] = useState(false);

  const addToCart = (itemID, itemName, itemPrice, counterVal) => {
    setCart((prevCount) => prevCount + 1);
    setPending(true);

    const itemInfo = { itemID, itemName, itemPrice, counterVal };
    console.log(itemID);
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemInfo),
    }).then(() => {
      console.log("aded to cart");
      setPending(false);
    });    
  };
  useEffect(() => {
      fetch('http://localhost:5000/cart')
      .then(res => res.json())
      .then(data => {
        setCart(data.length);
      })
  }, [])
  console.log(cart);
  return (
    <div className="shoppingItems">
      <h1>25% Discount Till 31st May </h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="item" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.name}
              subheader={"£" + item.price}
            />
            <CardMedia
              className={classes.media}
              image={item.name + ".jpg"}
              title={item.name}
            />
            <CardContent>
              <div className="addToCart">
                <button
                  onClick={() => addToCart(item.id, item.name, item.price, item.counterVal)}
                >
                  Add To Cart
                </button>
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                className="favouriteIcon"
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share" className="shareIcon">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}
