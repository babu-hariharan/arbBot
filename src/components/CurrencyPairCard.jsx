"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'

/** LOCAL FILE IMPORT */

import styles from '@/styles/authPages.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';
import ProfitEstimationModal from './modal/ProfitEstimationModal';


/** CODE START */

const CurrencyPairCard = () => {

    const [showProfitEstimation, setShowProfitEstimation] = useState(false)

    const handleShowProfitEstimation = () => {
        setShowProfitEstimation(true)
    }

    const handleCloseProfitEstimation = () => {
        setShowProfitEstimation(false)
    }
    return (

        <div>

            {/* modal import - start */}

            <ProfitEstimationModal
                show={showProfitEstimation}
                handleClose={handleCloseProfitEstimation} />

            {/* modal import - end */}

            <div className={styles.cardSm}>


                <div className={styles.currencyPairs}>
                    <div className={styles.singlePairInfo}>
                        <ImgComponent src={Images.currencyOne} alt="currency" className={styles.currencyImage} />
                        <p className={styles.pairName}>
                            WBNB
                        </p>
                    </div>

                    <div className={styles.pairConnection}>+</div>
                    <div className={styles.singlePairInfo}>
                        <ImgComponent src={Images.currencyOne} alt="currency" className={styles.currencyImage} />
                        <p className={styles.pairName}>
                            WBNB
                        </p>
                    </div>
                </div>

                <button className={styles.currencyPairButton} onClick={handleShowProfitEstimation}>
                    Profit -  61.06014052767238 %
                </button>
            </div>
        </div>
    )
}

export default CurrencyPairCard
