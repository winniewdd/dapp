import { CssBaseline, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import bit from '../../../../assets/bit.jpg';
import { Layout } from '../../../components/layout';

export function Setting() {
  return (
    <Layout>
      <CssBaseline />
      <Typography sx={{pt:'30px', pb:'30px', fontWeight:'600',fontSize:18, pl:'30px', color:'white'}}>
          Setting
      </Typography>
      <div className="Hello">
        <img width="200" alt="icon" src={bit} />
      </div>
    </Layout>
  );
}
