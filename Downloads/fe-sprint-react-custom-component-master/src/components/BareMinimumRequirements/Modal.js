import { useState } from 'react';
import styled from 'styled-components';//css 임포트 해주기


export const ModalContainer = styled.div`
 background : ${props => props.color ? props.color :'#293241'};`

export const ModalBackdrop = styled.div`
 ${'' /* // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다. 1st children border-radius 를 준다.  */}
 //엠퍼샌드(&) 없이 셀렉터를 사용하면 해당 컴포넌트 아래에 있는 자식들을 참조한다.


   position: relative;
 display : flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 width: 100vh;
 background-color : rgba(0,0,0,0.3);
 
 
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  position: absolute;
  margin: 15vh 50vh;
  justify-content: center;
  
`;

// attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
export const ModalView = styled.div.attrs(props => ({role: 'dialog'}))`
border-radius : ${props => props.dialog ? "dialog" : "20px"};
 ${'' /* // Modal창 CSS를 구현합니다. */}
display : flex;
justify-content : center;
align-items: center;
height : 100px;
width : 300px;
background-color: white;
color : #4000c7;
text-transform: capitalize;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (event) => {
    // isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
    
  };

  return (
    <>

      <ModalContainer >
        <ModalBtn onClick={openModalHandler}>
            {isOpen ? 'opened!': 'open Modal'}
        </ModalBtn>
            {isOpen ? <ModalBackdrop onClick={openModalHandler}>
        <ModalView  onClick={(event) => {event.stopPropagation()}}>
            <div className='close-btn' onClick={openModalHandler}>&times;</div>
            <div>HELLO CODESTATES!</div>             
        </ModalView>     
      </ModalBackdrop> : null }    
        {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}    
      </ModalContainer>
    
    </>
  );
};
// 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
//TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. 