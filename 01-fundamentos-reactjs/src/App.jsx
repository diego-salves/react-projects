import { Post } from './Post';

import './global.css';
import { Header } from './components/Header';

export function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Diego" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Post 
        author="José" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  )
}
