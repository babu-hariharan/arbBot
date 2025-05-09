




"use client"

/** PACKAGE IMPORT */

import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

/** LOCAL FILE IMPORT */

import styles from '@/styles/modals.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';
import CurrencyPairCard from '@/components/CurrencyPairCard';


/** CODE START */


const ProfitEstimationModal = (props) => {

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
                className={styles.modalPrimary}
            >

                <Modal.Header className={styles.modalPrimaryHeader}>
                    <button
                        className={styles.modalCloseButton}
                        onClick={handleClose}>
                        <IoClose />
                    </button>
                    {/* <h4 className="mb-0 modal_title">Withdrawal Details Confirmation</h4> */}
                </Modal.Header>
                <Modal.Body className={styles.modalPrimaryBody}>
                    <div className={styles.currencyPairCard}>
                        <div className={styles.currencyPairs}>
                            <div className={styles.singlePairInfo}>
                                <ImgComponent src={Images.currencyOne} alt="currency" className={styles.currencyImage} />
                                <p className={styles.pairName}>
                                    WBNB
                                </p>
                            </div>

                            <div className={styles.pairConnection}>
                                <ImgComponent src={Images.transfer} alt="transfer" className={styles.transferIcon} />
                            </div>
                            <div className={styles.singlePairInfo}>
                                <ImgComponent src={Images.currencyOne} alt="currency" className={styles.currencyImage} />
                                <p className={styles.pairName}>
                                    WBNB
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        <div className="row mt-4 align-items-center">
                            <div className="col-sm-6">
                                <label className={styles.modalLabel}>Borrow</label>
                            </div>

                            <div className="col-sm-6 mt-2 mt-sm-0">
                                <input className='primaryInput' />
                            </div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-sm-6">
                                <label className={styles.modalLabel}>Estimated Profit</label>
                            </div>

                            <div className="col-sm-6 mt-2 mt-sm-0">
                                <div className="input-badge">
                                    <input className='' />
                                    <div className="input-badge__symbol">%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className={styles.modalPrimaryFooter}>
                    <div className={styles.footerActions}>
                        <button className="themeBtn" onClick={handleClose}>
                            Confirm
                        </button>
                        <button className="secondary-btn" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProfitEstimationModal
