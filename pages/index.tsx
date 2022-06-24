import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { withStyles } from '@material-ui/core/styles';
import MaterialChip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

declare var window: any;

const Chip = (props: any) => {
  const StyledChip = withStyles({
      root: {
        'color': 'white'
      },
      outlined: {
          color: 'white',
      }
  })(MaterialChip);

  return <StyledChip {...props} />;
};

const Home: NextPage = () => {
  type directionType = 'column' | 'row'
  const [chipsDirection, setChipsDirection] = useState<directionType>('column');
  
  let height = 1920
  if (typeof screen !== "undefined") {
    height = screen.width;
  }
  let _chipsDirection: directionType = height <= 600 ? 'column' : 'row'
  console.log('height', height, _chipsDirection)
  useEffect(() => {
    setChipsDirection(_chipsDirection)
  }, [height])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>web3panther</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
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
            <img src="./panther-bg.svg"></img>
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
            sx={{
              "& .MuiChip-label": {
                color: "white"
              }
            }} />
          <Chip label="My Projects" variant="outlined" 
            sx={{
              "& .MuiChip-label": {
                color: "white"
              }
            }} />
          <Chip label="Freelance Projects" variant="outlined" 
            sx={{
              "& .MuiChip-label": {
                color: "white"
              }
            }} />
          <Chip label="Books I read" variant="outlined" 
            sx={{
              "& .MuiChip-label": {
                color: "white"
              }
            }} />
          <Chip label="Memes" variant="outlined" 
            sx={{
              "& .MuiChip-label": {
                color: "white"
              }
            }} />
        </Stack> 
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
