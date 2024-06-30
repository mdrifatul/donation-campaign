import { useEffect, useState } from "react";
import Feature from './Feature';

const Features = ({filterValue}) => {
  const [cards, setCards] = useState([]);

    useEffect(() =>{
      fetch('donation.json')
      .then(res => res.json())
      .then(data => setCards(data))
    },[])

  return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {
          filterValue == ''? 
          cards.map(card => <Feature key={card.id} card={card}></Feature>)
          :
          filterValue.map(card => <Feature key={card.id} card={card}></Feature>)
        }
      </div>
  );
};

export default Features;