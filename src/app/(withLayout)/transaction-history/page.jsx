"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'
import DataTable from "react-data-table-component";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import { FaPlus } from "react-icons/fa6";



/** LOCAL FILE IMPORT */

import styles from '@/styles/authPages.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';


/** CODE START */

const page = () => {

    const columns = [
        {
            name: 'Address',
            selector: row => row.address,
            align: "left",
            width: "200px",
        },
        {
            name: 'Transaction Hash',
            selector: row => row.transactionHash,
            align: "left",
            width: "300px",
        },
        {
            name: 'Pairs',
            selector: row => row.pairs,
            align: "left",
            width: "200px",
            selector: (record) => {
                return (
                    <div className={`pairsCombiners`}>
                        <ImgComponent src={Images.currencyOne} alt="currency one" className={`table-currencyPairs__one`} />
                        <ImgComponent src={Images.currencyTwo} alt="currency two" className={`table-currencyPairs__two`} />
                    </div>
                );
            },
        },
        {
            name: 'Profit Amount',
            selector: row => row.profitAmount,
            align: "left",
            width: "200px",
        },
        {
            name: 'Profit Percentage',
            selector: row => row.profitPercentage,
            align: "left",
            width: "200px",
        },
        {
            name: 'Transaction Status',
            selector: row => row.transactionStatus,
            align: "left",
            width: "200px",
            selector: (record) => {
                return (
                    <p className={`table-status approved`}>
                        Approved
                    </p>
                );
            },
        },
    ];

    const data = [
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },
        {
            symbol: 'USDT-ANKR',
            address: '84.62072587737649 %',
            transactionHash: '0.000000306995195406 ANKR',
            profitAmount: '0.25555 $',
            profitPercentage: '78 %',
        },

    ]

    return (
        <div className={styles.tableCard}>
            <div className={`${styles.tableCardHeader} `}>
                <p className={styles.tableHeaderTitle}>Transaction History</p>
            </div>

            <div className={`${styles.tableCardBody} mt-3`}>
                <div className="custom-table__primary">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        paginationPerPage={10}
                        paginationRowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
                        // customStyles={customStyles}
                        className="dataTableComponent"
                    // sortIcon={<BiSort style={{ marginLeft: "0.5rem", color: "#000" }} />}
                    />
                </div>
            </div>

        </div>
    )
}

export default page
