import {createInterface} from "readline"
import generateDate from "./utils/moment.js";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Masukan tanggal: ", function(ans){
    generateDate(ans)
})


