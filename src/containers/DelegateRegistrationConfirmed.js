import React, { useState, Fragment } from 'react';
import {
   Grid,
   Container,
   Paper,
   Tabs,
   Tab,
   Typography,
   Box,
   Slider,
   List,
   ListItem,
   ListSubheader
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Assignment, Widgets } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { PrimaryInput } from '../components/Input';
import { PrimaryDropbox } from '../components/Dropbox';
import { PrimaryButton, SecondaryButton } from '../components/Button';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <Typography
         component='div'
         role='tabpanel'
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         <Box p={3}>{children}</Box>
      </Typography>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
   };
}

const useStyles = makeStyles(theme => ({
   leftLabel: {
      color: '#06137F',
      fontWeight: 'bold',
      fontSize: 14
   },
   rightLabel: {
      color: '#06137F',
      fontSize: 14
   },
   topLabel: {
      color: '#06137F',
      fontWeight: 'bold',
      fontSize: 18
   },
   downLabel: {
      color: '#06137F',
      fontSize: 14
   },
   gradient: {
      background: 'linear-gradient(1.48deg, #6979F8 10.07%, #A5AFFB 165.7%)',
      height: 160
   },
   paper: {
      padding: theme.spacing(3, 2)
   },
   rightPaper: {
      padding: theme.spacing(0, 0)
   },
   tabPanel: {
      '&>div': {
         padding: '30px 0px 0px 0px'
      }
   },
   tab: {
      minWidth: 10,
      textTransform: 'capitalize'
   },
   bonus: {
      fontSize: 10
   },
   sliderLabel: {
      fontSize: 14
   },
   recommendedLabel: {
      fontSize: 10,
      color: '#06137F'
   },
   username: {
      fontSize: 12,
      color: '#06137F'
   },
   vote: {
      position: 'absolute',
      marginTop: -30,
      fontSize: 12
   },
   listSection: {
      backgroundColor: 'inherit'
   },
   ul: {
      backgroundColor: 'inherit',
      padding: 0
   },
   list: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 440,
      minHeight: 440
   },
   leftList: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 370,
      minHeight: 370,
      marginTop: 15
   }
}));

//sliders
const marks = [
   {
      value: 0,
      topLabel: '10x',
      label: ''
   },
   {
      value: 50,
      topLabel: '15x',
      label: ''
   },
   {
      value: 100,
      topLabel: '20x',
      label: ''
   }
];

function valueLabelFormat(value) {
   let index = marks.findIndex(mark => mark.value === value);
   return marks[index].topLabel;
}

const PrettoSlider = withStyles({
   root: {
      color: '#6979F8',
      height: 8
   },
   thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -6,
      marginLeft: -10,
      '&:focus,&:hover,&$active': {
         boxShadow: 'inherit'
      }
   },
   active: {},
   valueLabel: {
      left: 'calc(-50% + 0px)'
   },
   track: {
      height: 8,
      borderRadius: 4
   },
   rail: {
      height: 8,
      borderRadius: 4
   }
})(Slider);

const leftList = [
   {
      rank: 1,
      release: '11/09/2019',
      amount: '23.3%',
      duration: '3m',
      weight: '100k'
   },
   {
      rank: 2,
      release: '11/09/2019',
      amount: '23.3%',
      duration: '3m',
      weight: '100k'
   },
   {
      rank: 3,
      release: '11/09/2019',
      amount: '23.3%',
      duration: '3m',
      weight: '100k'
   },
   {
      rank: 4,
      release: '11/09/2019',
      amount: '23.3%',
      duration: '3m',
      weight: '100k'
   },
   {
      rank: 5,
      release: '11/09/2019',
      amount: '23.3%',
      duration: '3m',
      weight: '100k'
   }
];

const lists = [
   {
      rank: 1,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 2,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 3,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 4,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 5,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 6,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 7,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 8,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 9,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 8,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 8,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 8,
      name: 'simba',
      weight: '100m'
   },
   {
      rank: 8,
      name: 'simba',
      weight: '100m'
   }
];

