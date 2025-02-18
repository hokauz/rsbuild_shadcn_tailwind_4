import './App.css'
import { Button } from "@/components/ui/button"
import styles from './App.module.scss'
function App() {
  return (
    <>
      <p className={styles.sample}>Hello World</p>
      <Button>Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button variant="destructive">Click me</Button>      
    </>
  )
}

export default App
