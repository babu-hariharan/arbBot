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
            name: 'Symbol',
            selector: row => row.symbol,
            align: "left",
            width: "200px",
        },
        {
            name: 'Difference',
            selector: row => row.difference,
            align: "left",
            width: "300px",
        },
        {
            name: 'Gains',
            selector: row => row.gains,
            align: "left",
            width: "400px",
        },
        {
            name: "Status",
            align: "left",
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
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
        {
            symbol: 'USDT-ANKR',
            difference: '84.62072587737649 %',
            gains: '0.000000306995195406 ANKR',
        },
    ]

    return (
        <div className={styles.tableCard}>
            <div className={`${styles.tableCardHeader} `}>
                <p className={styles.tableHeaderTitle}>   Schedule History</p>
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
