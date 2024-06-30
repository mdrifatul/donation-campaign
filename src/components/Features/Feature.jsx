
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Feature = ({card}) => {
  const {id, image, title,category,bg_color,text_color,Category_color } = card
  return (
    <div >
      <Link to={`/details/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl lg:h-60" style={{backgroundColor:bg_color}}>
        <figure><img className="w-full h-44" src={image} alt="Shoes" /></figure>
        <div className="card-body" >
          <h2 className="text-base px-2 w-fit rounded-md" style={{backgroundColor:bg_color, color:Category_color}}>{category}</h2>
          <h2 className="card-title text-lg" style={{color:text_color}}>{title}</h2>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

Feature.propTypes = {
  card: PropTypes.object
}

export default Feature;