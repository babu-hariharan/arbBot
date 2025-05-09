


'use client'

/** PACKAGE IMPORT */

import React from 'react'

/** LOCAL FILE IMPORT */

// import styles from '@/styles/landing.module.css'
import styles from '@/styles/landing.module.css'

const FeatureRightContent = (props) => {

    const { title, description, buttonText } = props
    return (
        <div className=''>
            <p className={styles.featureContentTitle}>
                {title}
            </p>
            <div className={styles.featureContentDesc}>
                {description}
            </div>

            <div className={`${styles.featureButtonContainer} mt-4 mt-sm-5`}>
                <button className={`themeBtn `}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default FeatureRightContent
