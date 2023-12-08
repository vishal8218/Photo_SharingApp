import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

const CheckboxesGroup=()=> {
  const [state, setState] = React.useState({
    India: false,
    America: false,
    Span: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });

  };
  const shiftRightSide=()=>
  {
    
  }

  const { India, America, Span } = state;
  const error = [India, America, Span].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
       {/* <FormLabel component="legend">Countries</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={India} onChange={handleChange} name="India" />
            }
            label="India"
          />
          <FormControlLabel
            control={
              <Checkbox checked={America} onChange={handleChange} name="America" />
            }
            label="America"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Span} onChange={handleChange} name="Span" />
            }
            label="Span"
          />
        </FormGroup>
        
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={India} onChange={handleChange} name="India" />
            }
            label="India"
          />
          <FormControlLabel
            control={
              <Checkbox checked={America} onChange={handleChange} name="America" />
            }
            label="America"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Span} onChange={handleChange} name="Span" />
            }
            label="Span"
          />
        </FormGroup>
        
      </FormControl>
    </Box>
  );
  
}
export default CheckboxesGroup;

