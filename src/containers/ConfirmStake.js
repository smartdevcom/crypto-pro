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
      marginBottom: theme.spacing(2),
      paddingTop: 10,
      '& h2': {
         color: 'black',
         fontWeight: 500,
         fontSize: 35
      }
   },
   action: {
      padding: '0px 24px 8px 24px',
      alignItems: 'unset',
      marginTop: theme.spacing(2)
   },
   leftLabel: {
      color: '#06137F',
      fontWeight: 'bold'
   },
   rightLabel: {
      color: '#06137F'
   },
   description: {
      fontSize: 13,
      lineHeight: 1,
      color: '#06137F'
   }
}));

export default function ConfirmStake() {
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
            Confirm Stake
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
                  padding: '10px 30px 15px 30px',
                  maxWidth: 500,
                  maxHeight: 'calc(100% - 70px)'
               }
            }}
         >
            <DialogTitle id='alert-dialog-title' className={classes.title}>
               {'Confirm Stake'}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id='alert-dialog-description' style={{ margin: 0 }}>
                  <Grid container spacing={2}>
                     <Grid item ls={6} md={6} sm={6}>
                        <Grid container direction='column' justify='center' spacing={2}>
                           {['52k', '520k', 'Jan. 1st 2019, 15:00'].map(value => (
                              <Grid key={value} item>
                                 <label className={classes.leftLabel}>{value}</label>
                              </Grid>
                           ))}
                        </Grid>
                     </Grid>
                     <Grid item ls={6} md={6} sm={6}>
                        <Grid container direction='column' justify='center' alignItems='flex-end' spacing={2}>
                           {['NOS staked', 'Added vote weight', 'Stake release'].map(value => (
                              <Grid key={value} item>
                                 <label className={classes.rightLabel}>{value}</label>
                              </Grid>
                           ))}
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                     <Grid item ls={12} md={12} sm={12}>
                        <label className={classes.description}>
                           You can redeem your staked NOS at any time after release. You also keep half the stake’s vote
                           weight after release, for as long as it is not redeemed.
                        </label>
                     </Grid>
                  </Grid>
               </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
               <PrimaryButton onClick={handleClose} style={{ width: '60%' }}>
                  Stake
               </PrimaryButton>
               <SecondaryButton onClick={handleClose} style={{ width: '40%' }}>
                  Cancel stake
               </SecondaryButton>
            </DialogActions>
         </Dialog>
      </div>
   );
}
