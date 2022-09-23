import React from 'react'
import { Header } from '../components/header'
import '../styles/home-page.css'

export function HomePage() {
  return (
    <div>
      <div className="d-flex w-100 h-100 justify-content-center align-items-center text-center">
        <div className="hero-inner">
          <div className="bg-image hero-image">
            <div className="mask">
              <Header></Header>
            </div>
          </div>


          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem soluta omnis consectetur nisi in dolores ullam esse quas eveniet. Distinctio deleniti maiores, culpa nisi reiciendis suscipit ad voluptate voluptatem corrupti?</h1>
        </div>
      </div>
      <div className="favourite-trips">

      </div>
      <div className="download-app">

      </div>
      <div className="covid">

      </div>
      <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a
          href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
      </footer>
    </div>
  )
}