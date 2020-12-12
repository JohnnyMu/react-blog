export function tool(fn, delay) {
    let runFlag = false;
    return function () {
        let self = this
        let args = arguments
        if (runFlag) {
            return
        }
        runFlag = true;
        setTimeout(() => {
            fn.apply(self, args)
            runFlag = false
        }, delay)
    }
}