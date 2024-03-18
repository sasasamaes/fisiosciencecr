export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
  courseDate: string;
  durationPerDay: string;
  speaker: any;
  place: any;
  phones: any;
  reservalPrice: string;
}