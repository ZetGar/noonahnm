// import React,{ useState }  from 'react'

// // 1. 박스 2개 (타이틀. 사진, 결과)
// // 2. 가위 바위 보 버튼이 있다
// // 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// // 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// // 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
// // 6. 승패 결과에 따라 테두리색이 바뀐다 ( 이기면-초록 지면-빨강 비기면-검정 )

// import Box from '../component/Box'

// const choice = {
//   rock: {
//     name: "Rock",
//     img: "✊🏼",
//   },
//   scissors: {
//     name: "Scissors",
//     img: "✌🏼",
//   },
//   paper: {
//     name: "Paper",
//     img: "🖐🏼",
//   },
// };


// const Game = () => {
//   const [userSelect, setUserSelect] = useState(null);
//   const [computerSelect, setComputerSelect] = useState(null);
//   const [result, setResult] = useState();

//   const play = (userChoice) => {
//     setUserSelect(choice[userChoice]);

//     let computerChoice = randomChoice();
//     setComputerSelect(computerChoice);

//     judgment(choice[userChoice], computerChoice);
//     console.log('judgment',judgment)
//     setResult(judgment(choice[userChoice], computerChoice));
//   };

//   const judgment = (user, computer) => {
//     //user == computer tie
//     //user == rock, computer == 'scissors"   user 이긴거지
//     //user -- rock, computer == "papger"     user 진거지
//     //user == scissors, computer == "papger" user 이긴거지
//     //user == scissors, computer == "rock"   user 진거지
//     //user == paper, computer == "rock"      user 이긴거지
//     //user == paper, computer == "scisseros" user 진거지

//     if(user.name == computer.name){
//       return "tie"
//     } else if(user.name === 'Rock'){
//       // if(computer =='scissors'){
//       //   return "win"
//       // } else {
//       //   return "lost"
//       // }

//       // Q.삼항연산식으로 바꿔보기
//       return computer.name ==='Scissors' ? 'win' : 'lose';
//     } else if(user.name === 'Scissors'){
//       return computer.name === 'Rock' ? 'win' : 'lose';
//     } else if(user.name === 'Paper'){
//       return computer.name === 'Scissors' ? 'win' : 'lose';
//     }
//   };

//   const randomChoice = () => {
//     let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 어레이로 만들어주는 함수
//     console.log("itemArray", itemArray);

//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     console.log("random value", randomItem);

//     let final = itemArray[randomItem];
//     console.log("final", final);

//     return choice[final];
//   };

//   return (
//     <>
//       <div className="box_wrap">
//         <Box tit="You" item={userSelect} result={result} />
//         <Box tit="Computer" item={computerSelect} result={result} />
//       </div>
//       <div className="box_wrap">
//         <button
//           onClick={() => {
//             play("rock");
//           }}
//         >
//           ✊🏼
//         </button>
//         <button
//           onClick={() => {
//             play("scissors");
//           }}
//         >
//           ✌🏼
//         </button>
//         <button
//           onClick={() => {
//             play("paper");
//           }}
//         >
//           🖐🏼
//         </button>
//       </div>
//     </>
//   );
// }

// export default Game