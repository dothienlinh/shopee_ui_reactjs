import classNames from 'classnames/bind'
import styles from './FooterMain.module.scss'
import FooterMainTop from './FooterMainTop/FooterMainTop'
import FooterMainBottom from './FooterMainBottom/FooterMainBottom'

const cx = classNames.bind(styles)

function FooterMain() {
  return (
    <section className={cx('footer_main')}>
      <FooterMainTop />
      <FooterMainBottom />
    </section>
  )
}

export default FooterMain
