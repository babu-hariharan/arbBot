




"use client"

/** PACKAGE IMPORT */

import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


/** LOCAL FILE IMPORT */

import styles from '@/styles/modals.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';
import CurrencyPairCard from '@/components/CurrencyPairCard';


/** CODE START */


const ConnectWallet = (props) => {

    const { show, handleClose } = props

    return (
        <div>
            <Modal
                centered
                size="md"
                backdrop="static"
                show={show}
                // show={true}
                onHide={handleClose}
                className={styles.modalSecondary}
            >

                <Modal.Header className={styles.modalSecondaryHeader}>
                    <button
                        className={styles.modalCloseButton}
                        onClick={handleClose}>
                        <IoClose />
                    </button>
                    {/* <h4 className="mb-0 modal_title">Withdrawal Details Confirmation</h4> */}
                </Modal.Header>
                <Modal.Body className={styles.modalSecondaryBody}>
                    <div className={styles.connectOptions}>
                        <button className={styles.walletConnectButton} onClick={handleClose}>
                            <div className={styles.left}>
                                <ImgComponent src={Images.metamask} alt="metamask" className={styles.walletIcon} />
                                <p className={styles.name}>Meta Mask</p>
                            </div>

                            <div className={styles.right}>
                                <IoIosArrowForward />
                            </div>
                        </button>
                        <button className={styles.walletConnectButton} onClick={handleClose}>
                            <div className={styles.left}>
                                <ImgComponent src={Images.trustwallet} alt="Trust Wallet" className={styles.walletIcon} />
                                <p className={styles.name}>Trust Wallet</p>
                            </div>

                            <div className={styles.right}>
                                <IoIosArrowForward />
                            </div>
                        </button>
                        <button className={styles.walletConnectButton} onClick={handleClose}>
                            <div className={styles.left}>
                                <ImgComponent src={Images.walletconnect} alt="Wallet Connect" className={styles.walletIcon} />
                                <p className={styles.name}>Wallet Connect</p>
                            </div>

                            <div className={styles.right}>
                                <IoIosArrowForward />
                            </div>
                        </button>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ConnectWallet
