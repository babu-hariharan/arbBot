
'use client'

/** PACKAGE IMPORT */

import React, { useState } from 'react'
import Lottie from "lottie-react";

/** LOCAL FILE IMPORT */

import styles from '@/styles/landing.module.css'
import Header from '@/components/Header'
import bannerJson from '../../public/assests/animation/banner.json'
import realTime from '../../public/assests/animation/realTime.json'
import decentralisedExecution from '../../public/assests/animation/decentralisedExecution.json'
import arbitrageTrading from '../../public/assests/animation/arbitrageTrading.json'
import arbBot from '../../public/assests/animation/arbBot.json'
import FeatureRightContent from '@/components/FeatureRightContent';
import ImgComponent from '@/components/ImgComponent';
import Images from './Images';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

/** CODE START */


const Landing = () => {


  // const [tabData, setTabData] = useState({
  //   tab1: {
  //     name: "Real Time Monitoring",
  //     left: "Tab One - Left Content",
  //     right: "Tab One - Right Content",
  //   },
  //   tab2: {
  //     name: "Decentralised Execution",
  //     left: "Tab Two - Left Content",
  //     right: "Tab Two - Right Content",
  //   },
  //   tab3: {
  //     name: "Arbitrage Trading",
  //     left: "Tab Three - Left Content",
  //     right: "Tab Three - Right Content",
  //   },
  // })
  const [tabData, setTabData] = useState([{
    keyName: 'tab1',
    name: "Real Time Monitoring",
    left: <Lottie
      animationData={realTime}
      className={`realTimeJson`}
      loop={true} />,
    right: <FeatureRightContent
      title="Real Time Market Monitoring"
      description={<>
        <p>Our bot continuously monitors the order books and pricing data of multiple
          decentralized exchanges on 2 networks
          <span className={styles.yellow}> ( BSC </span> <span className={styles.pink}> & Polygon)</span> to identify potential
          arbitrage opportunities in an DEX’s between the one to another
        </p>
      </>}

      buttonText="Learn More"
      navigation='/'
    />,
  },
  {
    keyName: 'tab2',
    name: "Decentralised Execution",
    left: <Lottie
      className={`decentralJson`}
      animationData={decentralisedExecution}
      loop={true} />,
    right: <FeatureRightContent
      title="Decentralized Execution"
      description={
        <>
          <p>Trades are executed directly on decentralized networks without
            relying on centralized intermediaries, ensuring transparency, security, and user control.
          </p>
          <p>
            No need any manual work by user and our system will find the opportunities
            automatically based on the algorithm using smart contracts.
          </p>
        </>
      }
      buttonText="Learn More"
      navigation='/'
    />,
  },
  {
    keyName: 'tab3',
    name: "Arbitrage Trading",
    left: <Lottie
      animationData={arbitrageTrading}
      className={`arbitrageJson`}
      loop={true} />,
    right: <FeatureRightContent
      title="Arbitrage Trading"
      description={<>
        <p>Arbitrage is the process of exploiting price differences of the same asset across
          different markets. In the case of DeFi, this might involve identifying price
          discrepancies between decentralised exchanges (DEXs) such as Uniswap, Sushiswap,
          etc.
        </p>
      </>}
      buttonText="Learn More"
      navigation='/'
    />,
  },
  ])
  const [activeTab, setActiveTab] = useState("tab1");
  const [transitioning, setTransitioning] = useState(false);
  const [nextTab, setNextTab] = useState(null);

  const router = useRouter()

  const handleTabClick = (tab) => {
    if (tab === activeTab || transitioning) return;

    setTransitioning(true);
    setNextTab(tab);

    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
    }, 500);
  };

  const handleDashboardNavigate = () => {
    router.push('/dashboard')
  }

  const getSectionClass = (side) => {
    if (!transitioning) return `${styles.featureSection} ${styles.slideUp}`;
    return side === "left"
      ? `${styles.featureSection} ${styles.slideLeft}`
      : `${styles.featureSection} ${styles.slideRight}`;
  };

  return (
    <div>
      <Header />

      <section className={styles.banner}>
        <div className='container custom-container h-100'>
          <div className={styles.bannerCard}>
            <div className='row'>
              <div className='col-md-6 d-flex align-items-center'>
                <div className={styles.bannerLeftContent}>
                  <p className={styles.bannerTitle}>
                    The Future of <span> Crypto Trading</span> Is Here
                  </p>
                  <p className={styles.bannerDesc}>
                    Experience crypto like never before — fast, secure, and built for serious traders and beginners alike.
                  </p>
                  <p className={`${styles.bannerDesc} mt-4`}>
                    Step into a new era of digital finance with a platform built for speed, security, and simplicity. Whether you're a seasoned investor or just starting out, our cutting-edge tools and intuitive design make trading crypto effortless.
                  </p>

                  <button className='themeBtn mt-4 mt-xxl-5' onClick={handleDashboardNavigate}>
                    Go to Dashboard
                  </button>
                </div>
              </div>
              <div className='col-md-6 mt-5 mt-md-0'>
                <Lottie
                  animationData={bannerJson}
                  className=""
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <ImgComponent src={Images.featureCoinOne} alt="coin" className={styles.coinOne} />
        <ImgComponent src={Images.featureCoinTwo} alt="coin" className={styles.coinTwo} />

        <div className='container custom-container h-100'>
          <div className={styles.featuresInfo}>
            <p className={styles.featuresTitle}>
              Features Covered under the trading bot
            </p>
            <p className={styles.featuresDesc}>
              "Comprehensive suite of automated trading features including strategy customization, risk management, real-time analytics, and multi-exchange support."
            </p>

            <div className={`${styles.tabContainer} mt-5`}>
              <div className={styles.tabButtons}>
                {tabData.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => handleTabClick(tab?.keyName)}
                    className={tab?.keyName === activeTab ? styles.active : ""}>
                    {tab?.name}
                  </button>
                ))}
              </div>

              <div className={styles.tabContentWrapper}>
                {!transitioning ? (
                  <div className={`${styles.tabContent} ${styles.slideUp}`}>
                    <div className={`${styles.featureSection} ${styles.left}`}>
                      {tabData.find((item) => item.keyName == activeTab)?.left}
                    </div>
                    <div className={`${styles.featureSection} ${styles.right}`}>
                      {tabData.find((item) => item.keyName == activeTab)?.right}
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.tabContent} ${styles.transitioning}`}>
                    <div className={getSectionClass("left")}>
                      {tabData.find((item) => item.keyName == activeTab)?.left}
                    </div>
                    <div className={getSectionClass("right")}>
                      {tabData.find((item) => item.keyName == activeTab)?.right}
                    </div>
                  </div>

                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.optimize}>
        <Lottie
          animationData={arbBot}
          className="optimizeJson"
          loop={true}
        />
        <div className='container custom-container h-100'>
          <div className={styles.optimizeCard}>

            <p className={styles.optimizeTitle}>
              Our MEV Optimization Techniques
            </p>
            <p className={styles.optimizeDesc}>
              Step into a new era of digital finance with a platform built for speed, security, and simplicity. Whether you're a seasoned investor or just starting out, our cutting-edge tools and intuitive design make trading crypto effortless.
            </p>

            <div className={styles.optimizeLists}>
              <div className={`${styles.optimizeSingleList} ${styles.active}`}>
                Using Flashbots for Private Transaction Submission
              </div>
              <div className={`${styles.optimizeSingleList} `}>
                Priority Gas Auctions (PGAs)
              </div>
              <div className={`${styles.optimizeSingleList} `}>
                Flashbot's Searcher Infrastructure
              </div>
              <div className={`${styles.optimizeSingleList} `}>
                Time-locked Transactions (Avoiding Front-running by Timing)
              </div>
              <div className={`${styles.optimizeSingleList} `}>
                Using Layer 2 (L2) Solutions for Faster Transaction Finality
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />




    </div>
  )
}

export default Landing
