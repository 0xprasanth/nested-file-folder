interface Base {
  id: number;
}

export interface File extends Base {
  name: string;
  isFolder: false;
}
export interface Folder extends Base {
  name: string;
  isFolder: true;
  children: File[] | Folder[];
}
export type Explorer = File | Folder;
