'use client'

import { $allResults } from '@/atoms/global'
import { getAverageCGPAandCredits } from '@/utils/helpers'
import { useAtomValue } from 'jotai'
import styles from './style.module.css'

export default function CGPABox() {
    const allResults = useAtomValue($allResults)
    const { totalCreditHrs, totalAverageCGPA } = getAverageCGPAandCredits(allResults)

    return (
        <div className={styles.cgpaContainer}>
            <div className={styles.creditItem}>
                <span className={styles.creditItemTitle}>Total Credit</span>
                <span className={styles.creditItemContent}>{totalCreditHrs}</span>
            </div>
            <div className={styles.cgpaItem}>
                <span className={styles.cgpaItemTitle}>CGPA</span>
                <span className={styles.cgpaItemContent}>{totalAverageCGPA}</span>
            </div>
        </div>
    )
}