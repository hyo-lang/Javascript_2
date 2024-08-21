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

setTimeout(()=>{
    console.log('비동기');
}, 3000);
