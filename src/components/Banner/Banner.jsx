import { useEffect, useState } from "react";
import Features from "../Features/Features";
// import Feature from "../Features/Feature";

const Banner = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [filterValue, setFilterValue] = useState([]);

  useEffect(() => {
    fetch('donation.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = () => {
    const searchValue = search.toLowerCase();

    const filterCards = cards.filter(card => card.category.toLowerCase().includes(searchValue));
    setFilterValue(filterCards);
  }

  return (
    <>
      <div  className="bg-cover bg-top bg-[url('https://i.ibb.co/cb6DzZr/istockphoto-1321029825-612x612.jpg')]">
      <div className="text-center bg-white bg-opacity-90 h-80 flex flex-col justify-center items-centers">
        <h2 className="text-3xl font-semibold mb-5 text-black">I Grow By Helping People In Need</h2>
        <div className="join my-5 flex justify-center">
          <input value={search} onChange={handleSearchInput} className="input input-bordered join-item" placeholder="Search" />
          <button onClick={handleClick} className="btn join-item bg-[#FF444A] text-white">Search</button>
        </div>
      </div>
      </div>
      {/* <Features filterValue={filterValue} ></Features> */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {filterValue.map(card => <Feature key={card.id} card={card}></Feature>)}
      </div> */}
      <div className="w-11/12 mx-auto">
      <Features filterValue={filterValue}></Features>
     </div>
    </>
  );
};

export default Banner;
