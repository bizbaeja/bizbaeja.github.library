---
layout: post
title:  "useCallback"
categories: jekyll update
---
컴포넌트 실행 전반에 걸쳐 함수를 저장할수 있게 하는 훅. 

리액트에게  우리는 이 함수를 저장할 것이고 매번 실행때마다 이 함수를 재생성 할 필요가 없다는 걸 알릴 수 있다. → 동일한 함수 객체가 메모리의 동일한 위치에 저장되므로 이를 통해 비교작업이 가능함 

```jsx
//App.js

export default function App() {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const theme = {
    backgroundColor: light ? "White" : "grey",
    color: light ? "grey" : "white"
  };

  const getItems = () => {
    return [input + 10, input + 100];
  };
  // const getItems = useCallback(() => {
  //   return [input, input + 10, input + 100]
  // },[input]);
  
  const handleChange = (event) => {
    if (Number(event.target.value)) {
      setInput(Number(event.target.value));
    }
  };

  return (
    <>
      <div style={theme} className="wall-paper">
        <input
          type="number"
          className="input"
          value={input}
          onChange={handleChange}
        />
        <button
          className={(light ? "light" : "dark") + " button"}
          onClick={() => setLight((prevLight) => !prevLight)}
        >
          {light ? "dark mode" : "light mode"}
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

```

```jsx
//List.js
import { useState, useEffect } from "react";

function List({ getItems }) {
  /* Initial state of the items */
  const [items, setItems] = useState([]);

  /* This hook sets the value of items if 
     getItems object changes */
  useEffect(() => {
    console.log("아이템을 가져옵니다.");
    setItems(getItems());
  }, [getItems]);

  /* Maps the items to a list */
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default List;

```

사용법

저장하려는 함수를 래핑

useCallback 훅 사용, 함수를 첫번째 인자로 전달하면 useCallback은 이 저장된 함수를 반환해주고, 

App 함수가 다시 실행되면 useCallback 이 리액트가 저장한 함수를 찾아서 그 같은 함수 객체를 재사용한다. 

따라서, 어떤 함수가 절대 변경되어서는 안된다면 useCallback 을 사용하여 함수를 저장하면 된다.

useEffect 와 마찬가지로 두번째 인자가 필요하며 그것은 의존성 배열이다. 

useEffect 와 같은 것을 의미한다.