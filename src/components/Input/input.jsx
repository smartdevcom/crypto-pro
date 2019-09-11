import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { InputBase, FormControl, InputLabel } from '@material-ui/core';

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
      '&:invalid': {
         background: '#F9FAFB',
         border: '1px solid #D7D8DE'
      },
      '&:focus': {
         background: '#FFFFFF',
         border: '1px solid #6979F8'
      },
      '&:not(:focus):valid': {
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

export const PrimaryInput = props => {
   const classes = useStyles();
   return (
      <FormControl className={classes.margin}>
         <InputLabel shrink htmlFor={props.id}>
            {props.label}
         </InputLabel>
         <BootstrapInput defaultValue='' id={props.id} placeholder={props.placeholder} required {...props} />
      </FormControl>
   );
};
