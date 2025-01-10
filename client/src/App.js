import './App.css';
import Navbar from './components/navbar/Navbar';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Profile from './pages/profile/Profile';
import EditProfile from './pages/editProfile/EditProfile';
import ChangePassword from './pages/changePassword/ChangePassword';
import DiaryEntry from './pages/diaryEntry/DiaryEntry';
import ViewDiaryEntry from './pages/viewDiaryEntry/ViewDiaryEntry';
import Body from './components/body/Body'

function App() {
  const route=createBrowserRouter([
    {
      path: "/",
      element:(
        <>
          <Navbar/>
          <Body/>
        </>
      ),
    },
    {
      path: "/:userId",
      element:(
        <>
          <Navbar/>
          <Body/>
        </>
      ),
    },
    {
      path:'/Signin',
      element:<Signin/>
    },
    {
      path:'/Signup',
      element:<Signup/>
    },
    {
      path:'/:userId/Profile',
      element:<Profile/>
    },
    {
      path:'/:userId/Profile/EditProfile',
      element:<EditProfile/>
    },
    {
      path:'/:userId/Profile/ChangePassword',
      element:<ChangePassword/>
    },
    {
      path:'/:userId/DiaryEntry',
      element:<DiaryEntry/>
    },
    {
      path:'/:userId/DiaryEntry/viewDiaryEntries',
      element:<ViewDiaryEntry/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
