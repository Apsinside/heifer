import  {moo}  from "./moo.js";
import {say} from "cowsay";
const cowName = "interupting cow";
console.log(say({ text: moo(cowName) }));