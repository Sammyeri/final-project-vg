
export  interface Trailers{
    results: Trailer[];
    count: number;
}

export interface Trailer{
    name:string;
    data: Data;
    
}

export interface Data{
    max: string;
}