import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Menu } from './Menu';
import { BrowserRouter, Routes,Route   } from 'react-router-dom';
import { Home } from './Component/Home-Page/home';
import { Register } from './Component/Register and Login/Register';
import { Login } from './Component/Register and Login/login';
import { UserSearch } from './Component/User/UserSearch';
import { StationDetails } from './Component/StationOwner/stationDetails';
import { OwnerHomePage } from './Component/StationOwner/OwnerHomePage';
import { ViewStation } from './Component/Admin/ViewStation';
import { AdminHomePage } from './Component/Admin/AdminHomePage';
import { AdminViewDetails } from './Component/Admin/AdminViewdetails';
import { ViewFeed } from './Component/Admin/ViewFeed';
import { ViewParticularStation } from './Component/StationOwner/ViewParticularOwmer';
import { Locationpage } from './Component/User/LocationPage';
import { UploadReview } from './Component/User/UploadReview';
import { Update } from './Component/StationOwner/Update';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<Menu/>,<Home/>]} ></Route>
    <Route path='/userANDowner' element={[<Menu/>,<Register/>]} ></Route>
    <Route path='/login' element={[<Menu/>,<Login/>]} ></Route>
    <Route path='/usersearch' element={[<UserSearch/>]} ></Route>
    <Route path='/uploadsd' element={[<StationDetails/>]} ></Route>
    <Route path='/ownerhomepage' element={[<OwnerHomePage/>]} ></Route>
    <Route path='/viewstation' element={[<ViewStation/>]} ></Route>
    <Route path='/adminhomepage' element={[<AdminHomePage/>]} ></Route>
    <Route path='/AdminViewDetails' element={[<AdminViewDetails/>]} ></Route>
    <Route path='/Viewfeed' element={[<ViewFeed/>]} ></Route>
    <Route path='/locationpage/:sNo' element={[<Locationpage/>]} ></Route>
    <Route path='/UploadReview' element={[<UploadReview/>]} ></Route>
    <Route path='/Update/:sNo' element={[<Update/>]} ></Route>
    <Route path='/ViewParticularStation' element={[<ViewParticularStation/>]} ></Route>








    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
}

export default App;
