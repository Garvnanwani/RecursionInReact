import './App.css'
import { FileNode, data } from './data'
import File from './File'

function App() {
  console.log(...data)
  return (
    <div className="App">
      <h1>File Explorer</h1>
      {data.map((node: FileNode) => (
        <File key={node.name} {...node} />
      ))}
    </div>
  )
}

export default App
