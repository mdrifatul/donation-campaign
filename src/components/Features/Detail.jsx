import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Detail = ({card}) => {

  // console.log(card);
  const {id,image, title,text_color,description,price} = card

  const handleAddDonation = () =>{
    // saveDonationDetails(id)
    toast("You have successfully donated");

    const addDetailsArray = [];
    
    const DetailsItem = JSON.parse(localStorage.getItem('Details'));

    if(!DetailsItem){
      addDetailsArray.push(card)
      localStorage.setItem('Details', JSON.stringify(addDetailsArray))
    }
    else{
      const isExists = DetailsItem.find(card => card.id === id)
      if(!isExists){
        addDetailsArray.push(...DetailsItem, card)
        localStorage.setItem('Details', JSON.stringify(addDetailsArray))
      }
    }
    

  } 


  return (
    <div className="w-8/12 mx-auto my-10 ">
      <div className="relative">
      <img className="w-full h-80 rounded-lg" src={image} alt="" />
      <div className="bg-black opacity-50 w-full h-28 absolute bottom-0">
      </div>
        <button onClick={handleAddDonation} className="btn absolute bottom-8 left-10 opacity-100 text-white" style={{backgroundColor:text_color}}>Donation ${price}</button>
      </div>
      <div className="">
        <h1 className="text-4xl mt-8 mb-4 text-black">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

Detail.propTypes = {
  card: PropTypes.object
}

export default Detail;