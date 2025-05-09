
"use client"

/** PACKAGE IMPORT */

import React from 'react'

/** LOCAL FILE IMPORT */

import styles from '@/styles/footer.module.css'
import Images from '@/app/Images'
import ImgComponent from './ImgComponent'
import Link from 'next/link'
import { useGlobalContext } from '@/provider/GlobalProvider'

const Footer = () => {

    const { isAuthLayout } = useGlobalContext()
    return (
        <div className={styles.footer}>
            <div className={`h-100 ${isAuthLayout ? styles.authWidth : "custom-container container"}`}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLeft}>
                        <ImgComponent src={Images.whiteLogo} alt="logo" className={styles.logo} />
                        <p className={styles.logoInfo}>
                            Copyright © 2025 ArB BoT
                        </p>
                        <p className={styles.logoInfo}>
                            All rights reserved
                        </p>
                        <div className={styles.socialContainer}>
                            <a href="" >
                                <ImgComponent src={Images.instagram} alt="instagram" className={styles.socialIcons} />
                            </a>
                            <a href="" >
                                <ImgComponent src={Images.web} alt="web" className={styles.socialIcons} />
                            </a>
                            <a href="" >
                                <ImgComponent src={Images.twitter} alt="twitter" className={styles.socialIcons} />
                            </a>
                            <a href="" >
                                <ImgComponent src={Images.youtube} alt="youtube" className={styles.socialIcons} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.rightContainer}>
                            <p className={styles.titleBold}>
                                Company
                            </p>
                            <div className={styles.linksContainer}>
                                <Link href='/' className={styles.links}>Dapp</Link>
                                <Link href='/' className={styles.links}>Transaction History</Link>
                                <Link href='/' className={styles.links}>Market Opportunities</Link>
                                <Link href='/' className={styles.links}>Schedule History</Link>
                            </div>

                        </div>
                        <div className={styles.rightContainer}>
                            <p className={styles.titleBold}>
                                Stay up to date
                            </p>
                            <div className={styles.emailSender}>
                                <input type="text" placeholder='Your email address' />
                                <button>
                                    <ImgComponent src={Images.send} alt="send" className={styles.sender} />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
