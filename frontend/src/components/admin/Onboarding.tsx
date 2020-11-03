import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '../../contexts/auth0-context';
// custom
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent } from '@material-ui/core';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import { gql, useMutation } from '@apollo/client';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        margin: theme.spacing(0, 5),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      heading: {
        background: "#3f51b56b",
        marginBottom: "15px",
        color: "#fff",
      },
      cardsection: {
        paddingBottom: '15px',
        width: "1250px",
      },
      textfield: {
        width: '42ch',
      },
      button: {
        // margin: theme.spacing(1),
        marginRight: "500px",
        marginTop: "20px",
        background: "#3f51b56b",
      },
  }),
);

const COMPANY_MUTATION = gql`
  mutation createCompany($companyname: String!, $personname: String!, $phone: Int!, $address: String!, $industry: String!, $location: String!) {
    createCompany(input: {companyname: $companyname,personname: $personname, phone: $phone, address: $address, industry: $industry, location: $location}){
      id
      companyname
      personname
      phone
      address
      industry
      location
    }
  }
`;

function Onboarding():JSX.Element {
  // let history = useHistory()
  const [companyname, setCompanyname] = useState('');
  const [personname, setPersonname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<number>(0);
  const [address, setAddress] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();
  
  
  const [createCompany, { data, error, loading }] = useMutation(COMPANY_MUTATION);
  if (error) {
    alert('Error: Operation failed');
  }
  if (data) {
    alert('Successfully Saved');
  }
  // const [posts, setPosts] = useState();
  // const theme = useTheme();
  const classes = useStyles();
  
  return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
        { isAuthenticated && (
        <Card className={classes.cardsection}>
        <CardContent className={classes.heading}>
             <Typography variant="h5" component="h2">Add Company Details</Typography>
        </CardContent>
          <form noValidate autoComplete="off"
            onSubmit={e => {
              e.preventDefault();
              createCompany({ variables: { companyname, personname, phone, address, industry, location } });
            }}
          >
          <div className={classes.root}>
          <Grid spacing={3}>
              <Grid item xs={12}>
                <TextField 
                  label="Company" 
                  variant="outlined" 
                  style={{width:"300px"}} 
                  id="companyname"
                  name="companyname"
                  value={companyname}
                  onChange={e => setCompanyname(e.target.value)}
                  type="text"
                  required
                />
                <TextField 
                  label="Person" 
                  variant="outlined" 
                  style={{width:"300px"}}
                  id="personname"
                  name="personname"
                  value={personname}
                  onChange={e => setPersonname(e.target.value)}
                  type="text"
                  required
                />
              </Grid>
          </Grid>
            <Grid spacing={3}>
              <Grid item xs={12}>
                <TextField 
                  label="Email" 
                  variant="outlined" 
                  style={{width:"300px"}}
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  required 
                />
                <TextField 
                  label="Phone" 
                  variant="outlined" 
                  style={{width:"300px"}} 
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={e => setPhone(parseInt(e.target.value))}
                  type="number"
                  required 
                />
              </Grid>
            </Grid>
            <Grid spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  multiline
                  rows={6}
                  fullWidth={true}
                  variant="outlined"
                  style={{width:"610px"}}
                  id="address"
                  name="address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  type="text"
                  required
                />
              </Grid>
            </Grid>
            <Grid spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Industry" 
                  variant="outlined" 
                  style={{width:"300px"}} 
                  id="industry"
                  name="industry"
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  type="text"
                  required
                />
                <TextField 
                  label="Add Location" 
                  variant="outlined" 
                  style={{width:"300px"}} 
                  id="location"
                  name="location"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  type="text"
                  required
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              type="submit"
            >
              Save
            </Button>
          </div>
          </form>
        </Card>
        )}
      </Container>
      </main>
    
);
}
export default Onboarding;