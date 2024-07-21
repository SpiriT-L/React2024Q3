export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
