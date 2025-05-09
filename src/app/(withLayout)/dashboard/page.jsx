"use client"

/** PACKAGE IMPORT */

import React, { useState } from 'react'
import { TiArrowSortedUp } from "react-icons/ti";
import Select from "react-select";

/** LOCAL FILE IMPORT */

import styles from '@/styles/authPages.module.css'
import ImgComponent from '@/components/ImgComponent';
import Images from '@/app/Images';
import CurrencyPairCard from '@/components/CurrencyPairCard';


/** CODE START */

const page = () => {

    const tokenOption = [
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
        {
            label: "Token Four",
            value: "tokenFour",
        },
    ];


    return (
        <div className={styles.dashGrid}>
            <div className={styles.noOfTrade}>
                <div className={styles.innerCards}>
                    <div className={styles.cardHeader}>
                        <div className={styles.imageWrapperSm}>
                            <ImgComponent src={Images.noOfTrade} alt="No of trade" className={styles.profileImage} />
                        </div>
                        <p className={styles.titleSm}>No of Trade</p>
                    </div>
                    <div className={styles.countInfo}>
                        <div className={styles.countInfoLeft}>
                            <p className={styles.countXl}>$ <span>7965.23</span></p>
                            <div className={`${styles.percentValue} ${styles.profit} `}>
                                +0.24 %<span>
                                    <TiArrowSortedUp />
                                </span>
                            </div>
                        </div>
                        <div className={styles.graphShow}>
                            <ImgComponent src={Images.graph} alt="Graph" className={styles.profileImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.totalTrade}>
                <div className={styles.innerCards}>
                    <div className={styles.cardHeader}>
                        <div className={styles.imageWrapperSm}>
                            <ImgComponent src={Images.totalTradeVolume} alt="Total trade volume" className={styles.profileImage} />
                        </div>
                        <p className={styles.titleSm}>Total Trade Volume</p>
                    </div>
                    <div className={styles.countInfo}>
                        <div className={styles.countInfoLeft}>
                            <p className={styles.countXl}>$ <span>7965.23</span></p>
                            <div className={`${styles.percentValue} ${styles.profit} `}>
                                +0.24 %<span>
                                    <TiArrowSortedUp />
                                </span>
                            </div>
                        </div>
                        <div className={styles.graphShow}>
                            <ImgComponent src={Images.graph} alt="Graph" className={styles.profileImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.totalEarned}>
                <div className={styles.innerCards}>
                    <div className={styles.cardHeader}>
                        <div className={styles.imageWrapperSm}>
                            <ImgComponent src={Images.totalEarned} alt="Total Earned" className={styles.profileImage} />
                        </div>
                        <p className={styles.titleSm}>Total Earned</p>
                    </div>
                    <div className={styles.countInfo}>
                        <div className={styles.countInfoLeft}>
                            <p className={styles.countXl}>$ <span>7965.23</span></p>
                            <div className={`${styles.percentValue} ${styles.profit} `}>
                                +0.24 %<span>
                                    <TiArrowSortedUp />
                                </span>
                            </div>
                        </div>
                        <div className={styles.graphShow}>
                            <ImgComponent src={Images.graph} alt="Graph" className={styles.profileImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.userStats}>
                <div className={styles.innerCards}>
                    <p className={styles.cardTitle}>
                        User Stats
                    </p>

                    <div className={styles.statsCardsWrapper}>
                        <div className={styles.cardSm}>
                            <p className={styles.cardSmTitle}>
                                Total Profit
                            </p>
                            <p className={`${styles.cardSmValue} ${styles.profit}`}>
                                $ 7965.25
                            </p>
                        </div>
                        <div className={styles.cardSm}>
                            <p className={styles.cardSmTitle}>
                                Total Volume
                            </p>
                            <p className={`${styles.cardSmValue} ${styles.profit}`}>
                                $ 7965.25
                            </p>
                        </div>
                        <div className={styles.cardSm}>
                            <p className={styles.cardSmTitle}>
                                Total Flash loan granted
                            </p>
                            <p className={`${styles.cardSmValue} ${styles.profit}`}>
                                $ 7965.25
                            </p>
                        </div>
                        <div className={styles.cardSm}>
                            <p className={styles.cardSmTitle}>
                                Limit Left
                            </p>
                            <p className={`${styles.cardSmValue} ${styles.profit}`}>
                                $ 7965.25
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.flashLoan}>
                <div className={`${styles.innerCards} h-100`}>
                    <p className={styles.cardTitle}>
                        Flash Loan
                    </p>

                    <div className={styles.flashLoanBody}>
                        <ImgComponent src={Images.currencyOne} alt="logo" className={styles.currencyImage} />
                        <p className={styles.cardSmTitle}>
                            Binance Mainnet
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.marketOpp}>
                <div className={`${styles.innerCards} h-100`}>
                    <div className={styles.headerSpaceBetween}>
                        <p className={styles.cardTitle}>
                            Market Opportunities
                        </p>
                        <button className={styles.cardTitleButton}>View All</button>
                    </div>

                    <div className={styles.marketOppBody}>
                        <CurrencyPairCard />
                        <CurrencyPairCard />
                    </div>


                </div>
            </div>
            <div className={styles.arbitrageDetails}>
                <div className={`${styles.innerCards} h-100`}>
                    <p className={styles.cardTitle}>
                        Arbitrage Details
                    </p>

                    <div className={styles.arbitageDetailsCardBody}>
                        <div className={`row mx-auto ${styles.noWrapRow}`}>
                            <div className='col-10 col-10 col-sm-5 col-md-10 col-xl-5  px-0 '>
                                <p className={styles.cardXsTitle}>
                                    DEX
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-start text-sm-end text-md-start text-xl-end`}>
                                    PancakeSwapV2-ApeSwap
                                </p>
                            </div>
                        </div>
                        <div className={`row mx-auto mt-3 ${styles.noWrapRow}`}>
                            <div className='col-10 col-sm-5 col-md-10 col-xl-5  px-0'>
                                <p className={styles.cardXsTitle}>
                                    Swap Tokens
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-start text-sm-end text-md-start text-xl-end`}>
                                    BAE_WBNB
                                </p>
                            </div>
                        </div>
                        <div className={`row mx-auto mt-3 ${styles.noWrapRow}`}>
                            <div className='col-10 col-sm-5 col-md-10 col-xl-5  px-0'>
                                <p className={styles.cardXsTitle}>
                                    Profit Percent(%)
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-start text-sm-end text-md-start text-xl-end`}>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className={`row mx-auto mt-3 ${styles.noWrapRow}`}>
                            <div className='col-10 col-sm-5 col-md-10 col-xl-5  px-0'>
                                <p className={styles.cardXsTitle}>
                                    Profit Amount
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-start text-sm-end text-md-start text-xl-end`}>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className={`row mx-auto mt-3 ${styles.noWrapRow}`}>
                            <div className='col-10 col-sm-5 col-md-10 col-xl-5  px-0'>
                                <p className={styles.cardXsTitle}>
                                    Payout Token
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-start text-sm-end text-md-start text-xl-end`}>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className={`row mx-auto mt-3 ${styles.noWrapRow}`}>
                            <div className='col-10 col-sm-5 col-md-10 col-xl-5  px-0'>
                                <p className={styles.cardXsTitle}>
                                    Profit Amount (USD)
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-start text-sm-end text-md-start text-xl-end `}>
                                    $ 0
                                </p>
                            </div>
                        </div>
                        <div className={`row mx-auto mt-3 ${styles.noWrapRow}`}>
                            <div className='col-10 col-sm-5 col-md-10 col-xl-5  px-0'>
                                <p className={styles.cardXsTitle}>
                                    Platform Fee
                                </p>
                            </div>
                            <div className='col-1'>
                                <p className={styles.cardSmTitle}>
                                    :
                                </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-12 col-xl-6 px-0 d-flex justify-content-sm-end justify-content-md-start justify-content-xl-end'>
                                <p className={`${styles.cardXsValue} text-end`}>
                                    0 %
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.borrow}>
                <div className={styles.innerCards}>
                    <div className={styles.headerSpaceBetween}>
                        <p className={styles.cardTitle}>
                            Borrow
                        </p>
                        <div className={styles.currencyDetailsHighlight}>
                            <p>USD Price <span>-</span> <span>0 USD</span></p>
                        </div>

                    </div>

                    <div className={styles.borrowBody}>
                        <div className="row mx-auto align-items-center">
                            <div className="col-sm-6 ps-0">
                                <div style={{ maxWidth: "200px" }}>
                                    <Select
                                        options={tokenOption}
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
                            </div>
                            <div className='col-sm-6 ps-0 ps-sm-2 pe-0 d-flex justify-content-sm-end mt-3 mt-sm-0'>
                                <div style={{ maxWidth: "200px" }}>
                                    <input className='primaryInput' placeholder='Change Quantity' />
                                </div>
                            </div>
                        </div>
                        <div className="row mx-auto mt-4 align-items-center">
                            <div className="col-sm-6 ps-0">
                                <p className={styles.cardSmTitle}>
                                    Slipage
                                </p>
                            </div>
                            <div className='col-sm-6 ps-0 ps-sm-2 pe-0 d-flex justify-content-sm-end mt-3 mt-sm-0'>
                                <div style={{ maxWidth: "200px" }}>
                                    <input className='primaryInput' placeholder='Change Quantity' />
                                </div>
                            </div>
                        </div>
                        <div className="row mx-auto mt-4 align-items-center">
                            <div className="col-sm-6 ps-0">
                                <p className={styles.cardSmTitle}>
                                    Borrowed Asset
                                </p>
                            </div>
                            <div className='col-sm-6 ps-0 ps-sm-2 pe-0 d-flex justify-content-sm-end mt-3 mt-sm-0'>
                                <p className={`${styles.cardXsValue} text-end`}>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className="row mx-auto mt-4 align-items-center">
                            <div className="col-sm-6 ps-0">
                                <p className={styles.cardSmTitle}>
                                    Amount
                                </p>
                            </div>
                            <div className='col-sm-6 ps-0 ps-sm-2 pe-0 d-flex justify-content-sm-end mt-3 mt-sm-0'>
                                <p className={`${styles.cardXsValue} text-end`}>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className="row mx-auto mt-4 align-items-center">
                            <div className="col-sm-6 ps-0">
                                <p className={styles.cardSmTitle}>
                                    Difference (%)
                                </p>
                            </div>
                            <div className='col-sm-6 ps-0 ps-sm-2 pe-0 d-flex justify-content-sm-end mt-3 mt-sm-0'>
                                <p className={`${styles.cardXsValue} text-end`}>
                                    -
                                </p>
                            </div>
                        </div>
                        <div className="row mx-auto mt-4 align-items-center">
                            <div className="col-sm-6 ps-0">
                                <p className={styles.cardSmTitle}>
                                    Payback Amount
                                </p>
                            </div>
                            <div className='col-sm-6 ps-0 ps-sm-2 pe-0 d-flex justify-content-sm-end mt-3 mt-sm-0'>
                                <p className={`${styles.cardXsValue} text-end`}>
                                    -
                                </p>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <button className={`themeBtn`}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page
