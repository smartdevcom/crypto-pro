import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { PrimaryInput } from '../components/Input';
import { PrimaryButton, SecondaryButton } from '../components/Button';

const useStyles = makeStyles(theme => ({
   dialog: {
      padding: 100
   },
   title: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      lineHeight: 42,
      textAlign: 'center',
      marginBottom: theme.spacing(3),
      '& h2': {
         color: 'black',
         fontWeight: 500,
         fontSize: 35
      }
   },
   action: {
      padding: '8px 24px',
      alignItems: 'unset',
      marginTop: theme.spacing(3)
   }
}));

export default function RegisterDelegate() {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   function handleClickOpen() {
      setOpen(true);
   }

   function handleClose() {
      setOpen(false);
   }

   return (
      <div>
         <Button variant='outlined' color='primary' onClick={handleClickOpen}>
            Register Delegate
         </Button>
         <Dialog
            className={classes.dialog}
            open={open}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
            fullWidth={true}
            PaperProps={{
               style: {
                  padding: 30,
                  maxWidth: 500
               }
            }}
         >
            <DialogTitle id='alert-dialog-title' className={classes.title}>
               {'Register Delegate'}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id='alert-dialog-description'>
                  <PrimaryInput
                     label='Username'
                     placeholder='Enter a name for your delegate'
                     defaultValue=''
                  ></PrimaryInput>
               </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
               <PrimaryButton onClick={handleClose} style={{ width: '60%' }}>
                  Register
               </PrimaryButton>
               <SecondaryButton onClick={handleClose} style={{ width: '40%' }}>
                  Cancel
               </SecondaryButton>
            </DialogActions>
         </Dialog>
      </div>
   );
}
