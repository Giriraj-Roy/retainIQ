export interface variant {
    id: number,
    image: string
  }
export  interface ListItemProps {
    id: number,
    filters: string[],
    variants : variant[]
  }