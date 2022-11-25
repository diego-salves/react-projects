import { Post } from './Post'

export function App() {
  return (
    <div>
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
