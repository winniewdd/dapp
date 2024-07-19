import { Box, Button, IconButton } from '@mui/material'
import { StopIcon, PlayIcon, ReloadIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

interface AppOperateItemProps {
  appId: any
}

export const AppOperatorItem: React.FC<AppOperateItemProps> = ({appId})=>{
  const actions = [
    {type: 'start', icon: PlayIcon, action: ()=>{}, disabled: false},
    {type: 'restart', icon: ReloadIcon, action: ()=>{}, disabled: false},
    {type: 'stop', icon: StopIcon, action: ()=>{}, disabled: false},
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
