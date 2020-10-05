import React, {useEffect} from "react";
import Paper from '@material-ui/core/Paper';
import { ReactTinyLink } from 'react-tiny-link'
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios"

import 'react-vertical-timeline-component/style.min.css';
import styles from "assets/jss/material-dashboard-react/components/bodyStyle.js";


const useStyles = makeStyles(styles)

export default function Knowledge() {

  const classes = useStyles();
  const [recommends, setRecommendations] = React.useState([]);

  useEffect(() => {
    const params = {
      category: 'knowledge'
    }

    Axios.post(`/api/hacks/getRecommends`,  params)
    .then(res => {
        setRecommendations(res.data)
      
    }).catch(err => {
      console.log(err)
    })

  }, [])


  


  return (
    
    

    <div className={classes.categoryWrapper}>
      {recommends && recommends.length > 0 && recommends.map((rec, index) => (
        
         <div key={index} className={classes.tinyLink}>
          <ReactTinyLink
            cardSize="large"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            description="here goes the description I can put to every case"
            url={rec.link}
          />
          </div>
       
      ))}
    </div>
    
  );
}
