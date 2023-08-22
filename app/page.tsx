'use client';
import Link from "next/link";
import MainHero from "./components/MainHero/mainHero"
import { Source_Code_Pro, Source_Sans_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['600']
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {

  return (
    <div className="container mx-auto main-container">
      <section id="home" className="flex flex-col items-center justify-center">
        <MainHero />
      </section>
      <section className="flex flex-col project-section">
        <h2 className={`${sourceCodePro.className} text-3xl sub-heading mb-9 nav-heading`}>// Projects</h2>
        <div className="flex flex-col mt-9">
          <div className="flex justify-evenly">
            <div className="project-block" id="projects">
              <Link href="https://gushihiro.github.io/Vedomy" target="_blank">
                <img className="project-img" src="/vedomyView.png" alt="project"/>
                <h4 className="project-heading">Vedomy</h4>
                <h4 className="project-sub-heading">MySQL | Express | JavaScript | NodeJS</h4>
                <h4 className="text-xl text-start mt-4">
                  A Meditation App with Personal Wellness Tracking Applicability
                  Track your mood, meditate using the animated breathing box, and receive new recipes, yoga poses, and motivational quotes daily.
                </h4>
                <h4 className="project-sub-text text-start mt-5">
                  Additional Technologies: MomentJS jQuery Bootstrap Materialize
                </h4>
              </Link>
            </div>
            {/* <div className="project-block">
              <Link href="/pong">
                <img className="project-img" src="/gushi_logo.png" alt="project"/>
                <h4>Pong</h4>
              </Link>
            </div> */}
            <div className="project-block">
              <Link href="https://gushihiro.github.io/contacts-crud/" target="_blank">
                <img className="project-img" src="/contactCrudSS.png" alt="project"/>
                <h4 className="project-heading">Contacts-CRUD</h4>
                <h4 className="project-sub-heading">MySQL | Express | JavaScript | NodeJS</h4>
                <h4 className="text-xl text-start mt-4">
                  Simple, fully functioning CRUD Application Utilizing Axios-Imported API Contacts
                  Track your mood, meditate using the animated breathing box, and receive new recipes, yoga poses, and motivational quotes daily.
                </h4>
                <h4 className="project-sub-text text-start mt-5">Additional Technologies: Material-Ui TypeScript Axios</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <a className="link-img" href="#home">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 6L6 1L1 6M11 13L6 8L1 13" stroke="#EDE490" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  )
}