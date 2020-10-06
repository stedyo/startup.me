import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import {TextField, FormHelperText} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/MailOutline';
import detectBrowserLanguage from 'detect-browser-language'
import Button from '@material-ui/core/Button';
import Axios from "axios"

import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import stylesBody from "assets/jss/material-dashboard-react/components/bodyStyle.js";

import bgImage from "assets/img/sidebar-2.png";
import logo from "assets/img/shuttle.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/section") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/section" to="/section/roadmap" />
  </Switch>
);

const useStyles = makeStyles(styles);
const userStylesBody = makeStyles(stylesBody)

export default function Admin({ ...rest }) {
 
  // styles
  const classes = useStyles();
  const classesBody = userStylesBody()
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  

  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("red");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");

  const [email, setEmail] = useState('')
  var initText = 'Enter your best e-mail'
  if(detectBrowserLanguage().toLowerCase() === "pt-br"){
    initText = "Insira seu melhor e-mail"
  }

  const [formText, setFormText] = useState(initText)

  const handleChangeEmail = (email) => {
    setEmail(email)
  }
  const handleFormChange = (formText) => {
    setFormText(formText)
  }

  const validateAndSubmit = (event, errors, values) => {
    var validator = require("email-validator");
    var valEmail = validator.validate(email)
    if(!valEmail){
      if(detectBrowserLanguage().toLowerCase() !== "pt-br"){
        handleFormChange('Please insert a valid e-mail :(')
      } else {
        handleFormChange('Por gentileza, insira um e-mail válido :(')
      }
    } else {

      const params = {
        email: email
      }

      Axios.post(`/api/hacks/subscribe`,  params)
      .then(res => {
        
        if(res.data && res.data !== "" && res.data !== null && res.data > 0){
          if(detectBrowserLanguage().toLowerCase() !== "pt-br"){
            handleFormChange('Okay, we have subscribed you ;)')
          } else {
            handleFormChange('Maravilha, você está inscrito ;)')
          }
        } else if(res.data && res.data !== "" && res.data !== null && res.data.message && res.data.message === 'alreadysubscribed'){
          if(detectBrowserLanguage().toLowerCase() !== "pt-br"){
            handleFormChange('We already subscibed ;)')
          } else {
            handleFormChange('Você já está inscrito ;)')
          }
        }

      }).catch(err => {
          if(detectBrowserLanguage().toLowerCase() !== "pt-br"){
            handleFormChange('Something went wrong. Try again.')
          } else {
            handleFormChange('Algo deu errado. Tente novamente.')
          }
      })

    }
    
  }


  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Startup Hacks"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        
        {/*<div className={classes.ads}>
         Espaço reservado para google ads
        </div>*/}

        <Paper className={classesBody.form}>
          {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
            <span>  Do you wanna receive the newest platforms to boost your startup in your e-mail?</span>
          }

          {detectBrowserLanguage().toLowerCase() === "pt-br" &&
            <span> Quer receber no seu e-mail as mais novas plataformas para alavancar sua startup?</span>
          }

          <Grid container spacing={2} alignItems="flex-end" className={classesBody.gridMail}>
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                  <TextField 
                    name="email"
                    onChange={e => handleChangeEmail(e.target.value)} 
                    value={email}
                    className={classesBody.textFieldMail} 
                  />
                  <FormHelperText id="event-t-text">{formText}</FormHelperText>
                
              </Grid>
              <Grid item>
                {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
                  <Button variant="contained" color="primary" onClick={validateAndSubmit}>
                    Subscribe Me
                  </Button>
                }
                {detectBrowserLanguage().toLowerCase() === "pt-br" &&
                  <Button variant="contained" color="primary" onClick={validateAndSubmit}>
                    Inscrever-me
                  </Button>
                }
              </Grid>
            </Grid>
        </Paper>

        

        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>
              {switchRoutes}
            </div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
          
        )}

        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
            <div style={{fontSize: "12px", width: "93%", textAlign: "left", margin: "0 auto", marginBottom: "20px"} }>
              Aviso: O startuphacks.me tem como objetivo compilar plataformas, ferramentas e serviços de mercado que facilitem a vida dos empreendedores.
              <br />
              Não temos propriedade sobre qualquer empresa que indicamos.
            </div>
        }

        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <div style={{fontSize: "12px", width: "93%", textAlign: "left", margin: "0 auto", marginBottom: "20px"} }>
              Disclaimer: Startuphacks.me aims to compile platforms, tools and market services to help entrepreneurs to thrive.
              <br />
              We have no ownership over any company we refer.
          </div>
        }




        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
  );
}
