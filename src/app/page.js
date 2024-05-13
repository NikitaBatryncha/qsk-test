'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/Intro';
import Description from '../components/Description';
import Projects from '../components/Projects';
import LandingHeader from '@/components/landing-header/landing-header';
import LandingFooter from '@/components/landing-footer/landing-footer';

export default function Home() {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description />
        <LandingHeader/>
        <Projects />
        <LandingFooter/>
      </main>
  )
}
