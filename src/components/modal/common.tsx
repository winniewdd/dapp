import {Box, Dialog, DialogProps, Stack, Typography, Button, CircularProgress} from '@mui/material'
import React, {ReactNode, useState} from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import tipIcon from '../../../assets/icons/icon_tip.png'

interface WarningModalProps extends DialogProps {
  title: string
  message: string
  onConfirm?: any
}

interface AlertModalProps extends DialogProps {
  title: string
  message: ReactNode
  onConfirm: any
  onCancel?: any
}

interface EnsureModalProps extends DialogProps {
  title: string
  message: ReactNode
  checkMessage: ReactNode
  onConfirm: any
  onCancel?: any
  onCheck?: any
}

interface NoneDepositDataModalProps extends DialogProps {
  onConfirm: any
}

const ModalTitle = ({title, icon}: {title: string; icon: string}) => {
  return (
    <Stack alignItems={'center'} mb={4} justifyContent={'center'} spacing={2}>
      <img src={tipIcon} width={30} height={30} alt={'title'} />
      <Typography fontSize={24}>{title}</Typography>
    </Stack>
  )
}

const WarningModal = ({title, message, ...props}: WarningModalProps): JSX.Element => {

  return (
    <Dialog keepMounted {...props} transitionDuration={300}>
      <Box sx={{p: 6}}>
        <ModalTitle title={title} icon='tooltip-icon' />
        <Typography fontSize={14} fontWeight={'medium'} textAlign={'center'} my={4}>
          {message}
        </Typography>
        <Stack direction={'row'} justifyContent={'center'} spacing={4}>
          <button
            className={'btn-primary'}
            onClick={() => {
              // @ts-ignore
              props.onClose()
            }}
          >
            {'confirm'}
          </button>
        </Stack>
      </Box>
    </Dialog>
  )
}

const SuccessModal = ({title, message, ...props}: WarningModalProps): JSX.Element => {

  return (
    <Dialog keepMounted {...props} transitionDuration={300}>
      <Box sx={{p: 6}}>
        <ModalTitle title={title} icon='modal-title-icon-success' />
        <Typography fontSize={14} fontWeight={'medium'} textAlign={'center'} my={4}>
          {message}
        </Typography>
        <Stack direction={'row'} justifyContent={'center'} spacing={4}>
          <button
            className={'btn-primary'}
            onClick={() => {
              if (props.onConfirm) {
                props.onConfirm()
              } else {
                // @ts-ignore
                props.onClose()
              }
            }}
          >
            {'confirm'}
          </button>
        </Stack>
      </Box>
    </Dialog>
  )
}

const FailureTipModal = ({title, message, ...props}: WarningModalProps): JSX.Element => {

  return (
    <Dialog keepMounted {...props} transitionDuration={300}>
      <Box sx={{p: 6}}>
        <ModalTitle title={title} icon='FailedIcon' />
        <Typography fontSize={14} fontWeight={'medium'} textAlign={'center'} my={4}>
          {message}
        </Typography>
        <Stack direction={'row'} justifyContent={'center'} spacing={4}>
          <button
            className={'btn-primary'}
            onClick={() => {
              // @ts-ignore
              props.onClose()
            }}
          >
            {'confirm'}
          </button>
        </Stack>
      </Box>
    </Dialog>
  )
}
const AlertModal = ({title, message, onConfirm, ...props}: AlertModalProps): JSX.Element => {

  return (
    <Dialog keepMounted {...props} transitionDuration={300}>
      <Box sx={{p: 6}}>
        <ModalTitle title={title} icon='tooltip-icon' />
        <Typography fontSize={14} fontWeight={'medium'} textAlign={'center'} my={4}>
          {message}
        </Typography>
        <Stack direction={'row'} justifyContent={'center'} spacing={4}>
          <button
            className={'btn-secondary'}
            onClick={() => {
              if (props.onCancel) {
                props.onCancel()
              } else {
                // @ts-ignore
                props.onClose()
              }
            }}
          >
            {'cancel'}
          </button>
          <button
            className={'btn-primary'}
            onClick={() => {
              onConfirm()
            }}
          >
            {'confirm'}
          </button>
        </Stack>
      </Box>
    </Dialog>
  )
}

const EnsureModal = ({title, message, checkMessage, onConfirm, ...props}: EnsureModalProps): JSX.Element => {
  const [checked, setChecked] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Dialog keepMounted {...props} transitionDuration={300}>
      <Box sx={{p: 6}}>
        <ModalTitle title={title} icon='tooltip-icon' />
        <Typography fontSize={14} fontWeight={'medium'} textAlign={'center'} my={4}>
          {message}
        </Typography>
        <Stack m={2}>
          <FormGroup>
            <FormControlLabel
              sx={{fontSize: '14', justifyContent: 'center', alignItems: 'center !important'}}
              control={<Checkbox defaultChecked checked={checked} onChange={handleChange} />}
              label={
                <div className='flex items-center justify-center'>
                  {/* <button className={clsx('p-1 hover:bg-slate-100 text-xs font-normal flex flex-col items-center justify-center')}
                                onClick={() => {
                                    props.onCheck()
                                }}
                            >
                                <TbDeviceDesktopAnalytics color='blue' className='w-5 h-5'/>
                            </button> */}
                  {checkMessage}
                </div>
              }
            />
          </FormGroup>
        </Stack>
        <Stack direction={'row'} justifyContent={'center'} spacing={4}>
          <button
            className={'btn-secondary'}
            onClick={() => {
              if (props.onCancel) {
                props.onCancel()
              } else {
                // @ts-ignore
                props.onClose()
              }
            }}
          >
            {'cancel'}
          </button>
          <button
            className={'btn-primary'}
            disabled={!checked}
            onClick={() => {
              onConfirm()
            }}
          >
            {'confirm'}
          </button>
        </Stack>
      </Box>
    </Dialog>
  )
}

const ProgressModal = ({title, message, onConfirm, ...props}: AlertModalProps): JSX.Element => {

  return (
    <Dialog keepMounted {...props} transitionDuration={300}>
      <Box sx={{p: 6}}>
        {title ? <ModalTitle title={title} icon='tooltip-icon' /> : <div className='h-20'></div>}

        <Stack direction={'row'} justifyContent={'center'} spacing={4}>
          <CircularProgress />
        </Stack>
        {message ? (
          <Typography fontSize={14} fontWeight={'medium'} textAlign={'center'} my={4}>
            {message}
          </Typography>
        ) : (
          <div className='h-20'></div>
        )}

        {/* <Stack direction={'row'} justifyContent={'center'} spacing={4}>
                    <Button
                        className={'btn-cancel'}
                        onClick={() => {
                            // @ts-ignore
                            props.onClose()
                        }}
                    >
                        {t('cancel')}
                    </Button>

                </Stack> */}
      </Box>
    </Dialog>
  )
}

export {WarningModal, AlertModal, ProgressModal, SuccessModal, FailureTipModal}
