import { BeersStructure } from "../../models/beers";

export class BeersApiRepo {
  addBeer(info: BeersStructure) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  update(beers: unknown) {
    throw new Error("Method not implemented.");
  }
  url: string;
  constructor() {
    this.url = "http://localhost:3500/beers";
  }

  async loadBeers(): Promise<BeersStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as BeersStructure[];
    return data;
  }

  async getById(id: BeersStructure["id"]): Promise<BeersStructure> {
    const url = this.url + "/" + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as BeersStructure;
    return data;
  }

  async createBeers(item: BeersStructure): Promise<BeersStructure> {
    const resp = await fetch(this.url, {
      method: "Post",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await resp.json()) as BeersStructure;
    return data;
  }

  async editBeers(item: Partial<BeersStructure>): Promise<BeersStructure> {
    const url = this.url + "/" + item.id;
    const resp = await fetch(url, {
      method: "Patch",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await resp.json()) as BeersStructure;
    return data;
  }

  async deleteBeers(id: BeersStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    const resp = await fetch(url, {
      method: "Delete",
    });
  }
}
