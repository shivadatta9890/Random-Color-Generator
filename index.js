let btn = document.querySelector('.btn');

let displaycode = document.querySelector('.color_code');
 let bgcolor;
// let color;


// 1st way using rgb

const randomcolor = ()=>{
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);

   bgcolor = "rgb("+x+","+y+","+z+")";

     return bgcolor;
    }
    btn.addEventListener('click',()=>{
        document.body.style.background = randomcolor();
          displaycode.innerHTML = bgcolor;
    })

// 2nd way using hexadecimal

// let randomcolor = ()=>{
//    color='#'
//   let hexadecimal = '0123456789ABCDE';
//     for(let i=0;i<6;i++){
//         color = color+hexadecimal[Math.floor(Math.random()*16)]
//     }
//     return color;
// }
// btn.addEventListener('click',()=>{
//             document.body.style.background = randomcolor();
//               displaycode.innerHTML = color;
//               displaycode.style.color=randomcolor();
//         })