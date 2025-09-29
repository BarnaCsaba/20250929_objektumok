import { Auto } from "./auto.js";
import { AutoExtrakkal } from "./extrakkal.js";

const auto1 = new Auto("Toyota Corolla", 2015, "fehér")

console.log(`${auto1.modell} kora: ${auto1.evjarat} -ös évjárat, kora: ${auto1.getKor()} év`)
auto1.szin = "piros"
console.log(`Megváltoztatott szín: ${auto1.szin}, ${auto1.modell} kora: ${auto1.evjarat} -ös évjárat, kora: ${auto1.getKor()} év`)

const autoextr1 = new AutoExtrakkal("Honda Civic", 2020, "fekete", 6.5, 50)

console.log(`${autoextr1.modell} kora: ${autoextr1.evjarat} -ös évjárat, kora: ${autoextr1.getKor()} év, fogyasztása: ${autoextr1.fogyasztas} és a tank mérete: ${autoextr1.tankMeret}`)
 
console.log(`Az autó hatótávolsága: ${autoextr1.hatoTav()} koltseg: ${autoextr1.koltseg()}`)