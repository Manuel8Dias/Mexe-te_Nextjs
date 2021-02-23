import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from '../components/Profile'

import Head from "next/head"

import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Mexe-te</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
