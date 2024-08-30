// {
//     let days = 5
//     console.log('Masala 01');
// switch (days) {
//     case 1:
//         console.log(`${days} Dushanba kuni`);
//         break;
//     case 2:
//         console.log(`${days} Seshanba kuni`);
//         break
//     case 3:
//         console.log(`${days} Chorshanba kuni`);
//         break
//     case 4:
//         console.log(`${days} Payshanba kuni`);
//         break
//     case 5:
//         console.log(`${days} Juma kuni`);
//         break
//     case 6:
//         console.log(`${days} Shanba kuni`);
//         break
//     case 7:
//         console.log(`${days} Yakshanba kuni`);
//         break
//     default:
//         console.log(`${days} Bunday hafta kuni mavjud emas !`);
//         break;
// }

// }

// {
//     let ball = 5
//     console.log('Masala 02 ');
//     switch (ball) {
//         case 1:
//             console.log(`${ball} Yomon !`);
//             break;
//         case 2:
//         console.log(`${ball} Qoniqarsiz !`);
//         break
//     case 3:
//         console.log(`${ball} Qoniqarli`);
//         break
//     case 4:      
//     console.log(`${ball} Yaxshi`);
//         break
//     case 5 :
//         console.log(`${ball} A'lo`);
//         break
//         default:
//             console.log(`${ball} XATO !`);
//             break;
//     }
// }

// {
//     let month = 12
//     console.log('Masala 03');
//     switch (month) {
//         case 1:
//         case 2:
//         case 12:
//             console.log(`${month} Winter`);
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log(`${month} Spring`);
//             break
//         case 6:                
//         case 7:               
//         case 8:                
//             console.log(`${month} Summer`);
//             break
//         case 9:    
//         case 10:    
//         case 11:    
//             console.log(`${month} autumn`);
//             break
//         default:
//             console.log(`${month} There is no such month !`);
//             break;
//     }
// }

// {
//     let monthDay = 12
//      console.log('Masala 04')
//     switch (monthDay) {
//         case 1:
//             console.log(`${monthDay} Yanvar oyida 31 kun`);
//             break;
//         case 2:
//             console.log(`${monthDay} Fevral oyida 28 kun`);
//             break;
//         case 3:
//             console.log(`${monthDay} Mart oyida 31 kun`);
//             break;
//         case 4:
//             console.log(`${monthDay} Aprel oyida 30 kun`);
//             break;
//         case 5:
//             console.log(`${monthDay} May oyida 31 kun`);
//             break;
//         case 6:
//             console.log(`${monthDay} Iyun oyida 30 kun`);
//             break;
//         case 7:
//             console.log(`${monthDay} Iyul oyida 31 kun`);
//             break;
//         case 8:
//             console.log(`${monthDay} Avgust oyida 31 kun`);
//             break;
//         case 9:
//             console.log(`${monthDay} Sentyabr oyida 30 kun`);
//             break;
//         case 10:
//             console.log(`${monthDay} Oktyabr oyida 31 kun`);
//             break;
//         case 11:
//             console.log(`${monthDay} Noyabr oyida 30 kun`);
//             break;
//         case 12:
//             console.log(`${monthDay} Dekabr oyida 31 kun`);
//             break;

//         default:
//             break;
//     }
// }



// {
//     let a = 15
//     let b = 5
//     let javobi = 4
//      
//      console.log('Masala 05')
//     switch (javobi) {
//         case 1:
//             console.log( a + b);
//             break;
//         case 2:
//             console.log( a - b);
//             break;
//         case 3:
//             console.log( a / b);
//             break;
//         case 4:
//             console.log( a * b);
//             break;
//         default:
//             console.log(`Xato amal kiritildi ${javobi}`);
//             break;
//     }
// }


// {
//     let son = 4; 
//     let uzunlik = 1.5;

//     console.log('Masala 06')
//     switch (son) {
//         case 1: 
//             console.log(uzunlik / 10);
//             break;
//         case 2: 
//             console.log(uzunlik * 1000);
//             break;
//         case 3: 
//             console.log(uzunlik);
//             break;
//         case 4: 
//             console.log(uzunlik / 1000);
//             break;
//         case 5: 
//             console.log(uzunlik / 100);
//             break;
//         default:
//             console.log('XATO !');
//             break;
//     } 
// }

// {
//     let value = 10;
//     let unit = 5;

