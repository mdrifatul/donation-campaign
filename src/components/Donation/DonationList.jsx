import { Link } from "react-router-dom";

const DonationList = ({card}) => {
  const {id,image, title,category,bg_color,text_color,Category_color,price } = card
  return (
    <>
    <div className="mx-auto w-full">
      <div className="card bg-base-100 shadow-xl flex flex-row"  style={{backgroundColor:bg_color}}>
        <figure ><img className="h-56 w-56 rounded-xl" src={image} alt="Shoes" /></figure>
        <div className="card-body px-5">
          <h2 className="text-base px-2 w-fit rounded-md" style={{backgroundColor:bg_color, color:Category_color}}>{category}</h2>
          <h2 className="card-title text-lg" style={{color:text_color}}>{title}</h2>
          <p style={{color:text_color}}>${price}</p>
          <div className="card-actions">
            <Link to={`/details/${id}`}>
              <button className=" text-white py-1  px-2 rounded-md" style={{backgroundColor:text_color}}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DonationList;