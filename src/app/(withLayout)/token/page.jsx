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
import { useRouter } from 'next/navigation';


/** CODE START */

const page = () => {

    const router = useRouter()


    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            align: "left",
        },
        {
            name: 'Address',
            className: "name w-175",
            selector: row => row.address,
            align: "left",
            width: "200px",
        },
        {
            name: 'Symbol',
            selector: row => row.symbol,
            align: "left",
        },
        {
            name: 'Decimal',
            selector: row => row.decimal,
            align: "left",
        },
        {
            name: 'logo URL',
            selector: row => row.logoUrl,
            align: "left",
            width: "200px",
        },
        {
            name: "Action",
            className: "name w-175",
            align: "left",
            selector: (record) => {
                return (
                    <div className={`table-actions`}>
                        <button className={`table-actions__btn`}>
                            <ImgComponent src={Images.edit} alt="edit" className={`table-actions__icon`} />
                        </button>
                        <button className={`table-actions__btn`}>
                            <ImgComponent src={Images.delete} alt="delete" className={`table-actions__icon`} />
                        </button>
                    </div>

                );
            },
        },
    ];

    const data = [
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },
        {
            name: 'Nexo (PoS)',
            address: '0x41b3966....AEAE9a48',
            symbol: 'NEXO',
            decimal: '18',
            logoUrl: 'https://b....F8015CE3',
        },

    ]

    return (
        <div className={styles.tableCard}>
            <div className={`${styles.tableCardHeader} ${styles.tableHeaderBetween}`}>
                <p className={styles.tableHeaderTitle}>Token</p>
                <button className={`themeBtn`} onClick={() => router.push('/add-token')}>
                    <span className='me-2'>
                        <FaPlus fontSize={17} className='mb-1' />
                    </span>
                    Add Token
                </button>
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
