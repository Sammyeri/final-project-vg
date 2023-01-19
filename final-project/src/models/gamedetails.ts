
export interface GamedetailsProps{
    game: Game |undefined;
}
export interface Game{
    name: string;
    background_image: string;
    description_raw: string;
    rating: number;
    releasedate: string;
    esrb_rating: EsrbRating;
    platforms: Platforms[];
    id: number;
    website: string;
}

export interface EsrbRating{
    id: number;
    name: string;
}

export interface Platforms{
    platform: Platform;
}

export interface Platform{
    name:string;
}