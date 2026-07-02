import React from 'react'

const FooterComponent = () => {
  return (
    <footer className='fixed-bottom bg-dark text-white py-3 shadow-sm'>
      <div className='container text-center'>
        <span>
          Project by Snehil Hota | {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default FooterComponent