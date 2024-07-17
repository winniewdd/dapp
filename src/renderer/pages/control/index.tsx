import { Box, Button, CssBaseline, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/layout';

export function Control() {
  const [dockerStatus,setDockerStatus] = useState(false)

  return (
    <Layout>
      {/* <CssBaseline /> */}
      <Box sx={{ pl:'30px', bgcolor:'white',height:'100%'}}>
        <Typography sx={{pt:'30px', pb:'30px', fontWeight:'600',fontSize:18}}>
          Console
        </Typography>
        <Typography sx={{fontWeight:'600',fontSize:16}}>
          Docker Status: {dockerStatus?"Active":"Stop"}
        </Typography>
        {!dockerStatus
        ?
        <Button sx={{mt:2}} onClick={()=>{}}>
          Start
        </Button>
        :
        <Button sx={{mt:2}}>
          Stop
        </Button>
          }
      </Box>
    </Layout>
  );
}
