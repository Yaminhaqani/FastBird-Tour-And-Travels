declare module "@/components/ui/CircularGallery" {
  type GalleryItem = {
    image: string
    text: string
  }

  interface CircularGalleryProps {
    items?: GalleryItem[]
    bend?: number
    textColor?: string
    borderRadius?: number
    font?: string
    scrollSpeed?: number
    scrollEase?: number
  }

  const CircularGallery: (props: CircularGalleryProps) => JSX.Element
  export default CircularGallery
}
