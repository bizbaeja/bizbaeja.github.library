
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  
}
// export const ModalBackdrop = styled.div`
//  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
//   backgrounds: {
//     default: 'myBackgroundColor',
//     values: [
//       {
//         name: 'smokedBlue',
//         value: '#293241',
//       },
//       {
//         name: 'carrot',
//         value: '#EE6C4D',
//       },
//       {
//         name: 'darkBlue',
//         value: '#293241',
//       },
// `;