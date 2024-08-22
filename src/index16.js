const executor = (resolve, reject) => {
    setTimeout(() => {
        resolve('성공');
        reject('실패');
    }, 3000);
};

const promise = new Promise(executor);
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    //

const workA = (value) => {
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(value + 5);
        }, 3000);
    });
    return promise;
};
const workB = (value) => {
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(value - 3);
        }, 5000);
    });
    return promise;
};
const workC = (value) => {
    const promise = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(value + 1);
        }, 10000);
    });
    return promise;
};

workA(10)
.then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA);
})
.then((resB) => {
    console.log(`workB : ${resB}`);
    return workB(resB);
})
.then((resC) => {
    console.log(`workC : ${resC}`);
});

