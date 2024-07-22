import { Box, Button, CssBaseline, Grid, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Layout } from '../../../components/layout';
import {CheckCircledIcon, CrossCircledIcon,UpdateIcon} from '@radix-ui/react-icons'

export function Control() {
  const [dockerStatus,setDockerStatus] = useState(false)
  const [appStatus, setAppStatus] = useState(false);

  //docker 服务启动检查
  const fetchDockerStatus = async () =>{
    try {
      const result = await window.electron.dockerService();
      setDockerStatus(result);
      // console.log('status',result)
    } catch (error) {
      setDockerStatus(false);
      console.error('Error Get Docker Service:', error);
    }
  }
  //app容器启动检查
  const getContainerInfo = async (id:any) =>{
    try {
      const result = await window.electron.checkContainerStatus(id);
      // console.log('log',result)
      setAppStatus(result?.State?.Running)
    } catch (error) {
      setAppStatus(false)
      console.error('Error Get Docker container:', error);
    }
  }
  //6s循环检查
  useEffect(()=>{
    fetchDockerStatus()
    getContainerInfo('welcome-docker')
    const intervalId = setInterval(fetchDockerStatus, 6000);
    return () => {
      clearInterval(intervalId);
    };
  },[])

  //创建App服务
  const handleCreateContainer = async (image: any, cantainerName:any) => {
    const container = await window.electron.listContainers();
    const containerExists = container.some((container: { Names: any; }) =>container?.Names.includes(`/${cantainerName}`));
    // console.log('contaner--',container,containerExists)
    if(!containerExists){
      await window.electron.createContainer(image,cantainerName);
      getContainerInfo(cantainerName)
    }else{
      await handleStart(cantainerName);
    }
  };

  //启动App服务
  const handleStart = async (id: any) => {
    await window.electron.startContainer(id);
    getContainerInfo(id)
  };

  //停止App服务
  const handleStop = async (id: any) => {
    await window.electron.stopContainer(id);
    getContainerInfo(id)
  };
  return (
    <Layout>
      {/* <CssBaseline /> */}
      <Box sx={{ pl:'30px', bgcolor:'white',height:'100%'}}>
        <Typography sx={{pt:'30px', pb:'30px', fontWeight:'600',fontSize:20}}>
          Console
        </Typography>
        <Typography sx={{fontWeight:'600',fontSize:16,}}>
          <Grid sx={{display:'flex',alignItems:'center',gap:1}}>
            Docker Status:
            <IconButton size='small' sx={{bgcolor:'black',color:'white',":hover":{bgcolor:'#bfdbfe'}}} onClick={()=>{fetchDockerStatus()}}><UpdateIcon className='w-3 h-3 mb-1'/></IconButton>
          </Grid>
          {dockerStatus?
          <Typography sx={{mt:2, fontWeight:'600',fontSize:16,color:'green',display:'flex',alignItems:'center'}}>
            <CheckCircledIcon/>&nbsp;Docker Deamon is running
          </Typography>
          :
          <Typography sx={{mt:2, fontWeight:'600',fontSize:16,color:'red',display:'flex',alignItems:'center'}}>
            <CrossCircledIcon/>&nbsp;Docker Desktop has not been detected as running
          </Typography>
          }
          </Typography>
        <Grid sx={{fontWeight:'600',fontSize:16,display:'flex',alignItems:'center',mt:3}}>
          App Status:
        </Grid>
        {!appStatus
        ?
        <Button size='large' sx={{mt:4, width:'', bgcolor:'#bfdbfe'}} disabled={!dockerStatus} onClick={()=>{ handleCreateContainer('docker/welcome-to-docker','welcome-docker')}}>
          Start
        </Button>
        :
        <Button size='large' sx={{mt:4, width:'',  border:'2px solid #60a5fa', bgcolor:'#bfdbfe'}} disabled={!dockerStatus} onClick={()=>{handleStop('welcome-docker')}}>
          Stop
        </Button>
          }
          <div>
    </div>
      </Box>
    </Layout>
  );
}
