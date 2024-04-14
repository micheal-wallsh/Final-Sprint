import {render,screen} from "@testing-library/react"
import Header from "../Components/Header";
import { MemoryRouter } from "react-router-dom";


describe("Header", ()=>{
      test("Navbar rendering OK", ()=>{
        render(<MemoryRouter><Header /></MemoryRouter>);

        const navElement = screen.getByTestId("navBar")
        expect(navElement).toBeInTheDocument();
        
        const cartElement = screen.getByTestId("cartButton")
        expect(cartElement).toBeInTheDocument();
      })

     
})