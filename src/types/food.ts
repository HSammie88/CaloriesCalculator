export interface IFood {
  id: number;
  foodName: string;
  calories: number;
  weight: number;
  date: string;
}

export interface IDish{
  id: number;
  ingredients: {
    food: IFood;
    amount: number;
  }[];
  date: string;
  calories: number;
}
