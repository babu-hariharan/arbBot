"use client"

/** PACKAGE IMPORT */

import React, { useEffect, useRef, useState } from 'react'

/** LOCAL FILE IMPORT */

import styles from '@/styles/sidebar.module.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

/** CODE START */
const Sidebar = () => {

    const userType = 'admin'

    const location = usePathname()
    const observedDiv = useRef(null);
    const router = useRouter()

    const [sidebarTopHeight, setSidebarTopHeight] = useState()


    useEffect(() => {
        if (!observedDiv.current) {
            return;
        }
        const resizeObserver = new ResizeObserver(() => {
            if (observedDiv.current?.offsetHeight) {
                setSidebarTopHeight(observedDiv.current?.offsetHeight);
            }
        });
        resizeObserver.observe(observedDiv.current);
        return function cleanup() {
            resizeObserver.disconnect();
        };
    }, [observedDiv.current]);

    console.log('coinpairsheight', sidebarTopHeight)

    const [menus, setMenus] = useState([
        {
            name: "Dashboard",
            linkTo: '/dashboard',
            viewFor: ['user', 'admin']
        },
        {
            name: "Market Opportunities",
            linkTo: '/market-opportunities',
            viewFor: ['admin']
        },
        {
            name: "Token",
            linkTo: '/token',
            viewFor: ['admin']
        },
        {
            name: "Pairs",
            linkTo: '/pairs',
            viewFor: ['admin',]
        },
        {
            name: "Exchange",
            linkTo: '/exchange',
            viewFor: ['user', 'admin']
        },
        {
            name: "Schedule History",
            linkTo: '/schedule-history',
            viewFor: ['user', , 'admin']
        },
        {
            name: "Transaction History",
            linkTo: '/transaction-history',
            viewFor: ['user', 'admin']
        },
    ])
    return (
        <div className={styles.sidebar} ref={observedDiv}>
            <div className={styles.sidebarTop} >
                <ul style={{ height: `${sidebarTopHeight - 20 - 48 - 15 - 15}px` }}>
                    {menus.map((item, i) => item.viewFor.includes(userType) ? <li key={i}>
                        <Link href={item.linkTo} className={`${location == item.linkTo ? styles.active : ""}`}>{item.name}</Link>
                    </li> : "")}

                </ul>
            </div>
            <div className={styles.sidebarBottom}>
                <button className={styles.logoutBtn} onClick={() => router.push('/')}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar
