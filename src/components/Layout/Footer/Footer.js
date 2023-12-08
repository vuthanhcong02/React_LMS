import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <div className='footer-main-content container'>
          <div className="text-content-footer">
              <NavLink to='/' className='nav-link'>Chào mừng bạn đến với trang web</NavLink>
          </div>
          <div className='link-page-footer'>
              <ul>
                  <NavLink to='/' className='nav-link'>Trang chủ</NavLink>
                  <NavLink to='/my-course' className='nav-link'>Các khóa học của tôi</NavLink>
                  <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
              </ul>
          </div>
          <div className='contact-footer'>
              <span>Địa chỉ: 123, ABC, HN</span>
              <span>Email: admin@example.com</span>
              <span>Hotline: 0123456789</span>
          </div>
      </div>
      <div className='copyright-footer container'>
          <span>Copyright © 2023 - Phát triển bởi 成功.</span>
      </div>
    </>
  )
}
