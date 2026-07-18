export type HouseDetail = {
    id: number,
    price: number;
    bedrooms: number;
    area: number;
    bathrooms: number;
    stories: number;
    mainroad: boolean;
    guestroom: boolean;
    basement: boolean;
    hotwaterheating: boolean;
    airconditioning: boolean;
    parking: number;
    furnishingstatus: string;
    description: string;
}

export type Filter = {
  minPrice?: number
  maxPrice?: number
}