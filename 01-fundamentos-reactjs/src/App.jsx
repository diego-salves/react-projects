// JSX = JavaScript + XML

import { Header } from './components/Header';
import {Post} from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>
        <main>
          <Post 
            author="Diego Alves"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, totam provident vitae dolore voluptatum error vero expedita nam quis officiis esse quaerat est, non cupiditate. Aliquam enim amet similique laboriosam!"
          />

          <Post 
            author="Lux"
            content="demácia!"
          />
        </main>
      </div>

    </div>
  )
}



