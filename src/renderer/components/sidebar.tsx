import { menus } from './MENU';
import { Box, Grid, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import icon from '../../../assets/icon.png'
import { ActivityLogIcon } from '@radix-ui/react-icons'

export default function Sidebar() {
  const drawerWidth = 200;
  const navigate = useNavigate();

  return (
    <Box sx={{  minWidth: drawerWidth, bgcolor:'#bfdbfe', height:screen}}>
      <Box textAlign={'center'} mt={2}>
        <img src={icon} alt='logo' width={'90px'} style={{display: 'block', margin: '0 auto', textAlign: 'center' }}/>
      </Box>
      <Box sx={{ overflow: 'auto',gap:2}}>
        {
          menus.map((menu) => {
            const Icon = menu.icon
            return(
              <Box key={menu.name} onClick={()=>{navigate(menu.href)}}
              sx={{display:'flex',alignItems:'center', cursor:'pointer', ml:'30px', justifyContent:'left',height:'50px',color:'white',gap:2}}>
                <Icon />
                <div >{menu.name}</div>
              </Box>
            )
          })
        }
      </Box>
      <Box sx={{position:'fixed', bottom:'0', ml:'30px', mb:'10px', justifyContent:'left',color:'white',gap:2}}>
        <Grid sx={{display:'flex',gap:2, height:'30px',alignItems:'center'}}>
          <ActivityLogIcon />
          <div>Logs</div>
        </Grid>
        <Grid sx={{display:'flex',gap:2, height:'30px', alignItems:'center',mt:2}}>
          <ActivityLogIcon />
          <div>FAQ</div>
        </Grid>
      </Box>
    </Box>
    // <Box sx={{ display: 'flex' }}>
    //   <Drawer
    //     variant="permanent"
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    //     }}
    //   >
    //     <Toolbar />
    //     <Box sx={{ overflow: 'auto' }}>
    //       <List>
    //         {menus.map((menu) => (
    //           <ListItem key={menu.name} disablePadding>
    //             <ListItemButton onClick={()=>{navigate(menu.href)}}>
    //               <ListItemText primary={menu.name} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //       </Box>
    //     </Drawer>
    //   </Box>
  );
}
