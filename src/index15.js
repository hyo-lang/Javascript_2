const workA = () => {
    console.log('workA');
};
const workB = () => {
    console.log('workB');
};
const workC = () => {
    console.log('workC');
};

workA();
workB();
workC();

const work = (callBack) => {
setTimeout(()=>{
    console.log('비동기');
    callBack();
}, 3000);
};

work(()=> {
    console.log('종료');
});

const workD = () => {
    setTimeout(() => {
        console.log('workD');
    }, 5000);
};
const workE = () => {
    setTimeout(() => {
        console.log('workE');
    }, 3000);
};
const workF = () => {
    setTimeout(() => {
        console.log('workF');
    }, 10000);
};
const workG = () => {
        console.log('workG');
};

workD();
workE();
workF();
workG();