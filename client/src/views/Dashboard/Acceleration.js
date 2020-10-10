import React, {useEffect} from "react";
import Select from 'react-select'
import detectBrowserLanguage from 'detect-browser-language'
import PublicIcon from '@material-ui/icons/Public';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Cached from '@material-ui/icons/Cached';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Axios from "axios"

import 'react-vertical-timeline-component/style.min.css';
import styles from "assets/jss/material-dashboard-react/components/bodyStyle.js";


const rsStyles = {
  control: base => ({
    ...base,
    fontSize: "12px",
    fontFamily: "Open Sans",
    color: "#333",
    textTransform: "uppercase",
    width: "40%",
    "@media only screen and (max-width: 1200px)": {
      ...styles["@media only screen and (max-width: 1200px)"],
      width: "60%",
    },
    "@media only screen and (max-width: 600px)": {
      ...styles["@media only screen and (max-width: 600px)"],
      width: "100%",
    }
    
  }),
  menu: base => ({
      ...base,
      fontSize: "12px",
      letterSpacing: "0.08em",
      zIndex: "999999999 !important",
      textTransform: "uppercase",
      width: "40%",
      "@media only screen and (max-width: 1200px)": {
        ...styles["@media only screen and (max-width: 1200px)"],
        width: "60%",
      },
      "@media only screen and (max-width: 600px)": {
        ...styles["@media only screen and (max-width: 600px)"],
        width: "100%",
      }
  })
};

const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = `${process.env.PUBLIC_URL}/filesystem/icons/default.png`
}


const useStyles = makeStyles(styles)



export default function Acceleration() {

  const classes = useStyles();
  const [allTags, setAllTags] = React.useState([])
  const [recommends, setRecommendations] = React.useState([]);
  
 
  const [count, setCount] = React.useState(6)

  const _increaseCount = () => {
    setCount(count + 6)
  }




  const handleChangeTags = selectedOption => {
   

    if(selectedOption.value !== null && selectedOption.value !== ""){
      const params = {
        tag: selectedOption.value,
        category: 'acceleration'
      }

      Axios.post(`/api/hacks/getRecommendsbyTag`,  params)
      .then(newRecom => {
          
          if(newRecom.data && newRecom.data.length > 0){
            setRecommendations(newRecom.data)
          }
  
      }).catch(err => {
        console.log(err)
      })
    }
  }

    
    


  useEffect(() => {

    var params = {}
    if(detectBrowserLanguage().toLowerCase() === "pt-br"){
      params = {
        category: 'acceleration',
        language: 'pt'
      }
    } else {
      params = {
        category: 'acceleration',
        language: 'en'
      }
    }
    

    Axios.post(`/api/hacks/getTagsbyCategory`,  params)
    .then(tags => {
        
        if(tags.data && tags.data.length > 0){
          var allTags = [] 
          Object.keys(tags.data).forEach(function(key) {
            const tagName = tags.data[key].tag
            var spTag = tagName.toString().split("_")
            allTags.push({value: tagName, label: spTag.join(" ")})
          })
          setAllTags(allTags)
        }

    }).catch(err => {
      console.log(err)
    })

    Axios.post(`/api/hacks/getRecommends`,  params)
    .then(res => {
        setRecommendations(res.data)
    }).catch(err => {
      console.log(err)
    })
    
  }, [])

 
return (
    
    <div className={classes.categoryWrapper}>

        <div className={classes.select}>
        {detectBrowserLanguage().toLowerCase() === "pt-br" &&
        <span style={{margin: '2px', fontSize: '14px'}}>Filtre as plataformas por categoria: </span>
        }
        {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
        <span style={{margin: '2px', fontSize: '14px'}}>Search by category: </span>
        }
        <Select
            options={allTags}
            onChange={handleChangeTags}
            styles={rsStyles} 
        />
        </div>
      
     {recommends && recommends.length > 0 && recommends.slice(0, count).map((rec, index) => (
        
        <a key={index} href={`${rec.link}`} target="_blank" rel="noopener noreferrer">
          <Card key={index} className={classes.card}>
          <CardActionArea>
          <CardMedia
            component="img"
            alt="s"
            height="150"
            image={`${process.env.PUBLIC_URL}/filesystem/icons/${rec.id}.png`}
            title=""
            onError={handleImageError}  
          />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'left', fontSize: '20px'}}>
                {rec.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{height: '70px', textAlign: 'left'}}>
                {rec.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          {detectBrowserLanguage().toLowerCase() === "pt-br" &&
          <CardActions>
              <IconButton aria-label="add to favorites">
                <PublicIcon />
              </IconButton>
              Acesse o site
          </CardActions>
          }
          {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
          <CardActions>
              <IconButton aria-label="add to favorites">
                <PublicIcon />
              </IconButton>
              Visit the website
          </CardActions>
          }
          
        </Card>
      </a>
     ))}
     
    
    {recommends.length > count &&
      <div style={{marginTop: "15px"}}>
      {detectBrowserLanguage().toLowerCase() === "pt-br" &&
      <Button
      variant="contained"
      color="primary"
      startIcon={<Cached />}
      onClick={_increaseCount}
      style={{marginLeft: '10px'}}
      >
      carregar mais opções
      </Button> 
      }
      {detectBrowserLanguage().toLowerCase() !== "pt-br" &&
      <Button
      variant="contained"
      color="primary"
      startIcon={<Cached />}
      onClick={_increaseCount}
      style={{marginLeft: '10px'}}
      >
      load more
      </Button> 
      }
      </div> 
      
    }


    </div>

    
  );
}
