export type RootData = Data[][]

export interface Data {
  id: number
  documentId: string
  title: string
  gaji: string
  category: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: any
  lokasi: string
  selengkapnya?: string
  bahasa: string
  bahasa_inggris : boolean
  bonus: boolean
  gambar?: Gambar[]
  tags: Tag[]
  bidangs: Bidang[]
}

export interface Gambar {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: any
}

export interface Formats {
  large?: Large
  small: Small
  medium?: Medium
  thumbnail: Thumbnail
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Tag {
  id: number
  documentId: string
  nama: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: any
}

export interface Bidang {
  id: number
  documentId: string
  nama: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: any
}
