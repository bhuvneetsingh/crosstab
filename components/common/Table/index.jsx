import React from 'react'
import styles from './Table.module.scss'
import classNames from "classnames";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import {useTranslation} from "react-i18next";
import mobileMenuIcon_Inactive from "../../../public/icons/layout/mobile/Menu_Dot.svg"
import Link from 'next/link'

const loader = ({src, width, quality}) => {
    return src.includes('?') ? `${src}&w=${width}&q=${quality || 75}` : `${src}?&w=${width}&q=${quality || 75}`
}
const Table = ({
                   header,
                   rows,
                   title,
                   navigationButton,
                   tableStylingClass,
                   isLoading,
                   noContentIcon,
                   noContentTitle,
                   noContentDesc,
                   noContentButtonName,
                   buttonAction,

               }) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.container, tableStylingClass)}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h5 style={{textTransform: 'capitalize'}}>{title}</h5>
                {navigationButton && <Link href={navigationButton.href}>
                    <a href='#'>{navigationButton.title}</a>
                </Link>}
            </div>
            <div className={classNames(styles.table)}>
                <div className={styles.header}>
                    {header.map((headerItem, number) => (
                        <div key={[headerItem, number].join("_")} className={styles.cell}>
                            <div className={styles.title}>
                                {t(headerItem)}
                            </div>
                        </div>
                    ))}
                </div>

                {Object.entries(rows).map(([key,value], rowNumber) => (
                    <div key={['row', rowNumber].join("_")} className={styles.row}>
                            <div key={['rowItem', rowNumber].join("_")}
                                 className={classNames(styles.cell)}>

                                {key && <div className={styles.title}>
                                    {key}
                                    </div>}
                            </div>

                        <div key={['rowItem', rowNumber].join("_")}
                             className={classNames(styles.subRowCollection)}>
                                    {
                                        Object.entries(value).map(([entryKey, entryValue], number) => (
                                            <div className={styles.subRow}>
                                                <div key={['rowItem', rowNumber].join("_")}
                                                     className={classNames(styles.cell)}>
                                                {entryKey}
                                                </div>
                                                {
                                                    Object.keys(entryValue).map(val => (
                                                        <div key={['rowItem', rowNumber].join("_")}
                                                             className={classNames(styles.cell)}>
                                                            {entryValue[val] ? entryValue[val] : 0}
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        ))
                                    }
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table;
