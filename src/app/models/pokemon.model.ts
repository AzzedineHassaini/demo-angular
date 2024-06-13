export interface PokemonModel {

  id: number;
  name: string;
  height: number;
  weight: number;
  imageUrl: string;

}

export interface PokemonSimple {
  name: string,
  url: string,
  imgUrl: string,
}

export interface PokemonResult {
  count: number;
  previous?: string,
  next?: string
  results: PokemonSimple[]
}
