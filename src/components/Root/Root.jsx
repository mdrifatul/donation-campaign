import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';

const Root = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
      <Header></Header>
      </div>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Root;