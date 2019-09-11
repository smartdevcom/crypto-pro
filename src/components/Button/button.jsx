import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const primaryButtonStyles = makeStyles(theme => ({
   button: {
      background: '#6979F8',
      color: 'white',
      boxShadow: '0px 4px 6px rgba(53, 52, 69, 0.06)',
      borderRadius: 4,
      fontSize: 12,
      textTransform: 'capitalize',
      '&:hover': {
         background: '#5364EA',
         boxShadow: '0px 6px 8px rgba(53, 52, 69, 0.1)',
         borderRadius: 4
      },
      '&:active': {
         background: '#4153E0',
         boxShadow: '0px 2px 6px rgba(53, 52, 69, 0.1) !important',
         borderRadius: 4
      },
      '&:disabled': {
         background: '#A5AEF1',
         color: 'white',
         boxShadow: '0px 2px 6px rgba(53, 52, 69, 0.1)',
         borderRadius: 4
      }
   }
}));

const secondaryButtonStyles = makeStyles(theme => ({
   button: {
      border: '2px solid #6979F8',
      background: '#FFF',
      color: '#6979F8',
      opacity: 0.9,
      boxSizing: 'border-box',
      borderRadius: 4,
      fontSize: 12,
      textTransform: 'capitalize',
      '&:hover': {
         background: '#FFF',
         color: '#5364EA',
         border: '2px solid #5364EA',
         boxSizing: 'border-box',
         borderRadius: 4
      },
      '&:active': {
         background: '#FFF',
         color: '#4153E0',
         border: '2px solid #4153E0',
         boxSizing: 'border-box',
         borderRadius: 4
      },
      '&:disabled': {
         background: '#FFF',
         color: '#A5AEF1',
         border: '2px solid #A5AEF1',
         boxSizing: 'border-box',
         borderRadius: 4
      }
   }
}));

export const PrimaryButton = props => {
   const classes = primaryButtonStyles();
   return (
      <Button className={classes.button} disableRipple {...props}>
         {props.children}
      </Button>
   );
};

export const SecondaryButton = props => {
   const classes = secondaryButtonStyles();
   return (
      <Button className={classes.button} disableRipple {...props}>
         {props.children}
      </Button>
   );
};
