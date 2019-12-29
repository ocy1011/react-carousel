import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 20vmin;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;

interface IProps {
  children: React.ReactNode;
}

function ExampleContent({ children }: IProps) {
  return (
    <Background>
      <Text>{children}</Text>
    </Background>
  );
}

export default ExampleContent;
