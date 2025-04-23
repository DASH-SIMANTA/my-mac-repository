// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional rendering 1:
// export default function Todo({task, isDone}){
//   if(isDone=== true){
//     return <li>Finished: {task}</li>
    
//   }
//   else{

//     return <li>work on: {task}</li>
//   }
// }

// conditional rendering option 2:
// export default function Todo({task, isDone}){
//     if(isDone){
//       return <li>Finish: {task}</li>
      
//     }
//      return <li>work on: {task}</li>
//   }

// conditional rendering option3: ternary operator
// export default function Todo({task, isDone}){
//       return(
//         <li>{isDone? 'Fimished' : 'work on'}: {task} </li>
//       ) 
  
//   }
// conditional rendering option 4:  &&
// export default function Todo({task, isDone}){
//         return(
//             <li>{task} {isDone && ': Done'}</li>
//         )
//     }


// conditional rendering option 5:  ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


// conditional rendering option 6:
export default function Todo({task, isDone}){
    let listItem ;
    if(isDone){
      listItem = <li>Finish: {task}</li>
      
    }
    else{
        listItem= <li>work on: {task}</li>
    }
    return listItem;
     
  }