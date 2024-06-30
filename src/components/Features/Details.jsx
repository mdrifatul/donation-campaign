import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from './Detail';

const Details = () => {
  const [card, setCard] = useState({});

  const cards = useLoaderData();
  const {id} = useParams();
  useEffect(() =>{
    
    const findCards = cards.find((card) => card.id === id);
    setCard(findCards);
    
  },[id,cards])


  return (
    <div>
       <Detail card={card}></Detail>
    </div>
  );
};

export default Details;