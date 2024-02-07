import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io"

import styles from './header.module.css'



export default function Header() {

  const [value, setValue] = useState('')
  const navigate = useNavigate()


  const fromPageSearch = (e) => {
    e.preventDefault()
    if (!value) return
    navigate(`/search?q=${value}`)
    setValue('')
  }

  return (
      <div className={styles.boxHeader}>
      <h1>
        <Link to='/'>MovieDB</Link>
      </h1>

      <form onSubmit={fromPageSearch}>
        <input
          type="text"
          placeholder='Pesquisar...'
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <button><IoMdSearch /></button>
      </form>
      
    </div>
  )
}
