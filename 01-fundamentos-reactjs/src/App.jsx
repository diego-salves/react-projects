// JSX = JavaScript + XML

import { Header } from './components/Header';
import {Post} from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className="wrapper"></div>

    </div>
  )
}



