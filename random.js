console.log("First.......");
function doAsyncWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing with timer ....");
            resolve("Async Result");
        }, 6000);
    })

}
async function GetAsyncResults() {
    let asyncResult = await doAsyncWork();
    console.log("2nd......." + asyncResult);
}
GetAsyncResults();

console.log("3rd.......");