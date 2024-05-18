import React from 'react';
import styles from './page.module.scss'
import LandingIntro from '../components/landing-intro/landing-intro';
import LandingDescription from '../components/landing-description/landing-description';
import LandingHeader from '../components/landing-header/landing-header';
import LandingFooter from '../components/landing-footer/landing-footer';
import LandingProjectSection from '../components/landing-project-section/landing-project-section';
import LandingProjects from '../components/landing-projects/landing-projects';

export default function Home() {

  return (
      <main className={styles.main}>
        <LandingIntro/>
        <LandingDescription/>
        <LandingHeader/>
        <LandingProjects/>
        <LandingProjectSection/>
        <LandingFooter/>
      </main>
  )
}
