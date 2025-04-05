import LOGO3 from "../Constants/LOGO3.png"; 
import { Link } from "react-router-dom";
const Category = () => {
    return (
      <div className="bg-purple-400 min-h-screen p-4 text-white">

        <div className="w-32 h-32">
          <img src={LOGO3} alt="LOGO" className="h-full object-contain" />
        </div>
        <nav className="space-y-4 text-lg font-semibold text-gray-300">
        <Link to="/Foryou" className="hover:text-white block">For You</Link>
        <Link to="/Toptracks" className="hover:text-white block">Top Tracks</Link>
        <Link to="/Fav" className="hover:text-white block">Favourites</Link>
        <Link to="/Recentlyplayed" className="hover:text-white block">Recently Played</Link>
      </nav>
      </div>
    );
  };
  
export default Category;