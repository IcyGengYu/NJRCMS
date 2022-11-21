import type { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'
import type { ReactElement } from 'react'

export default function Home(props: GetStaticProps) {
  return <div className={styles.container}>app</div>
}
export async function getStaticProps(context: GetStaticProps) {
  return {
    props: {
      name: 1
    }
  }
}

Home.getLayout = function getLayout(children: ReactElement) {
  return <div>{children}</div>
}
