import {createInterface} from "readline";
import generateDate from "./utils/moment.js";
import changeFormat from "./utils/change-format.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukan tanggal: ", function(ans){
  const res = changeFormat(ans);
  console.log(res);
});


