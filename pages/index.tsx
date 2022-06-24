import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { withStyles } from '@material-ui/core/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SvgIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';

declare var window: any;

const Home: NextPage = () => {
  type directionType = 'column' | 'row'
  const [chipsDirection, setChipsDirection] = useState<directionType>('column');
  
  let height = 1920
  if (typeof screen !== "undefined") {
    height = screen.width;
  }
  let _chipsDirection: directionType = height <= 800 ? 'column' : 'row'
  console.log('height', height, _chipsDirection)
  useEffect(() => {
    setChipsDirection(_chipsDirection)
  }, [height])
  
  const chipStyle = {
    'height': '40px',
    'borderRadius': '20px',
    'minWidth': '80px',
    "& .MuiChip-root": {
    },
    "& .MuiChip-label": {
      color: "white",
      fontSize: '15px'
    }
  }

  const iconStyle = {
    color: 'white'
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>web3panther</title>
        <meta name="description" content="Web3 Entrepreneur, developer, algo-trader and freelancer" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          web3panther
        </h1>

        <p className={styles.description}>
          Venkat Kunisetty
        </p>

        <div className={styles.grid}>
          <div className={styles.pantherbg}>
            <img className={styles.pantherDesktop} src="./panther-bg.svg"></img>
            <img className={styles.pantherMobile} src="./panther-icon.svg"></img>
          </div>
          <div className={styles.subheading}>
            <h3>Believer of Web3 and Blockchain</h3>
            <h3>Panther is the spirit animal</h3>
          </div>
          <div className={styles.subheading2}>
            <p>IIT Madras alumnus</p>
            <br/>
            <p>Entrepreneur</p>
            <p>Fullstack developer</p>
            <p>Ethereum developer</p>
            <p>Algo-trader</p>
            <p>Freelancer</p>
          </div>
        </div>

        <Stack direction={chipsDirection} spacing={1}>
          <Chip label="My Story" variant="outlined"
            component="a"
            href="https://bit.ly/3A2MG6P"
            clickable
            sx={chipStyle} />
          <Chip label="My Projects" variant="outlined" 
            component="a"
            href="https://bit.ly/3buABNz"
            clickable
            sx={chipStyle} />
          <Chip label="Freelance Projects" variant="outlined" 
            component="a"
            href="https://bit.ly/3HR4TGn"
            clickable
            sx={chipStyle} />
          <Chip label="Blog" 
            component="a"
            href="https://bit.ly/3bnkcdx"
            variant="outlined" 
            clickable
            sx={chipStyle} />
          <Chip label="Books I read" variant="outlined" 
            component="a"
            href="https://bit.ly/39Lj0At"
            clickable
            sx={chipStyle} />
          <Chip label="Memes" variant="outlined" 
            component="a"
            href="https://bit.ly/3u0sfDr"
            clickable
            sx={chipStyle} />
        </Stack> 
        <br/>
        <br/>
        <Stack direction={chipsDirection} spacing={1}>
          <IconButton aria-label="twitter" href="https://bit.ly/3xRxiHz" size="small" color="primary">
            <TwitterIcon sx={iconStyle}/>
          </IconButton>
          <IconButton aria-label="linkedin" href="https://bit.ly/3A054wS" size="small" color="primary">
            <LinkedInIcon sx={iconStyle}/>
          </IconButton>
          <IconButton aria-label="discord" href="https://bit.ly/3u0tGSy" size="small" color="primary">
            <img className={styles.icon} src="./discord-icon.svg" width="25px"></img>
          </IconButton>

        </Stack>
      </main>

      <footer className={styles.footer}>
          Built using NextJS
      </footer>
    </div>
  )
}

export default Home