export default function DelegateRegistrationConfirmed() {
   const classes = useStyles();
   const [value, setValue] = useState(0);

   function handleChange(event, newValue) {
      setValue(newValue);
   }

   return (
      <Fragment>
         <header className={classes.gradient}></header>
         <Container maxWidth='lg'>
            <Grid container spacing={2} style={{ marginTop: -65 }}>
               <Grid item ls={4} md={4} sm={4} xs={12}>
                  <Paper className={classes.paper}>
                     <Paper square style={{ marginLeft: 70, marginRight: 70, boxShadow: 'none' }}>
                        <Tabs
                           value={value}
                           indicatorColor='primary'
                           textColor='primary'
                           variant='fullWidth'
                           onChange={handleChange}
                           aria-label='tabs'
                        >
                           <Tab label='Stake' {...a11yProps(0)} icon={<Widgets />} className={classes.tab} />
                           <Tab label='Manage' {...a11yProps(1)} icon={<Assignment />} className={classes.tab} />
                        </Tabs>
                     </Paper>
                     <TabPanel value={value} className={classes.tabPanel} index={0}>
                        <PrimaryInput label='Amount' placeholder='Enter NOS Amount'></PrimaryInput>
                        <Typography id='discrete-slider-custom' gutterBottom style={{ marginTop: 24 }}>
                           Duration
                        </Typography>
                        <Grid
                           container
                           direction='row'
                           justify='space-between'
                           alignItems='center'
                           spacing={0}
                           style={{ marginBottom: -4 }}
                        >
                           {['10x bonus', '15x bonus', '20x bonus'].map((value, key) => (
                              <Grid key={value} item>
                                 <label className={classes.bonus}>{value}</label>
                              </Grid>
                           ))}
                        </Grid>
                        <PrettoSlider
                           defaultValue={50}
                           valueLabelFormat={valueLabelFormat}
                           valueLabelDisplay='auto'
                           aria-label='pretto slider'
                           step={null}
                           marks={marks}
                        />
                        <Grid
                           container
                           direction='row'
                           justify='space-between'
                           alignItems='center'
                           spacing={0}
                           style={{ marginTop: -14 }}
                        >
                           {['3 months', '6 months', '1 year'].map((value, key) => (
                              <Grid key={value} item>
                                 <label className={classes.sliderLabel}>{value}</label>
                              </Grid>
                           ))}
                        </Grid>
                        <Grid
                           container
                           direction='row'
                           justify='center'
                           alignItems='center'
                           spacing={0}
                           style={{ marginTop: -10 }}
                        >
                           <Grid key={value} item>
                              <label className={classes.recommendedLabel}>Recommended</label>
                           </Grid>
                        </Grid>
                        <Typography id='discrete-slider-custom' gutterBottom style={{ marginTop: 24 }}>
                           Details
                        </Typography>
                        <Grid container spacing={2}>
                           {[
                              ['520K', 'Added weight from stake'],
                              ['570k', 'Total weight after stake'],
                              ['Jan. 13th 2020, 15:00', 'Stake release']
                           ].map((value, index) => {
                              return (
                                 <Grid key={index} item ls={12} md={12} sm={12}>
                                    <Grid container direction='row' justify='space-between' spacing={2}>
                                       <Grid item>
                                          <label className={classes.leftLabel}>{value[0]}</label>
                                       </Grid>
                                       <Grid item>
                                          <label className={classes.rightLabel}>{value[1]}</label>
                                       </Grid>
                                    </Grid>
                                 </Grid>
                              );
                           })}
                        </Grid>
                        <PrimaryButton style={{ width: '100%', marginTop: 32 }}>Stake</PrimaryButton>
                     </TabPanel>
                     <TabPanel value={value} className={classes.tabPanel} index={1}>
                        <label className={classes.sliderLabel}>
                           Click on a <span style={{ color: '#06137F' }}>redeemable</span> stake to redeem your funds.
                        </label>
                        <List className={classes.leftList} subheader={<li />}>
                           <li className={classes.listSection}>
                              <ul className={classes.ul}>
                                 <ListSubheader style={{ lineHeight: '20px' }}>
                                    <Grid
                                       container
                                       direction='row'
                                       justify='space-between'
                                       alignItems='baseline'
                                       spacing={0}
                                    >
                                       <Grid item>
                                          <label className={classes.username}>Rank</label>
                                       </Grid>
                                       <Grid item>
                                          <label className={classes.username}>Release</label>
                                       </Grid>
                                       <Grid item>
                                          <label className={classes.username}>Amount</label>
                                       </Grid>
                                       <Grid item>
                                          <label className={classes.username}>Duration</label>
                                       </Grid>
                                       <Grid item>
                                          <label className={classes.username}>Weight</label>
                                       </Grid>
                                    </Grid>
                                 </ListSubheader>
                                 {leftList.map((item, index) => (
                                    <ListItem key={index}>
                                       <Grid
                                          container
                                          direction='row'
                                          justify='space-between'
                                          alignItems='baseline'
                                          spacing={2}
                                       >
                                          <Grid item>
                                             <label className={classes.rightLabel}>{item.rank}</label>
                                          </Grid>
                                          <Grid item>
                                             <label className={classes.rightLabel}>{item.release}</label>
                                          </Grid>
                                          <Grid item>
                                             <label className={classes.rightLabel}>{item.amount}</label>
                                          </Grid>
                                          <Grid item>
                                             <label className={classes.rightLabel}>{item.duration}</label>
                                          </Grid>
                                          <Grid item>
                                             <label className={classes.rightLabel}>{item.weight}</label>
                                          </Grid>
                                       </Grid>
                                       {/* <ListItemText primary={`Item ${item}`} /> */}
                                    </ListItem>
                                 ))}
                              </ul>
                           </li>
                        </List>
                     </TabPanel>
                  </Paper>
               </Grid>
               <Grid item ls={8} md={8} sm={8} xs={12}>
                  <Paper className={classes.rightPaper}>
                     <Grid container direction='row' spacing={0}>
                        <Grid
                           item
                           ls={4}
                           md={4}
                           sm={12}
                           style={{ borderRight: '1px solid #EDEEF4', padding: '24px 16px 16px 24px' }}
                        >
                           <h3 style={{ fontWeight: 'normal', marginBottom: 35 }}>My Account</h3>
                           <PrimaryDropbox label='My Address'></PrimaryDropbox>
                           <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
                              <Grid item style={{ marginTop: 40 }}>
                                 <label className={classes.topLabel}>102K</label>
                              </Grid>
                              <Grid item style={{ marginTop: -15, marginBottom: 20 }}>
                                 <label className={classes.downLabel}>Balance</label>
                              </Grid>
                           </Grid>
                           <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
                              <Grid item>
                                 <label className={classes.topLabel}>10.2K</label>
                              </Grid>
                              <Grid item style={{ marginTop: -15, marginBottom: 20 }}>
                                 <label className={classes.downLabel}>Staked</label>
                              </Grid>
                           </Grid>
                           <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
                              <Grid item>
                                 <label className={classes.topLabel}>102K</label>
                              </Grid>
                              <Grid item style={{ marginTop: -15, marginBottom: 20 }}>
                                 <label className={classes.downLabel}>Vote weight</label>
                              </Grid>
                           </Grid>
                           <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
                              <Grid item>
                                 <label className={classes.topLabel}>coffee</label>
                              </Grid>
                              <Grid item style={{ marginTop: -15 }}>
                                 <label className={classes.downLabel}>My vote</label>
                              </Grid>
                           </Grid>
                           <SecondaryButton style={{ width: '100%', marginTop: 32 }}>Search Delegate</SecondaryButton>
                        </Grid>
                        <Grid item ls={8} md={8} sm={12} style={{ padding: '24px 16px 16px 24px' }}>
                           <Grid container direction='row' justify='space-between' alignItems='baseline' spacing={2}>
                              <Grid item>
                                 <h3 style={{ fontWeight: 'normal', marginBottom: 35 }}>Delegates</h3>
                              </Grid>
                              <Grid item>
                                 <label className={classes.username}>My delegate: delegateUsername</label>
                              </Grid>
                           </Grid>
                           <label className={classes.vote}>
                              Click on a delegate to set your <span style={{ color: '#06137F' }}>vote</span>.
                           </label>
                           <List className={classes.list} subheader={<li />}>
                              <li className={classes.listSection}>
                                 <ul className={classes.ul}>
                                    <ListSubheader style={{ lineHeight: '20px' }}>
                                       <Grid
                                          container
                                          direction='row'
                                          justify='space-between'
                                          alignItems='baseline'
                                          spacing={2}
                                       >
                                          <Grid item>
                                             <label className={classes.username}>Rank</label>
                                          </Grid>
                                          <Grid item>
                                             <label className={classes.username}>Name</label>
                                          </Grid>
                                          <Grid item>
                                             <label className={classes.username}>Vote Weight</label>
                                          </Grid>
                                       </Grid>
                                    </ListSubheader>
                                    {lists.map((item, index) => (
                                       <ListItem key={index}>
                                          <Grid
                                             container
                                             direction='row'
                                             justify='space-between'
                                             alignItems='baseline'
                                             spacing={2}
                                          >
                                             <Grid item>
                                                <label className={classes.rightLabel}>{item.rank}</label>
                                             </Grid>
                                             <Grid item>
                                                <label className={classes.leftLabel}>{item.name}</label>
                                             </Grid>
                                             <Grid item>
                                                <label className={classes.rightLabel}>{item.weight}</label>
                                             </Grid>
                                          </Grid>
                                          {/* <ListItemText primary={`Item ${item}`} /> */}
                                       </ListItem>
                                    ))}
                                 </ul>
                              </li>
                           </List>
                        </Grid>
                     </Grid>
                  </Paper>
               </Grid>
            </Grid>
         </Container>
      </Fragment>
   );
}
