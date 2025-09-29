import { Auto } from "./auto.js";

const auto1 = new Auto("Toyota Corolla", 2015, "fehér")

console.log(`${auto1.modell} kora: ${auto1.evjarat} -ös évjárat, kora: ${auto1.getKor()} év`)