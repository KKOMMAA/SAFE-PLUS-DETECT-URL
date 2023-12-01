// import { useRef, useEffect } from 'react';
// import { MIN_Y, MAX_Y } from '../utils/bottomSheetOption';

// // BottomSheet을 제어하는 React Hook
// export default function useBottomSheet() {
//   const sheet = useRef(null); // BottomSheet 요소에 대한 참조
//   const content = useRef(null); // BottomSheet 내부 콘텐츠에 대한 참조

//   // 터치 및 이동과 관련된 메트릭스를 저장하는 useRef
//   const metrics = useRef({
//     touchStart: {
//       sheetY: 0,
//       touchY: 0,
//     },
//     touchMove: {
//       prevTouchY: 0,
//       movingDirection: 'none',
//     },
//     isContentAreaTouched: false,
//   });

//   // 컴포넌트가 처음 마운트될 때 한 번 실행되는 useEffect
//   useEffect(() => {
//     // BottomSheet을 이동할 수 있는지 확인하는 함수
//     const canUserMoveBottomSheet = () => {
//       const { touchMove, isContentAreaTouched } = metrics.current;

//       // 컨텐츠 영역이 터치되지 않았으면 이동 가능
//       if (!isContentAreaTouched) {
//         return true;
//       }

//       // BottomSheet이 최소 Y 위치에 있지 않으면 이동 가능
//       if (sheet.current.getBoundingClientRect().y !== MIN_Y) {
//         return true;
//       }

//       // 아래로 이동 중이면 컨텐츠 영역의 스크롤이 맨 위에 있는 경우에만 이동 가능
//       if (touchMove.movingDirection === 'down') {
//         return content.current.scrollTop <= 0;
//       }
//       return false;
//     };

//     // 터치 시작 이벤트 핸들러
//     const handleTouchStart = e => {
//       const { touchStart } = metrics.current;
//       touchStart.sheetY = sheet.current.getBoundingClientRect().y; // 터치 시작 시 BottomSheet의 Y 위치 저장
//       touchStart.touchY = e.touches[0].clientY; // 터치 시작 시 클라이언트의 Y 위치 저장
//     };

//     // 터치 이동 이벤트 핸들러
//     // 터치 이동 이벤트 핸들러
//     const handleTouchMove = e => {
//       const { touchStart, touchMove } = metrics.current;
//       const currentTouch = e.touches[0];

//       // 초기 터치 Y 위치가 정의되지 않았으면 저장
//       if (touchMove.prevTouchY === undefined) {
//         touchMove.prevTouchY = touchStart.touchY;
//       }

//       // 앱이 처음 시작될 때 터치의 초기 위치 저장
//       if (touchMove.prevTouchY === 0) {
//         touchMove.prevTouchY = touchStart.touchY;
//       }

//       // 터치 이동 방향 설정
//       if (touchMove.prevTouchY < currentTouch.clientY) {
//         touchMove.movingDirection = 'down';
//       }

//       // BottomSheet을 이동할 수 있는 경우에만 실행
//       if (canUserMoveBottomSheet()) {
//         e.preventDefault(); // 기본 터치 동작 막기

//         const touchOffset = currentTouch.clientY - touchStart.touchY;
//         let nextSheetY = touchStart.sheetY + touchOffset;

//         // BottomSheet의 이동 범위 설정
//         if (nextSheetY <= MIN_Y) {
//           nextSheetY = MIN_Y;
//         }

//         if (nextSheetY >= MAX_Y) {
//           nextSheetY = MAX_Y;
//         }
//         // // BottomSheet의 위치 업데이트
//         sheet.current.style.setProperty('transform', `translateY(${nextSheetY - MAX_Y}px)`);
//       } else {
//         document.body.style.overflowY = 'hidden'; // BottomSheet 이동 불가능 시 body 스크롤 막기
//       }
//     };

//     // 터치 종료 이벤트 핸들러
//     const handleTouchEnd = e => {
//       document.body.style.overflowY = 'auto'; // 터치 종료 시 body 스크롤 다시 활성화
//       const { touchMove } = metrics.current;

//       // Snap Animation
//       const currentSheetY = sheet.current.getBoundingClientRect().y;

//       // BottomSheet의 현재 위치가 최소 Y 위치가 아닌 경우
//       if (currentSheetY !== MIN_Y) {
//         // 아래로 이동 중이면 BottomSheet을 초기 위치로 스냅
//         if (touchMove.movingDirection === 'down') {
//           sheet.current.style.setProperty('transform', 'translateY(0)');
//         }
//         // 위로 이동 중이면 BottomSheet을 최소 Y 위치로 스냅
//         if (touchMove.movingDirection === 'up') {
//           sheet.current.style.setProperty('transform', `translateY(${MIN_Y - MAX_Y}px)`);
//         }
//       }

//       // 메트릭스 초기화
//       metrics.current = {
//         touchStart: {
//           sheetY: 0,
//           touchY: 0,
//         },
//         touchMove: {
//           prevTouchY: 0,
//           movingDirection: 'none',
//         },
//         isContentAreaTouched: false,
//       };
//     };

//     // 이벤트 리스너 등록
//     sheet.current.addEventListener('touchstart', handleTouchStart);
//     sheet.current.addEventListener('touchmove', handleTouchMove);
//     sheet.current.addEventListener('touchend', handleTouchEnd);
//   }, []); // useEffect를 이용하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

//   // 컨텐츠 영역 터치 시작 이벤트 핸들러를 등록하는 useEffect
//   useEffect(() => {
//     const handleTouchStart = () => {
//       metrics.current.isContentAreaTouched = true;
//     };
//     content.current.addEventListener('touchstart', handleTouchStart);
//   }, []); // useEffect를 이용하여 컨텐츠 영역에 터치가 시작될 때만 실행되도록 설정

//   // BottomSheet과 컨텐츠에 대한 참조를 반환
//   return { sheet, content };
// }
