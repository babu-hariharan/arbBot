
"use client"
/** PACKAGE IMPORT */

import React, { useState } from 'react'

/** LOCAL FILE IMPORT */

import styles from '@/styles/header.module.css'
import Images from '@/app/Images'
import ImgComponent from './ImgComponent'
import { usePathname, useRouter } from 'next/navigation'
import { useGlobalContext } from '@/provider/GlobalProvider'
import Link from 'next/link'
import ConnectWallet from './modal/ConnectWallet'


/** CODE START */

const Header = () => {

    const route = useRouter()
    const { isAuthLayout } = useGlobalContext()
    const [showConnectWallet, setShowConnectWallet] = useState(false)

    const handleShowConnectWallet = () => {
        setShowConnectWallet(true)

    }
    const handleCloseConnectWallet = () => {
        setShowConnectWallet(false)
        route.push('/dashboard')
    }
    console.log('isAuthLayoussst', isAuthLayout)

    const handleHomeNavigate = () => {
        route.push('/')
    }

    return (

        <>
            {/* modal import - start */}

            <ConnectWallet show={showConnectWallet} handleClose={handleCloseConnectWallet} />

            {/* modal import - end */}

            <header className={`${styles.header} ${isAuthLayout ? styles.authHeader : ''}`}>
                <div className={`h-100 ${isAuthLayout ? styles.authWidth : "custom-container container"}`}>
                    <div className={styles.headerContainer}>
                        <div style={{ cursor: "pointer" }}>
                            <ImgComponent src={isAuthLayout ? Images.whiteLogo : Images.logo} alt="logo" className={styles.logo} onClick={handleHomeNavigate} />
                        </div>

                        <div className={styles.headerRight}>
                            <button className={`themeBtn`} onClick={handleShowConnectWallet}>
                                Wallet Connect
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
