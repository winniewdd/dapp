import { Box, Button, IconButton } from '@mui/material'
import { StopIcon, PlayIcon, ReloadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import {useModal} from 'mui-modal-provider'
import { AlertModal } from '../modal/common'

interface AppOperateItemProps {
  appInfo: any
}

export const AppOperatorItem: React.FC<AppOperateItemProps> = ({appInfo})=>{
  const {showModal} = useModal()
  const showStartModal = (projectName:any, filePath: any) =>{
    // console.log('start')
    const {hide} = showModal(AlertModal, {
      title: `Start ${projectName}`,
      message: `Start ${projectName}`,
      onConfirm: async () => {
        hide()
        await startCompose(projectName,filePath)
      },
    })
  }
  const showStopModal = (projectName:any, filePath: any) =>{
    // console.log('stop')
    const {hide} = showModal(AlertModal, {
      title: `Stop ${projectName}`,
      message: `Stop ${projectName}`,
      onConfirm: async () => {
        hide()
        await stopCompose(projectName,filePath)
      },
    })
  }
  const startCompose = async (projectName:any, filePath: any)=>{
    try{
      const result = await window.electron.startCompose(projectName,filePath)
      // console.log('result',projectName,filePath,result)
    }
    catch(error:any){
      console.log('error',projectName,filePath)
      console.error('Error start compose:', error);
    }
  }

  const stopCompose = async (projectName:any, filePath: any)=>{
    try{
      const result = await window.electron.stopCompose(projectName,filePath)
      // console.log('result',projectName,filePath,result)
    }
    catch(error:any){
      console.log('error',projectName,filePath)
      console.error('Error stop compose:', error);
    }
  }

  const actions = [
    {type: 'start', icon: PlayIcon, action: ()=>{startCompose(appInfo?.name,appInfo?.path)}, disabled: false},
    {type: 'restart', icon: ReloadIcon, action: ()=>{}, disabled: false},
    {type: 'stop', icon: StopIcon, action: ()=>{stopCompose(appInfo?.name,appInfo?.path)}, disabled: false},
  ]
  return(
    <Box sx={{display:'flex',alignItems:'center', gap:1, md:{gap:3}, justifyContent:'center'}}>
        {actions.map(({type, action, icon, disabled}) => {
          const Icon = icon
          return (
            <IconButton sx={{maxWidth:'50px',fontSize:5,display:'flex',alignItems:'center',justifyItems:'center'}}
              key={type}
              onClick={() => action()}
              disabled={disabled}
              style={{opacity: disabled ? 0.3 : 1}}
            >
              <Icon className='w-3 h-3 mb-1' style={{color: type === 'reset' ? 'red' : ''}} />
            </IconButton>
          )
        })}
    </Box>
  )
}
