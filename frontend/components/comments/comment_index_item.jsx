import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating';
// import 'font-awesome/css/font-awesome.min.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'


const CommentIndexItem = ({ comment })=> {

    return (
        <div>
            <h2>{comment.user}</h2>
            <Rating
                emptySymbol={<FontAwesomeIcon icon={regularStar} />}
                fullSymbol={<FontAwesomeIcon icon={solidStar} />}
                initialRating={comment.rating}
                readonly={true}
            />
            <div>{comment.body}</div>
        </div>
    )
}

export default withRouter(CommentIndexItem); 