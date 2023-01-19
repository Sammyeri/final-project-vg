import { ReactNode } from "react"

export interface SearchGame {
    count: number,
    next: string,
    previous: string,
    results: Result[],
    search: string,
    search_precise: boolean,
    search_exact: boolean
}

export interface Result {
    name: string,
    released: string,
    description: string,
    background_image: string,
    id: string;
}