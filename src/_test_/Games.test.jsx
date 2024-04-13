import {render,screen} from "@testing-library/react"
import Games from "../Components/Games";
import Header from "../Components/Header";
import { MemoryRouter } from "react-router-dom";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

describe("Games", ()=>{
    const games = [{
        "id": "1",
        "console":"Nintendo Switch",
        "name":"Super Smash Bros Ultimate",
        "picture":"https://external-preview.redd.it/_wq5TFnymlf33K6o_hy4NnD1cDzIMB7Vg2SiXVo-dHw.jpg?auto=webp&s=447955d77286e4d4a421121b7fa813abf8bb3b13",
        "price":79.99,
        "info":"Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more! Having trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally* or online**, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all*, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!",
        "cart":false
    
      }]
      const cartGames=[];

      test("img renders correctly", ()=>{
        render(<MemoryRouter><Games games={games} cartGames={cartGames}/></MemoryRouter>);

        const imgElement = screen.getByRole("img")
        expect(imgElement).toBeInTheDocument();
      })
      test("info renders correctly", ()=>{
        render(<MemoryRouter><Games games={games} cartGames={cartGames}/></MemoryRouter>);

        const nameElement = screen.getByTestId("nameTest")
        expect(nameElement).toBeInTheDocument();
        
        const priceElement = screen.getByTestId("priceTest")
        expect(priceElement).toBeInTheDocument();
      })

     
})