import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
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
   },
   leftLabel: {
      color: '#06137F',
      fontWeight: 'bold'
   },
   rightLabel: {
      color: '#06137F'
   }
}));

export default function Delegate() {
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
            Delegate
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
               {'Delegate'}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id='alert-dialog-description'>
                  <Grid container spacing={2}>
                     <Grid item ls={6} md={6} sm={6}>
                        <Grid container direction='column' justify='center' spacing={2}>
                           {['Coffee', '520k', '1.2k'].map(value => (
                              <Grid key={value} item>
                                 <label className={classes.leftLabel}>{value}</label>
                              </Grid>
                           ))}
                        </Grid>
                     </Grid>
                     <Grid item ls={6} md={6} sm={6}>
                        <Grid container direction='column' justify='center' alignItems='flex-end' spacing={2}>
                           {['Username', 'Votes', 'Blocks forged'].map(value => (
                              <Grid key={value} item>
                                 <label className={classes.rightLabel}>{value}</label>
                              </Grid>
                           ))}
                        </Grid>
                     </Grid>
                  </Grid>
               </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
               <PrimaryButton onClick={handleClose} style={{ width: '60%' }}>
                  Vote
               </PrimaryButton>
               <SecondaryButton onClick={handleClose} style={{ width: '40%' }}>
                  Cancel
               </SecondaryButton>
            </DialogActions>
         </Dialog>
      </div>
   );
}
