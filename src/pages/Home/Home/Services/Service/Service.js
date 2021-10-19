import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Service.css'
import { Link } from 'react-router-dom';


/* Rating function */
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  
/* Card function */

const Service = (props) => {
    const {title, img, price, id, p, rating} = props.service
    return (
        <div id="services" className="col card-animation d-flex justify-content-center pb-5">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {p}
                </Typography>
            </CardContent>
            <CardActions>
                <Box className="fs-1">
                    <StyledRating
                        name="customized-color"
                        defaultValue={rating}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                </Box>
                <Button size="small">Share</Button>
                <Link to={`details/${id}`}><Button size="small">See More</Button></Link>
            </CardActions>
            </Card>
        </div>
    );
};

export default Service;