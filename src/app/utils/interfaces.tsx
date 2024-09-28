// interface for the variants with id and image
export interface variant {
    id: number,
    image: string
  }

// Interface for every row elements
export  interface ListItemProps {
    id: number,
    filters: string[],
    variants : variant[]
  }