//     console.log('Masala 07');
//     switch (unit) {
//         case 1:
//             // kg
//             console.log(`${value}kg`);
//             break;
//         case 2:
//             // milligram
//             console.log(`${value / 1000000}kg`);
//             break;
//         case 3:
//             // gram
//             console.log(`${value / 1000}kg`);
//             break;
//         case 4:
//             // tonna
//             console.log(`${value * 1000}kg`);
//             break;
//         case 5:
//             // sentener
//             console.log(`${value * 100}kg`);
//             break;
//         default:
//             console.log(`XATO !`);
//     }
// }

// {

// let yil = 2024   //yil
// let oy = 10      // oy
// let kun = 17    // kun
// console.log('masala 08');
// switch (oy) {
//     case 1:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-Yanvar`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 2:
//         if (kun <= 28) {
//             console.log(`${yil}-yil ${kun}-Fevral`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 3:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-Mart`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 4:
//         if (kun <= 30) {
//             console.log(`${yil}-yil ${kun}-Aprel`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 5:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-May`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 6:
//         if (kun <= 30) {
//             console.log(`${yil}-yil ${kun}-Iyun`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 7:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-Iyul`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 8:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-Avgust`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 9:
//         if (kun <= 30) {
//             console.log(`${yil}-yil ${kun}-Sentyabr`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 10:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-Oktyabr`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break;
//     case 11 :
//         if (kun <= 30) {
//             console.log(`${yil}-yil ${kun}-Noyabr`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break
//     case 12:
//         if (kun <= 31) {
//             console.log(`${yil}-yil ${kun}-Dekabr`);
//         } else {
//             console.log('Bunday sana mavjud emas');
//         }
//         break
//     default:
//         console.log('XATO ! bunday oy mavjud emas');
//         break;
// }

// }



// {

//     let yil = 2024   //yil
//     let oy = 10      // oy
//     let kun = 17    // kun
//     console.log('masala 09');
//     switch (oy) {
//         case 1:
//             if (kun <= 31) {
//                 console.log(`Siz kiritgan sana ${yil}-yil ${kun}-Yanvar ${yil}-yil ${kun + 1}-Yanvar`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 2:
//             if (kun <= 28) {
//                 console.log(`Siz kiritgan sana ${yil}-yil ${kun}-Fevral ${yil}-yil ${kun + 1}-Fevral`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 3:
//             if (kun <= 31) {
//                 console.log(`Siz kiritgan sana ${yil}-yil ${kun}-Mart ${yil}-yil ${kun + 1}-Mart`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 4:
//             if (kun <= 30) {
//                 console.log(`Siz kiritgan sana ${yil}-yil ${kun}-Aprel ${yil}-yil ${kun + 1}-Aprel`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 5:
//             if (kun <= 31) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-May ${yil}-yil ${kun + 1}-May`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 6:
//             if (kun <= 30) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Iyun keyingi sana ${yil}-yil ${kun + 1}-Iyun`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 7:
//             if (kun <= 31) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Iyul keyingi sana ${yil}-yil ${kun + 1}-Iyul`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 8:
//             if (kun <= 31) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Avgust keyingi sana ${yil}-yil ${kun + 1}-Avgust`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 9:
//             if (kun <= 30) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Sentyabr keyingi sana ${yil}-yil ${kun + 1}-Sentyabr`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 10:
//             if (kun <= 31) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Oktyabr keyingi sana ${yil}-yil ${kun + 1}-Oktyabr`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break;
//         case 11:
//             if (kun <= 30) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Noyabr keyingi sana ${yil}-yil ${kun + 1}-Noyabr`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break
//         case 12:
//             if (kun <= 31) {
//                 console.log(`siz kiritgan sana ${yil}-yil ${kun}-Dekabr keyingi sana ${yil}-yil ${kun + 1}-Dekabr`);
//             } else {
//                 console.log('Bunday sana mavjud emas');
//             }
//             break
//         default:
//             console.log('XATO ! bunday oy mavjud emas');
//             break;
//     }
// }

// Qo'shimcha 

{
    const box = document.querySelector('.box')
    let boxTop = 50
    let boxleft = 50

    document.body.onkeydown = (e) => {
        switch (e.key) {
            case 'w':
                boxTop --
                box.style.top = `${boxTop}px`
                break;
            case 'a':
                boxleft --
                box.style.left = `${boxleft}px`
                break;
            case 's':
                boxTop ++
                box.style.top = `${boxTop}px`
                break;
            case 'd':
                boxleft ++
                box.style.left = `${boxleft}px`
                break;
            default:
                console.log('XATO !');
                break;
        }
    }
}

