import classNames from 'classnames/bind'
import styles from './Signup.module.scss'
import HeaderLogin from '@/layouts/HeaderLogin/HeaderLogin'
import { useEffect } from 'react'
import MainSignup from '@/components/MainSignup/MainSignup'

const cx = classNames.bind(styles)

function Signup() {
  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.title = 'Đăng ký ngay | Shopee Việt Nam'
  }, [])

  return (
    <div className={cx('signup')}>
      <HeaderLogin title={'Đăng ký'} />
      <MainSignup />
    </div>
  )
}

export default Signup
