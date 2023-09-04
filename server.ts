import { app } from "./app";

app.listen(3000, ()=>{
    console.log(
        '\x1b[36m%s\x1b[0m',  
        `[ API RUNING ] Running Extension Save 🚀 [${new Date().getDay()} ${new Date().getMonth()} ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]`
        );
});
