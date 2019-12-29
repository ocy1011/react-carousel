import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  flex: 1;
`;

const Circle = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: ${(props) => (props.isActive ? "block" : "none")};
  padding: 35%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid gray;
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
`;

interface IProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  isButtonActive: boolean;
}

function Button({ children, onClick, isButtonActive }: IProps) {
  return (
    <Background>
      <Circle onClick={onClick} isActive={isButtonActive}>
        {children}
      </Circle>
    </Background>
  );
}

export default Button;
