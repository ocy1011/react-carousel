import React from "react";
import Provider from "./store";
import Container from "./components/Container";
import ExampleContent from "./components/ExampleContent";

interface IProps {
  contents?: React.ReactNode[];
}

function createExampleContents() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numbers.reduce(
    (result: React.ReactNode[], number) => [
      ...result,
      <ExampleContent>{number}</ExampleContent>,
    ],
    [],
  );
}

function getContents(contents?: React.ReactNode[]) {
  if (contents === undefined || contents.length === 0)
    return createExampleContents();
  return contents;
}

function Carousel({ contents }: IProps) {
  return (
    <Provider>
      <Container contents={getContents(contents)}></Container>
    </Provider>
  );
}

export default Carousel;
