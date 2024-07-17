import { Box, Button, CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Layout } from '../../components/layout';
import { Pencil2Icon } from '@radix-ui/react-icons'
import { AppOperatorItem } from '../../components/app/appOperateItem';

export function Manage() {
  const rows = [{'name':'grass','status':'active','des':'grass'},{'name':'io','status':'active','des':'io'}];

  return (
    <Layout>
      <CssBaseline />
      <Box sx={{ pl:'30px', bgcolor:'white',height:'100%'}}>
        <Typography sx={{pt:'30px', pb:'30px', fontWeight:'600',fontSize:18}}>
          Manage
        </Typography>
        <Typography sx={{fontWeight:'600',fontSize:16}}>
          Dapp
        </Typography>

        <TableContainer component={Paper} sx={{mt:'20px'}}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dapp</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="center">Operate</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.des}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="center">
                    <AppOperatorItem app={row.name}/>
                  </TableCell>
                  <TableCell align="left">
                    <Button size='small' sx={{bgcolor:'#bfdbfe', gap:1, display:'flex', alignItems:'center'}}>
                      Edit
                      <Pencil2Icon/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        </Box>
    </Layout>
  );
}
