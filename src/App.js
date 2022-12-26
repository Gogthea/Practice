import logo from './logo.svg';
import './App.css';
import {Menu, message} from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { DashboardOutlined, PoweroffOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons/lib/icons';
import ActiveUser from './Components/ActiveUser';
import Dashboard from './Components/Dashboard';
import DisabledUser from './Components/DisabledUser';
import Home from './Components/Home';
import Profile from './Components/Profile';
import SignOut from './Components/SignOut';

function App() {
  
  return (
   <>
   <div style={{display:'flex', flexDirection:'column', flex:1, height:'100vh'}} >
      <Header/>
    <div style={{display:'flex', flexDirection:'row', flex:1}}>
    <SideMenu/>
    <Content/>
    </div>
      <Footer/>
    </div>
   </>
    
    
  );

  function Header(){
    return (
      <div style={{
        height:50,
        backgroundColor:'lightskyblue',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

       }}>
        Header

      </div>
    )
  }

  function Footer(){
    return <div style={{
      height:50,
      backgroundColor:'lightskyblue',
      color:'white',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'

     }}>Footer</div>
  }

  function SideMenu(){
    const navigae = useNavigate()
    return(
      <Menu
    onClick={({key})=>{
      if(key=== "signout"){
        message.success('Sign out successfully')
        //TODO signout feature here
      }else{
        navigae(key);

      }

    }}
    defaultSelectedKeys={[
      window.location.pathname
    ]}

    items={[
      {
        label:'Home',
        key:'/',
        icon:<HomeOutlined/>
      },

      {
        label:'Dashboard',
        key:'/dashboard',
        icon:<DashboardOutlined/>
      },
      {
        label:'Users List',
        key:'/userlist',
        icon:<UnorderedListOutlined/>,
        children:[
          {
            label:'Active Users',
            key:'activeuser'
          },
          {
            label:'Disabled Users',
            key:'disableuser'
          }
        ]
      },
      {
        label:'Profile',
        key:'/profile',
        icon:<UserOutlined/>
      },
      {
        label:'Sign Out',
        key:'signout',
        icon:<PoweroffOutlined/>,
        danger:true
      },
    ]}>
    </Menu>

    );
    

  }
  function Content(){
    return <div>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/dashboard' element={ <Dashboard/>}></Route>
        <Route path='/activeuser' element={ <ActiveUser/>}></Route>
        <Route path='/disableuser' element={ <DisabledUser/>}></Route>
        <Route path='/profile' element={ <Profile/>}></Route>
        <Route path='signout' element={ <Home/>}></Route>

      </Routes>
    </div>
  }
}

export default App;
