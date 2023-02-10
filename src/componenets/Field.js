import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
const Field = ({name,email,index}) => {
    
  return (
    <div className='data_val'>
       <h4>{name}</h4>
       <h4>{email}</h4>
       
       <Stack direction="row" spacing={2}>
       <Button  variant="contained" color="error">
        delete
      </Button>
     
      
    </Stack>

       </div>
  )
}

export default Field
