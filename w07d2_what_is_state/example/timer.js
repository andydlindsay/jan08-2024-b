const timer = () => {
    let count = 0;
    setInterval(() => {
        count++;
        console.log('Count:', count);
    }, 1000);
};

timer();
