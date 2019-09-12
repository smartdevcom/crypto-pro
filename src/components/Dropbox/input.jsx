import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { InputBase, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const BootstrapInput2 = withStyles(theme => ({
   root: {
      'label + &': {
         marginTop: theme.spacing(3)
      }
   },
   input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      // transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
         borderRadius: 4,
         borderColor: '#80bdff',
         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
   }
}))(InputBase);

const BootstrapInput = withStyles(theme => ({
   root: {
      'label + &': {
         marginTop: theme.spacing(2.5)
      }
   },
   input: {
      padding: '10px 12px',
      borderRadius: 4,
      fontSize: 14,
      fontWeight: 500,
      width: '100%',
      background: '#F9FAFB',
      border: '1px solid #D7D8DE',

      '&:focus': {
         borderRadius: 4,
         background: '#FFFFFF',
         border: '1px solid #6979F8'
      },
      '&:not(:focus)': {
         background: '#FFFFFF',
         border: '1px solid #D7D8DE'
      },
      '&:disabled': {
         background: '#F1F1F5',
         color: '#5E5C84'
      }
   }
}))(InputBase);

const useStyles = makeStyles(theme => ({
   margin: {
      // margin: theme.spacing(1),
      width: '100%'
   }
}));

export const PrimaryDropbox = props => {
   const classes = useStyles();
   const [age, setAge] = React.useState('10');
   const handleChange = event => {
      setAge(event.target.value);
   };
   return (
      <FormControl className={classes.margin}>
         <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
         <Select value={age} onChange={handleChange} input={<BootstrapInput name='age' id={props.id} {...props} />}>
            <MenuItem value={10}>AVUAZtmQNNmKn</MenuItem>
            <MenuItem value={20}>AVUAZtmQNNmKn</MenuItem>
            <MenuItem value={30}>AVUAZtmQNNmKn</MenuItem>
         </Select>
      </FormControl>
   );
};
