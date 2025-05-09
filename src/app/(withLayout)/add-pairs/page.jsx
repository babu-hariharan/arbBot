"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'
import Select from "react-select";
import { FaPlus } from "react-icons/fa6";


/** LOCAL FILE IMPORT */

import styles from '@/styles/authPages.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';


/** CODE START */


const page = () => {

    const addressOptionOne = [
        {
            label: "Token One",
            value: "tokenOne",
        },
        {
            label: "Token Two",
            value: "tokenTwo",
        },
        {
            label: "Token Three",
            value: "tokenThree",
        },
    ];
    const addressOptionTwo = [
        {
            label: "Token One",
            value: "tokenOne",
        },
        {
            label: "Token Two",
            value: "tokenTwo",
        },
        {
            label: "Token Three",
            value: "tokenThree",
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
                <div className={styles.formsFlex}>
                    <form className={styles.formContainer}>
                        <div className={`${styles.singleForm}`}>
                            <label className={styles.formLabel}>
                                Token Address 1
                            </label>
                            <div className={styles.formControlWrapper}>
                                <Select
                                    options={addressOptionOne}
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
                    </form>
                    <div className={styles.formAdd}>
                        <FaPlus fontSize={17} />
                    </div>
                    <form className={styles.formContainer}>
                        <div className={`${styles.singleForm}`}>
                            <label className={styles.formLabel}>
                                Token Address 1
                            </label>
                            <div className={styles.formControlWrapper}>
                                <Select
                                    options={addressOptionTwo}
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
                    </form>
                </div>


                <div className='mt-4'>
                    <button className='themeBtn'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default page
