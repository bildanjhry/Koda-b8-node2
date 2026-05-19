import {createInterface} from "readline"
import changeFormat from "./utils/change-format.js";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Masukan tanggal: ", function(ans){
    changeFormat(ans)
})


