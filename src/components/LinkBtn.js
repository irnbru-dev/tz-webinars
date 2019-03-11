import React from 'react'
import { Link } from 'react-router-dom'

const LinkBtn = ({ to, label }) => {
  return (
    <Link to={to}>
      <button>
        <span>{label}</span>
      </button>
    </Link>
  )
}

export default LinkBtn
