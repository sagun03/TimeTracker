import React, {useState} from 'react';
import { AppBar, Toolbar } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TimerIcon from '@mui/icons-material/Timer';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../reducers/navigation/navigationAction'
const menuItems = ['Author', 'Task', 'Demo']
const NavBar = () => {
  const componentToRender = useSelector((state) => state.navigation.componentToRender)
const dispatch = useDispatch();
  const [value, setValue] = useState(menuItems.findIndex(element => element === componentToRender));

const handleOnChange= (e, value) => {
setValue(value)
dispatch(navigate(e.target.name))
}
  return (
    <React.Fragment>
      <AppBar sx={{background: '#063970'}}>
        <Toolbar sx={{marginLeft: "5px"}}>
            <TimerIcon fontSize="large"/>
          <Tabs textColor="inherit" sx={{marginLeft: "10px"}} value={value} onChange={(e, value)=>handleOnChange(e,value)} indicatorColor="secondary">
             <Tab label="Author" name="Author" />
             <Tab label="Task" name="Task"/>
             <Tab label="Timer" name="Demo"/>
          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default NavBar
