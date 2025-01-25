export interface CardType {
  title: string;
  image: string;
  price: number;
  tag?: string;
  category?: string;
  moreInc?: MoreInc | undefined | null;
  _id?: string;
}

export interface MoreInc {
  size: 'Small' | 'Sprunce' | 'Ceder' | 'Redwood' | 'Giant' | '';
  Milk: string;
  Foam: string;
  WhippingCream: string;
  Quantity: number;
}

export interface OrderType {
  Processing: any[];
  Success: any[];
  Canceled: any[];
}
