import { useState } from 'react'
import { FileNode } from './data'

const File: React.FC<FileNode> = ({ name, contents }: FileNode) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const showChildren = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h4 onClick={showChildren}>{name}</h4>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          left: 25,
          paddingLeft: 20,
          borderLeft: '1px solid #000',
        }}
      >
        {isOpen &&
          (contents ?? []).map((child: FileNode) => (
            <File key={child.name} {...child} />
          ))}
      </div>
    </div>
  )
}

export default File
