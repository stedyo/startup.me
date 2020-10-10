import {
  container,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor
} from "assets/jss/material-dashboard-react.js";

const bodyStyle = () => ({
  form:{
    ...container,
    fontSize: "16px",
    padding: "15px",
    margin: "0 auto",
    width: "90%",
    marginTop: "15px"
  },
  select:{
    marginBottom: '20px',
    marginLeft: '5px',
    
  },
  
  categoryWrapper:{
    width: "100%",
    margin: "0 auto",
    height: 'auto',
  },
  card:{
    margin: '7px',
    display: 'inline-block',
    borderRadius: '2px',
    width: "31%",
  },

  '@media screen and (min-width: 250px)': {
    card: {
      width: "100%",
    }
  },
  '@media screen and (min-width: 600px)': {
    card: {
      width: "47%",
    }
  },
  '@media screen and (min-width: 1024px)': {
    card: {
      width: "31%",
    }
  },
  gridMail:{
    marginTop: '6px',
  },  
  textFieldMail:{
    width: '300px',
    fontFamily: 'Roboto!important',
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginTop: "10px",
    marginBottom: "10px",
    position: "relative",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: grayColor[7],
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px"
  },
  container: {
    ...container,
    minHeight: "50px",
    width: "90%",
    borderBottom: "1px dashed #B5B5B5",
    height: "auto",
  },
  flex: {
    flex: 1
  },
  title: {
    fontFamily: "Roboto",
    letterSpacing: "unset",
    lineHeight: "20px",
    fontSize: "20px",
    fontWeight: "700",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent"
    }
    
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  }
});

export default bodyStyle;
