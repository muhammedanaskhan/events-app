
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({title}) {
  return (
    <div className={styles.container}>

      <header>
        <nav>
          <img></img>
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        <a href=''></a>
        <div>
          <img/>
          <h2>Events in London</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <a href=''></a>
        <div>
          <img/>
          <h2>Events in San Francisco</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <a href=''></a>
        <div>
          <img/>
          <h2>Events in Barcelona</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> 2022 Time to Code = A Project Built with Next.js</p>
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  return{
    props: {
        title: 'Hello everyone!',
    },
  };
}
