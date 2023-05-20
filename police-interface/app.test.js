import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LocationContext } from "./path/to/LocationContext";
import App from "./App";

describe("App", () => {
  it("renders Navbar for all routes except the login page", () => {
    render(
      <BrowserRouter>
        <LocationContext.Provider >
          <App />
        </LocationContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Navbar")).toBeInTheDocument();
  });

  it("does not render Navbar for the login page", () => {
    render(
      <BrowserRouter>
        <LocationContext.Provider value='/login'>
          <App />
        </LocationContext.Provider>
      </BrowserRouter>
    );

    expect(screen.queryByText("Navbar")).not.toBeInTheDocument();
  });
 
});
