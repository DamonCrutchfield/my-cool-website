import * as React from 'react';
// import * as Moment from 'moment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useState, useEffect } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Stack from '@mui/material/Stack';
import './ContactForm.css';


// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   console.log(windowDimensions);
//   return windowDimensions;
// }

const ContactForm = () => {
    const [value, setValue] = React.useState(new Date());
    //const { height, width } = useWindowDimensions();
    
  return (
    <Box
      id='contact-form'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      style={{ display: 'flex', justifyContent: 'center'}}
      noValidate
      autoComplete="off"
    >
        <Stack>
            <Stack direction='row' justifyContent='center' id='name'>
                <TextField required id="first-name" label="First Name"/>
                <TextField required id="last-name" label="Last Name"/>
            </Stack>
            <Stack direction='row' >
                <LocalizationProvider dateAdapter={AdapterMoment} >
                    <Stack spacing={3} direction='row' id='date-and-time'>
                        <DatePicker
                            required
                            label="Date"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            desktopModeMediaQuery='@media (min-width: 1280px)'
                        />
                        <TimePicker
                            required
                            label="Time"
                            value={value}
                            onChange={setValue}
                            renderInput={(params) => <TextField {...params} />}
                            desktopModeMediaQuery='@media (min-width: 1280px)'
                        />
                    </Stack>
                </LocalizationProvider>
            </Stack>
            <Stack>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Age
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Stack>
        </Stack>
    </Box>  
  );
}

export default ContactForm;


