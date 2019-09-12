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
      marginBottom: theme.spacing(0),
      paddingBottom: 0,
      '& h2': {
         color: 'black',
         fontWeight: 500,
         fontSize: 30
      }
   },
   action: {
      padding: '8px 24px',
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
      fontSize: 16,
      lineHeight: 1,
      color: '#000'
   }
}));

export default function RedeemStake() {
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
            Redeem Stake
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
                  padding: '0px 40px 15px 40px',
                  maxWidth: 500,
                  maxHeight: 'calc(100% - 70px)'
               }
            }}
         >
            <DialogTitle id='alert-dialog-title' className={classes.title}>
               {'Redeem Stake'}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id='alert-dialog-description'>
                  <Grid container spacing={2} style={{ marginBottom: 24 }}>
                     <Grid item ls={12} md={12} sm={12} style={{ backgroundColor: '#F4F2CD' }}>
                        <label className={classes.description}>
                           <b>Are you sure you want to redeem your stake?</b>
                           <br></br>
                           You’ll get back <b>26k NOS</b> but you’ll <b>lose 260k vote weight</b>.
                        </label>
                     </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                     <Grid item ls={6} md={6} sm={6}>
                        <Grid container direction='column' justify='center' spacing={2}>
                           {['26k', '360k', '100k'].map((value, key) => (
                              <Grid key={value} item>
                                 {key !== 2 && <label className={classes.leftLabel}>{value}</label>}
                                 {key === 2 && (
                                    <label className={classes.leftLabel}>
                                       {value} <br></br>
                                       <label style={{ position: 'absolute', fontSize: 12, color: 'red' }}>
                                          -38.5%
                                       </label>
                                    </label>
                                 )}
                              </Grid>
                           ))}
                        </Grid>
                     </Grid>
                     <Grid item ls={6} md={6} sm={6}>
                        <Grid container direction='column' justify='center' alignItems='flex-end' spacing={2}>
                           {['NOS to be redeemed', 'Current total vote weight', 'Vote weight after redeeming'].map(
                              value => (
                                 <Grid key={value} item>
                                    <label className={classes.rightLabel}>{value}</label>
                                 </Grid>
                              )
                           )}
                        </Grid>
                     </Grid>
                  </Grid>
               </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
               <PrimaryButton onClick={handleClose} style={{ width: '60%' }}>
                  Redeem stake
               </PrimaryButton>
               <SecondaryButton onClick={handleClose} style={{ width: '40%' }}>
                  Keep stake
               </SecondaryButton>
            </DialogActions>
         </Dialog>
      </div>
   );
}
