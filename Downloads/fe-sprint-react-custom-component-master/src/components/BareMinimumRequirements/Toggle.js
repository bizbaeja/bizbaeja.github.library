import { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    //오른쪽으로 두 배 넓어지면서 길어진다.
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b; 
    background-position: right;
    background-size: 200%; 
    background: linear-gradient(to left, purple 50%, #8b8b8b 50%) right;
    //이동속도  
    transition: 0.5s;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &toggle-checked {
      background-position: left;
      background: linear-gradient(to right, purple 50%, #8b8b8b 50%) left;
      background-size: 200%;
      left: 27px;
      transition: 0.5s;
    }
  }

  > .toggle-circle {

    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    right: 27px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.5s;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
    &toggle-checked {
      left: 27px;
      transition: 0.5s;
    }
  }
`;

const Desc = styled.div`
  // TODO : 설명 부분의 CSS를 구현합니다.
  text-align: center;

`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = (event) => {
    // isOn의 상태를 변경하는 메소드를 구현합니다.
    setisOn(!(isOn));
  };

  return (
    <>
     {/* 왜 온클릭을 여기에 줘야할까용? */}
      <ToggleContainer onClick={toggleHandler}>
      
      <div className={`toggle-container ${isOn ?  'toggle--checked':null}` }/>
      <div  className={`toggle-circle ${isOn ?  'toggle--checked':null}` }/>
      </ToggleContainer>
      <Desc  >
        
           {isOn? 'Toggle Switch ON':'Toggle Switch OFF'}
          

          </Desc>      
           

      
      {/* TODO : Desc 컴포넌트를 활용해야 합니다. */}
      {/* TIP:  Toggle Switch가 ON인 상태일 경우에 Desc 컴포넌트 내부의 텍스트를 'Toggle Switch ON'으로, 그렇지 않은 경우 'Toggle Switch OFF'가 됩니다. 조건부 렌더링을 활용하세요. */}
    </>
  );
};