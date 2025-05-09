"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'

/** LOCAL FILE IMPORT */

import styles from '@/styles/authPages.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';
import CurrencyPairCard from '@/components/CurrencyPairCard';


/** CODE START */

const page = () => {

    const [list, setList] = useState([
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        },
        {
            id: 9
        },
        {
            id: 10
        },
        {
            id: 11
        },
        {
            id: 12
        },
        {
            id: 13
        },
        {
            id: 14
        },
        {
            id: 15
        },
        {
            id: 16
        },
        {
            id: 17
        },
        {
            id: 18
        },
        {
            id: 19
        },
        {
            id: 20
        },
    ])
    return (
        <div className={styles.tableCard}>
            <div className={`${styles.tableCardHeader}`}>
                <p className={styles.tableHeaderTitle}>Market Opportunities</p>
            </div>

            <div className={`${styles.marketOppContainer} mt-3`}>
                {list.map((item, i) =>
                (
                    <div key={i}>
                        <CurrencyPairCard />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
