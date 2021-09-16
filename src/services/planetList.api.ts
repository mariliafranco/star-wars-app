import axios from "axios";

export interface IPlanets {
  name: string;
  rotation_period: number | undefined;
  orbital_period: number | undefined;
  diameter: number | undefined;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number | undefined;
  population: number | undefined;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface IFilterNumeric {
  column: string;
  comparison: string;
  value: number | undefined;
}

export interface IPlanetsResults {
  results: IPlanets[];
  filterResults: any[];
  filterNumericResults: IFilterNumeric | undefined;
}

export const getPlanets = {
  getPlanets: () => {
    return axios.get<IPlanetsResults>(
      "https://swapi-trybe.herokuapp.com/api/planets/",
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};
