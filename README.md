# react-ts-carousel

![carousel](https://user-images.githubusercontent.com/34512577/71557562-0f13d480-2a8b-11ea-99bd-d7453930b41f.gif)

## 소개

- react + typescript carousel
- keyframes을 사용한 애니메이션
- 아래 점을 클릭하면 좌, 우 방향 둘 중 최단거리로 이동
- 어떤 화면에서도 가로 : 세로 = 1 : 0.5 비율
- 모바일 최적화

## 미구현

- 옵션 custom

## 실행 방법

### 설치

```javascript
yarn install
```

### 실행

```javascript
yarn start
```

## 컨텐츠 추가 방법

Carousel의 props로 contents를 전달한다.
contents의 타입은 다음과 같다.
contents를 전달하지 않으면 숫자 cell이 삽입된다.

```
const contents: React.ReactNode[]
```

예시

```
import React from "react";
import Carousel from "./carousel";

function App() {
  const contents: React.ReactNode[] = ~;
  return (
    <div>
      <Carousel contents={contents}/>
    </div>
  );
}

export default App;

```
