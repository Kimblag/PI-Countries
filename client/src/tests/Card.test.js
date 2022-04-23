// 1. Create test that fails (RED)
// 2. Create the minimum code to make the test pass (GREEN)
// 3 Refactor (clean code, code smells, etc)
import { render, screen, cleanup } from "@testing-library/react";
import Card from "../components/Card/Card.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const country = {
  flag: "https://restcountries.eu/data/fra.svg",
  name: "France",
  continent: "Europe",
};

test("should render Card component", () => {
  const country = {
    flag: "https://restcountries.eu/data/fra.svg",
    name: "France",
    continent: "Europe",
  };
  render(
    <Router>
      <Card
        name={country.name}
        flag={country.flag}
        continent={country.continent}
        id={country.id}
      />
    </Router>
  );
  const cardElement = screen.getByTestId("card-1");
  expect(cardElement).toBeInTheDocument();
});
test("should have an h4 tag with text France", () => {
  render(
    <Router>
      <Card
        name={country.name}
        flag={country.flag}
        continent={country.continent}
        id={country.id}
      />
    </Router>
  );
  const cardElement = screen.getByTestId("card-1");
  expect(cardElement.querySelector("h4")).toBeInTheDocument();
  expect(cardElement.querySelector("h4").textContent).toBe("France");

});
test("should have an p tag with text Europe", () => {
  render(
    <Router>
      <Card
        name={country.name}
        flag={country.flag}
        continent={country.continent}
        id={country.id}
      />
    </Router>
  );
  const cardElement = screen.getByTestId("card-1");
  expect(cardElement.querySelector("p")).toBeInTheDocument();
  expect(cardElement.querySelector("p").textContent).toBe("Europe");
});

test("should have a button tag", () => {
  render(
    <Router>
      <Card
        name={country.name}
        flag={country.flag}
        continent={country.continent}
        id={country.id}
      />
    </Router>
  );
  const cardElement = screen.getByTestId("card-1");
  expect(cardElement.querySelector("button")).toBeInTheDocument();
});

test("should have a img tag", () => {
  render(
    <Router>
      <Card
        name={country.name}
        flag={country.flag}
        continent={country.continent}
        id={country.id}
      />
    </Router>
  );
  const cardElement = screen.getByTestId("card-1");
  expect(cardElement.querySelector("img")).toBeInTheDocument();
});

