
"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiCloseFill } from "react-icons/ri";

/** LOCAL FILE IMPORT */

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import styles from '@/styles/authLayout.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '../Images';
import Footer from '@/components/Footer';


/** CODE START */

const layout = ({ children }) => {

    const [showSidebarCanva, setShowSidebarCanva] = useState(false)

    const hanldeSidebarCanva = () => {
        setShowSidebarCanva(!showSidebarCanva)
    }


    return (
        <div className={`${styles.layout} authLayoutContainer`}>
            <Header />
            <div className={styles.layoutBody}>
                <div className={`${styles.layoutSidebar} d-none d-lg-block`}>
                    <Sidebar />
                </div>
                <div className={styles.layoutMain}>
                    {children}
                </div>
            </div>

            <Footer />

            <button className={`${styles.sidebarCanvaButton} d-lg-none`} onClick={hanldeSidebarCanva}>
                <IoIosArrowForward />
            </button>

            <Offcanvas
                show={showSidebarCanva}
                onHide={hanldeSidebarCanva}
                className={styles.customCanva}>
                <Offcanvas.Header className={styles.customCanvaHeader}>
                    <ImgComponent src={Images.whiteLogo} alt="logo" className={styles.logo} />

                    <button
                        onClick={hanldeSidebarCanva}
                        className={styles.customCanvaClose}>
                        <RiCloseFill />
                    </button>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.customCanvaBody}>
                    <div className={`${styles.layoutSidebar} d-lg-none`}>
                        <Sidebar />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default layout
