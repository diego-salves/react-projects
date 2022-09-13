// JSX = JavaScript + XML

import { Header } from './components/Header';
import {Post} from './Post';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Diego Alves"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, totam provident vitae dolore voluptatum error vero expedita nam quis officiis esse quaerat est, non cupiditate. Aliquam enim amet similique laboriosam!"
      />

      <Post 
        author="Lux"
        content="demácia!"
      />

    </div>
  )
}

