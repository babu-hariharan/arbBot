"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'
import Select from "react-select";



/** LOCAL FILE IMPORT */

import styles from '@/styles/authPages.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';


/** CODE START */


const page = () => {

    const chainIDoptions = [
        {
            label: "ID One",
            value: "idOne",
        },
        {
            label: "ID Two",
            value: "idTwo",
        },
        {
            label: "ID Three",
            value: "idThree",
        },
        {
            label: "ID Four",
            value: "idFour",
        },

    ];

    return (
        <div className={styles.tableCard}>
            <div className={`${styles.tableCardHeader} ${styles.tableHeaderBetween}`}>
                <p className={styles.tableHeaderTitle}>Add Token</p>
                <button className={`secondary-btn`}>
                    Back
                </button>
            </div>

            <div className={`${styles.tableCardBody} mt-3`}>
                <form className={styles.formContainer}>
                    <div className={styles.singleForm}>
                        <label className={styles.formLabel}>
                            Address
                        </label>
                        <div className={styles.formControlWrapper}>
                            <input className='primaryInput' placeholder='Enter token address' />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}
                    </div>
                    <div className={`${styles.singleForm} mt-3`}>
                        <label className={styles.formLabel}>
                            Chain ID
                        </label>
                        <div className={styles.formControlWrapper}>
                            <Select
                                options={chainIDoptions}
                                isSearchable={false}
                                placeholder="Select Token"
                                classNamePrefix="react-select__one"
                            // name="chain"
                            // onChange={(e) => handleSelect(e, "chain")}
                            // value={
                            //     !isEmpty(formValue?.chain)
                            //         ? networkOption.find(
                            //             (val) => val.value == formValue?.chain
                            //         )
                            //         : ""
                            // }
                            />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}

                    </div>
                    <div className={`${styles.singleForm} mt-3`}>
                        <label className={styles.formLabel}>
                            Name
                        </label>
                        <div className={styles.formControlWrapper}>
                            <input className='primaryInput' placeholder='Enter token name' />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}
                    </div>
                    <div className={`${styles.singleForm} mt-3`}>
                        <label className={styles.formLabel}>
                            Symbol
                        </label>
                        <div className={styles.formControlWrapper}>
                            <input className='primaryInput' placeholder='Enter token symbol' />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}
                    </div>
                    <div className={`${styles.singleForm} mt-3`}>
                        <label className={styles.formLabel}>
                            Decimals
                        </label>
                        <div className={styles.formControlWrapper}>
                            <input className='primaryInput' placeholder='Enter token decimals' />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}
                    </div>
                    <div className={`${styles.singleForm} mt-3`}>
                        <label className={styles.formLabel}>
                            Logo URL
                        </label>
                        <div className={styles.formControlWrapper}>
                            <input className='primaryInput' placeholder='Enter token logo URL' />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}
                    </div>
                    <div className={`${styles.singleForm} mt-3`}>
                        <label className={styles.formLabel}>
                            Name
                        </label>
                        <div className={styles.formControlWrapper}>
                            <input className='primaryInput' placeholder='Enter token name' />
                        </div>
                        {/* <p className={styles.formError}>Error</p> */}
                    </div>

                    <div className='mt-4'>
                        <button className='themeBtn'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default page
