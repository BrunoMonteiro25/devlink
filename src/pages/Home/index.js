import { Social } from '../../components/Social'
import './home.css'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bruno Monteiro</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Github</p>
          </a>
        </section>

        <section className="link-area">
          <a href="#">
            <p className="link-text">Linkedin</p>
          </a>
        </section>

        <footer>
          <Social url="https://www.facebook.com/">
            <FaFacebook size={35} color="#fff" />
          </Social>

          <Social url="https://www.instagram.com/">
            <FaInstagram size={35} color="#fff" />
          </Social>

          <Social url="https://twitter.com/">
            <FaTwitter size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  )
}
