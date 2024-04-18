import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Child=({imageAl,name,description})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageAl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
             {description}
          </Card.Text>          
        </Card.Body>
      </Card>
    )
}

Child.defaultProps = {
  imageAl : "https://media.gettyimages.com/id/2003725634/photo/paris-saint-germain-v-real-sociedad-knockout-round-play-offs-first-leg-uefa-champions-league.jpg?s=612x612&w=gi&k=20&c=ajJIQjMJXJVrZLQY1o664ftxNLBRP0Uvtg-78M9X2HI="
  ,name : "Jordan",
  description :"PSG"
}

Child.propTypes = {
     imageAl : PropTypes.string,
     name : PropTypes.string,
     description : PropTypes.string
}
export default Child