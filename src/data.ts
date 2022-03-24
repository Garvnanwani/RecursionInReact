export interface FileNode {
  name: string
  isFolder: boolean
  contents?: FileNode[] | null
}

export const data: FileNode[] = [
  {
    name: 'folder 1',
    isFolder: true,
    contents: [
      {
        name: ' file 1',
        isFolder: false,
        contents: null,
      },
      {
        name: 'file 2',
        isFolder: false,
        contents: null,
      },
      {
        name: 'folder 1_1',
        isFolder: true,
        contents: [
          {
            name: ' file 3',
            isFolder: false,
            contents: null,
          },
        ],
      },
    ],
  },
  {
    name: 'folder 2',
    isFolder: true,
    contents: [
      {
        name: ' file 4',
        isFolder: false,
        contents: null,
      },
    ],
  },
]
