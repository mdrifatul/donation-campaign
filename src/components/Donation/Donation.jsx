
import { useEffect, useState } from "react";
import DonationList from './DonationList';
DonationList

const Donation = () => {
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);

  
  useEffect(()=>{
    const DetailsItem = JSON.parse(localStorage.getItem('Details'));
    if(DetailsItem){
      setDetails(DetailsItem)
    }
  },[])
  
  return (
    <>
    <div className="grid md:grid-cols-2 gap-6 mx-auto w-10/12 my-10 ">
      {
        show ? 
        details.map(card => <DonationList key="card.id" card={card}></DonationList>)
        :
        details.slice(0,4).map(card => <DonationList key="card.id" card={card}></DonationList>)
      }
      
    </div>
    {
        details.length > 4 && (
        <div className={`${ show  === details.length && 'hidden'} text-center mb-10`}>
        <button onClick={() => setShow(details.length)} className="btn bg-[#FF444A] text-white">See More</button>
        </div>
      )}
  </>
  );
};

export default Donation;





