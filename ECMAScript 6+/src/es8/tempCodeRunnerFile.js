const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
HelloAsync();