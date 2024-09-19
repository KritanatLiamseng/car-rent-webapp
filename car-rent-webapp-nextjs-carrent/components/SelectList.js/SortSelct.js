import React from 'react'
import styles from '@/styles/Search/sort.module.css'
import sortData from '../data/sortData'

const SortSelct = ({value,onChange}) => {
  return (
    <select value={value} onChange={onChange} className={styles.Select}>
        {sortData.map((sortData,index)=>(
            <option key={index} value={sortData}>
                {sortData}
            </option>
        ))}
    </select>
  )
}

export default SortSelct