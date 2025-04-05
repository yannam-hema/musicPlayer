import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./Components/Category";
import Foryou from "./Components/Foryou";
import Toptracks from "./Components/Toptracks"
import Favourites from "./Components/Favourites";
import Recentlyplayed from "./Components/Recentlyplayed";
function App() {
  const appRouter=createBrowserRouter(
    [
    {
    path:'/',
    element:<Category/>
    },
    {
      path:'/Foryou',
      element:<Foryou/>
    },
    {
     path:'/Toptracks',
     element:<Toptracks/>
    },
    {
    path:'/Fav',
    element:<Favourites/>
    },
    {
      path:'/Recentlyplayed',
      element:<Recentlyplayed/>
    }
    ]
  )
  return (
    <div className="min-h-screen bg-purple-300" >
  <RouterProvider router={appRouter}/>
    </div>
  
 
  
  );
}

export default App;
