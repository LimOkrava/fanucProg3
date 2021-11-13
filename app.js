
  var operation = document.getElementById('operation'),
      t = operation.nextElementSibling,
      i = 1;
operation.addEventListener("click", function() {
    t.value += 'click' + i + '\n';
    t.scrollTop = t.scrollHeight;
    i += 1;
  });

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "block")
  document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
  document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
})

operation.addEventListener("change", function() {
      if (operation.value == 1) {
        console.log(operation.value)
          document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "block")
          document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")

      }
      else if (operation.value == 2) {
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
    }
      else if (operation.value == 3) {
          document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "block")
          document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
          document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
    }

      else if (operation.value == 4) {
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
  }

      else if (operation.value == 5) {
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
      }

      else if (operation.value == 6) {
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
      }

      else if (operation.value == 7) {
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
      }

      else if (operation.value == 8) {
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
      }

      else if (operation.value == 9) {
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
      }

      else if (operation.value == 10) {
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "none")
        document.querySelector(".RadKanNaruj").style.display = "block"
        document.querySelector("#vidRadKan").addEventListener("change", function() {
          if (document.querySelector("#vidRadKan").value == 0) {
            document.querySelector(".RadKanNaruj").style.display = "inline-block"
            document.querySelector(".RadKanVnutr").style.display = "none"
          }
          else if (document.querySelector("#vidRadKan").value == 1) {
            document.querySelector(".RadKanNaruj").style.display = "none"
            document.querySelector(".RadKanVnutr").style.display = "inline-block"
          }
        })
      }

      else if (operation.value == 11) {
        document.querySelectorAll(".manual").forEach((el) => el.style.display = "block")
        document.querySelectorAll(".torcKanavka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".otrezka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".metchik").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rezba").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".sverlenie").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".rastochnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".prohodnoy").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".torcovka").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".nachalo").forEach((el) => el.style.display = "none")
        document.querySelectorAll(".radKanavka").forEach((el) => el.style.display = "none")
      }

    t.value += 'change\n';
    t.scrollTop = t.scrollHeight;
    
  });
//   operation.addEventListener("focus", function() {
//     t.value += 'focus\n';
//     t.scrollTop = t.scrollHeight;
//   });
var s = 160; // при G96 скорость резания; при G97 обороты 

const perevodVoboroti = (diam) =>  Math.floor(30000 / (Math.PI * diam)) // функция перевода в обороты

  // функия добавляет точку в конце введенного числа, если её нет
  function getTochkaVkonce(string) {
    if (string.includes(".") == false) {
      string += "."
    }
    return string
  }

  // функция, которая добавляет точку к числу
  function parseParseMod(string) {
    if (string.includes(".") == false) {
      string += "."
    }
    return parseFloat(string)
  }


document.querySelector('.kodNachalo').onclick = kod1;
function kod1 () {
  let numProg = document.querySelector(".numProg").value
  let detal = document.querySelector(".detal").value
  let oboroti = document.querySelector(".oboroti").value

  var rejimIndex = document.getElementById("material").options.selectedIndex;
 // условия для трёх материалов
  if (rejimIndex === 0) {
    s = 160;
  }
  else if (rejimIndex === 1) {
    s = 80;
  }
  else if (rejimIndex === 2) {
    s = 40;
  }
  document.querySelector('.outNachalo').innerHTML = `%\nO${numProg}(${detal})\nG21G40G80\nG54\nG50S${oboroti}\nG28U0.W0.\nM1\n(1 UST)\n%\n`
}
  // var stalRejim = document.getElementById("stal").value[1] // в html прописать <option  id="nj" value ="3">
  // var njRejim = document.getElementById("nj").value
  // var kalenkaRejim = document.getElementById("kalenka").value

document.querySelector('.kodTorcovka').onclick = kodTorcovka;
function kodTorcovka () {
  let diamZag = document.querySelector(".diamZag").value
  let diamOtv = document.querySelector(".diamOtv").value
  let siemZtorec = document.querySelector(".siemZtorec").value
  let zNull = document.querySelector(".zNull").value
  let siemZprohod = document.querySelector(".siemZprohod").value
  document.querySelector('.outTorcovka').innerHTML = `T0202(TORCOVKA)\nG96G99S${s}M3\nG0Z${getTochkaVkonce(siemZtorec)}X${(getTochkaVkonce(String(parseFloat(diamZag)+ 1)))}\nM8\nG72W${getTochkaVkonce(siemZprohod)}R0.5
G72P1Q2F0.25\nN1G1Z${getTochkaVkonce(zNull)}\nN2X-1.0\nM9\nG28U0.W0.\nM5\nM1\n`
}

document.querySelector('.kodProhodnoy').onclick = kodProhodnoy;
function kodProhodnoy () {

  let xStartProhod = document.querySelector(".xStartProhod").value
  let zStartProhod = document.querySelector(".zStartProhod").value
  let siemXprohod = document.querySelector(".siemXprohod").value
  let podachaProhod = document.querySelector(".podachaProhod").value
  let pripuskXprohod = document.querySelector(".pripuskXprohod").value
  let pripuskZprohod = document.querySelector(".pripuskZprohod").value
  let konturProhod = document.querySelector(".konturProhod").value
  document.querySelector('.outProhodnoyChern').innerHTML = `T0202(PROHODNOI PRIP ${pripuskXprohod})\nG96G99S${s}M3\nG0X${getTochkaVkonce(xStartProhod)}Z${getTochkaVkonce(String(parseParseMod(zStartProhod) + 2))}
G0Z${getTochkaVkonce(String(parseParseMod(zStartProhod) + 2))}\nM8\nG1Z${getTochkaVkonce(zStartProhod)}F${podachaProhod}\nG71U${getTochkaVkonce(siemXprohod)}R0.5
G71U${getTochkaVkonce(pripuskXprohod)}W${getTochkaVkonce(pripuskZprohod)}P11Q12F${getTochkaVkonce(podachaProhod)}\nN11${konturProhod}\nN12\nM9\nG28U0.W0.\nM5\nM1\n`

const chistX1 = konturProhod.slice(3, konturProhod.indexOf("\n", 3))

  document.querySelector('.outProhodnoyChist').innerHTML = `T0202(PROHODNOI CHIST)\nG96G99S${s}M3\nG0X${getTochkaVkonce(chistX1)}Z${getTochkaVkonce(String(parseFloat(zStartProhod) + 2))}
G0Z${getTochkaVkonce(String(parseFloat(zStartProhod) + 2))}\nM8\nG1Z${getTochkaVkonce(zStartProhod)}F${getTochkaVkonce(podachaProhod)}
${konturProhod}\nU1\nG0Z5.\nM9\nG28U0.W0.\nM5\nM1\n`

}

document.querySelector('.kodRastochnoy').onclick = kodRastochnoy;
function kodRastochnoy () {
  let xStartRastoch = document.querySelector(".xStartRastoch").value
  let zStartRastoch = document.querySelector(".zStartRastoch").value
  let siemXrastoch = document.querySelector(".siemXrastoch").value
  let podachaRastoch = document.querySelector(".podachaRastoch").value
  let pripuskXrastoch = document.querySelector(".pripuskXrastoch").value
  let pripuskZrastoch = document.querySelector(".pripuskZrastoch").value
  let konturRastoch = document.querySelector(".konturRastoch").value
  document.querySelector('.outRastochnoyChern').innerHTML = `T0505(RASTOCHNOI PRIP ${pripuskXrastoch})\nG96G99S${s}M3\nG0X${getTochkaVkonce(xStartRastoch)}Z${getTochkaVkonce(String(parseParseMod(zStartRastoch) + 2))}
G0Z${getTochkaVkonce(String(parseParseMod(zStartRastoch) + 2))}\nM8\nG1Z${getTochkaVkonce(zStartRastoch)}F${getTochkaVkonce(podachaRastoch)}\nG71U${getTochkaVkonce(siemXrastoch)}R0.5
G71U-${getTochkaVkonce(pripuskXrastoch)}W${getTochkaVkonce(pripuskZrastoch)}P11Q12F${getTochkaVkonce(podachaRastoch)}\nN11${getTochkaVkonce(konturRastoch)}\nN12\nM9\nG0Z50.\nG28U0.W0.\nM5\nM1\n`

const chistX2 = konturRastoch.slice(3, konturRastoch.indexOf("."))

document.querySelector('.outRastochnoyChist').innerHTML = `T0505(RASTOCHNOI CHIST)\nG96G99S${s}M3\nG0X${getTochkaVkonce(chistX2)}Z${getTochkaVkonce(String(parseParseMod(zStartRastoch) + 2))}
G0Z${getTochkaVkonce(String(parseParseMod(zStartRastoch) + 2))}\nM8\nG1Z${getTochkaVkonce(zStartRastoch)}F${getTochkaVkonce(podachaRastoch)}\nM8\n${konturRastoch}\nM9\nU-1.\nG0Z50.\nG28U0.W0.\nM5\nM1\n`
}

document.querySelector('.kodSverlo').onclick = kodSverlo;
function kodSverlo () {
  let vidSverla = document.querySelector(".vidSverla").value
  let dSverla = document.querySelector(".dSverla").value
  let podachaSverlo = getTochkaVkonce(document.querySelector(".podachaSverlo").value)
  let zStartSverlo = document.querySelector(".zStartSverlo").value
  let zFinishSverlo = document.querySelector(".zFinishSverlo").value
  let shagSverlovki = document.querySelector(".shagSverlovki").value

  document.querySelector('.outSverlo').innerHTML = `T0707(${vidSverla} D${dSverla})\nG97G99S${perevodVoboroti(dSverla)}M3\nG0Z5.X0.
G0Z1.00\nM8\nG83Z${(getTochkaVkonce(zFinishSverlo))}R0.5Q${parseParseMod(getTochkaVkonce(shagSverlovki))*1000}F${podachaSverlo}
G0G80M9Z50.\nG28U0.\nG28W0.\nM5\nM1`
}

// расчёт диаметров резьбы

document.querySelector('.kodRezba').onclick = kodRezba;
function kodRezba () {
  let polojenieRezbi = document.querySelector(".polojenieRezbi").value
  let vidRezbi = document.querySelector(".vidRezbi").value
  let ugolRezbi
  if (vidRezbi == "M") {ugolRezbi = 60}
  if (vidRezbi == "G") {ugolRezbi = 55}
  if (vidRezbi == "Tr") {ugolRezbi = 30}
  let dRezbi = document.querySelector(".dRezbi").value
  let shagRezbi = document.querySelector(".shagRezbi").value
  let zStartRezba = document.querySelector(".zStartRezba").value
  let zFinishRezba = document.querySelector(".zFinishRezba").value
  let rezecRezbi = document.querySelector(".rezecRezbi").value
// расчёт диаметров метрической резьбы от dRezbi, shagRezbi
    const H = ((0.866025 * parseFloat(shagRezbi)));
    const D2 = (((dRezbi) - 0.649519053 * parseFloat(shagRezbi)));
    const d2 = (((dRezbi) - 0.649519053 * parseFloat(shagRezbi)));
    const D1 = (((dRezbi) - 1.082531755 * parseFloat(shagRezbi)));
    const d1 = (((dRezbi) - 1.082531755 * parseFloat(shagRezbi)));
    const d3 = (((dRezbi) - 1.226869322 * parseFloat(shagRezbi))); 
    const visotaRezbi = parseFloat(((dRezbi - d3)/2).toPrecision(3))
    console.log((dRezbi - d3)/2)
  console.log(H, D2, d2, D1, d1, d3, visotaRezbi)

    if (polojenieRezbi == "narujRezba") {
      document.querySelector('.outRezba').innerHTML = `T0101 (NARUJ REZBA ${vidRezbi}${dRezbi}X${shagRezbi})
G97G99S800M${rezecRezbi}\nG0X${(getTochkaVkonce(String(parseFloat(dRezbi)+ 1)))}\nZ${(getTochkaVkonce(zStartRezba))}
M8\nG76P0200${ugolRezbi}Q50R0
G76Z${(getTochkaVkonce(zFinishRezba))}X${d3.toPrecision(5)}P${visotaRezbi*1000}Q50F${getTochkaVkonce(shagRezbi)}\nM9\nG28U0.\nG28W0.\nM5\nM1\n
T0101 (NARUJ REZBA ${vidRezbi}${dRezbi}X${shagRezbi})
G97G99S800M${rezecRezbi}\nG0X${(getTochkaVkonce(String(parseFloat(dRezbi)+ 1)))}\nZ${(getTochkaVkonce(zStartRezba))}
M8\nG76P0200${ugolRezbi}Q50R0
G76Z${(getTochkaVkonce(zFinishRezba))}X${d3.toPrecision(5)}P${visotaRezbi*1000}Q${visotaRezbi*1000}F${getTochkaVkonce(shagRezbi)}\nM9\nG28U0.\nG28W0.\nM5\nM1\n`
    }
//-------------VNUTR METRICH
    if (polojenieRezbi == "vnutrRezba") {
      document.querySelector('.outRezba').innerHTML = `T0101 (VNUTR REZBA ${vidRezbi}${dRezbi}X${shagRezbi})
G97G99S800M${rezecRezbi}\nG0X${(getTochkaVkonce(String(parseFloat(dRezbi-shagRezbi)- 1)))}\nZ${(getTochkaVkonce(zStartRezba))}
M8\nG76P0200${ugolRezbi}Q50R0
G76Z${(getTochkaVkonce(zFinishRezba))}X${(getTochkaVkonce(dRezbi))}P${visotaRezbi*1000}Q50F${getTochkaVkonce(shagRezbi)}\nM9
G0X${(getTochkaVkonce(String(parseFloat((dRezbi-shagRezbi)- 1))))}\nZ${getTochkaVkonce(String(parseParseMod(zStartRezba) + 2))}\nG28U0.\nG28W0.\nM5\nM1\n
T0101 (VNUTR REZBA ${vidRezbi}${dRezbi}X${shagRezbi})
G97G99S800M${rezecRezbi}\nG0X${(getTochkaVkonce(String(parseFloat((dRezbi-shagRezbi)- 1))))}\nZ${(getTochkaVkonce(zStartRezba))}
M8\nG76P0200${ugolRezbi}Q50R0
G76Z${(getTochkaVkonce(zFinishRezba))}X${getTochkaVkonce(dRezbi)}P${visotaRezbi*1000}Q${visotaRezbi*1000}F${getTochkaVkonce(shagRezbi)}\nM9
G0X${(getTochkaVkonce(String(parseFloat(dRezbi-shagRezbi)- 1)))}\nZ${getTochkaVkonce(String(parseParseMod(zStartRezba) + 2))}\nG28U0.\nG28W0.\nM5\nM1\n`
    }

}

document.querySelector('.kodMetchik').onclick = kodMetchik;
function kodMetchik () {
  let shagMetchik = document.querySelector(".shagMetchik").value
  let zStartMetchik = document.querySelector(".zStartMetchik").value
  let zFinishMetchik = document.querySelector(".zFinishMetchik").value
  let sMetchik = document.querySelector(".sMetchik").value
console.log(parseParseMod(getTochkaVkonce(zStartMetchik)))
  document.querySelector('.outMetchik').innerHTML = `T0606(METCHIK X${shagMetchik})\nG97S${sMetchik}M3
G0Z${getTochkaVkonce(String(parseParseMod(zStartMetchik) + 5))}X0.\nG0Z${getTochkaVkonce(String(parseParseMod(zStartMetchik) + 2))}\nM8
G84Z${(getTochkaVkonce(zFinishMetchik))}F${(getTochkaVkonce(shagMetchik))}\nG0G80M9Z50.\nG28U0.\nG28W0.\nM5\nM1`
}

document.querySelector('.kodOtrezka').onclick = kodOtrezka;
function kodOtrezka () {
  let x1Otrezka = document.querySelector(".x1Otrezka").value
  let x2Otrezka = document.querySelector(".x2Otrezka").value
  let zOtrezka = document.querySelector(".zOtrezka").value
  let faskaOtrezka = document.querySelector(".faskaOtrezka").value

  console.log(typeof(x1Otrezka))

  document.querySelector('.outOtrezka').innerHTML = `T0303(OTREZNOI FASKA ${faskaOtrezka})\nG96S100M3
G0X${(getTochkaVkonce(String(parseFloat(x1Otrezka)+ 2)))}\nZ5.0\nZ-${getTochkaVkonce(String(Math.abs(zOtrezka)))}\nG1X${(getTochkaVkonce(String(parseFloat(x1Otrezka) - parseFloat(2*faskaOtrezka))))}F0.05
G0X${(getTochkaVkonce(String(parseFloat(x1Otrezka)+ 2)))}\nZ-${getTochkaVkonce((String((Math.abs(zOtrezka)-parseFloat(faskaOtrezka)))))}\nG1X${(getTochkaVkonce(x1Otrezka))}
Z-${Math.abs(zOtrezka)}.A45.\nG75X${getTochkaVkonce(x2Otrezka)}P1000F0.05G0X${(getTochkaVkonce(String(parseFloat(x1Otrezka)+ 10)))}\nM9\nG28U0W0\nM5\nM1\n`
}

document.querySelector('.kodTorcKan').onclick = kodTorcKan;
function kodTorcKan () {
  let dNarujTorcKan = document.querySelector(".dNarujTorcKan").value
  let dVnutrTorcKan = document.querySelector(".dVnutrTorcKan").value
  let glubKan = document.querySelector(".glubKan").value
  let rKan = document.querySelector(".rKan").value
  let nullKan = document.querySelector(".nullKan").value
  let plastinaTorec = document.querySelector(".plastinaTorec").value
  let perekritPlast = document.querySelector(".perekritPlast").value
  let fTorcKan = document.querySelector(".fTorcKan").value
  let sTorcKan = document.querySelector(".sTorcKan").value
  let vidTorcKan = document.querySelector("#vidTorcKan").value
  let faskaTorcKan = document.querySelector(".faskaTorcKan").value

  let kolvoProh
  let shirObr = (parseFloat(dNarujTorcKan)-parseFloat(dVnutrTorcKan)) / 2
  if (shirObr - parseFloat(plastinaTorec) === 0) {
      kolvoProh = 1 
    }
  else  {kolvoProh = 1 + ((shirObr - plastinaTorec) / (plastinaTorec * perekritPlast))}
console.log("Количество проходов",kolvoProh)

if (vidTorcKan == 0){

  function prohodStrSnizu(diametr){
    return `\nX${getTochkaVkonce(String(diametr))}\nG1Z${getTochkaVkonce(String(parseParseMod(nullKan) - glubKan))}F${getTochkaVkonce(String(fTorcKan))}\nG0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}`
  }

    function newProhod(diametr) {
      let prohodStrNew = ``
      let kolvoProhNew = kolvoProh
      
      for (let i = 0; i <= Math.ceil(kolvoProh); i++) {
        console.log(kolvoProhNew)
        if (kolvoProhNew === 1 ) {
          diametr = parseFloat(dNarujTorcKan) - (parseFloat(plastinaTorec) * 2);
          prohodStrSnizu(diametr)      
          console.log("kolvoProh == 1")
          prohodStrNew += prohodStrSnizu(diametr);
        }
        else if (kolvoProhNew > 1) {
          let prohodStr = prohodStrSnizu(diametr)          
          console.log("kolvoProh > 1")
          diametr += (plastinaTorec*perekritPlast) * 2;
          prohodStrNew += "+" + prohodStr;
        }
        else if (kolvoProhNew < 1 && 0 < kolvoProhNew) {
          console.log("kolvoProh < 1")
          diametr = parseFloat(dNarujTorcKan) - (parseFloat(plastinaTorec) * 2);
          prohodStrSnizu(diametr)          
          prohodStrNew += prohodStrSnizu(diametr);
        } 
        else {
          break;
        }

        kolvoProhNew = kolvoProhNew - 1;
        
    }
    return prohodStrNew
  }

  if (shirObr < parseFloat(plastinaTorec)) { 
    document.querySelector('.outTorcKan').innerHTML = `Ширина канавки меньше ширины пластины`
  } else {
  document.querySelector('.outTorcKan').innerHTML = `T0101 (TORC KANAVKA )\n(PLASTINA ${plastinaTorec} MM)\nG96G99S${sTorcKan}M3
G0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 5))}\nX${getTochkaVkonce(dVnutrTorcKan)}\nZ${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}
M8\n`+ newProhod(parseFloat(dVnutrTorcKan)) + `\nX${getTochkaVkonce(String((parseFloat(dNarujTorcKan)+parseFloat(faskaTorcKan)*2 - (parseFloat(plastinaTorec) * 2))))}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan)))}
G2X${getTochkaVkonce(String((parseFloat(dNarujTorcKan) - (parseFloat(plastinaTorec) * 2))))}Z${getTochkaVkonce(String(parseParseMod(nullKan)-parseParseMod(faskaTorcKan)))}R${parseParseMod(faskaTorcKan)}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan) - glubKan))}F${getTochkaVkonce(String(fTorcKan))}\nX${getTochkaVkonce(String(dVnutrTorcKan))}
G0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}

G1X${getTochkaVkonce(String(parseParseMod(dVnutrTorcKan) - parseParseMod(faskaTorcKan)*2))}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan)))}
G3X${getTochkaVkonce(String(dVnutrTorcKan))}Z${getTochkaVkonce(String(parseParseMod(nullKan)-parseParseMod(faskaTorcKan)))}R${parseParseMod(faskaTorcKan)}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}F${getTochkaVkonce(String(fTorcKan))}

G0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 5))}M9\nG28U0.\nG28W0.\nM5\nM1`
  }

}

  // -----kanavka nachalo sverhu

  if (vidTorcKan == 1){

    function prohodStrSverhu(diametr) {
      return `\nX${getTochkaVkonce(String(diametr))}\nG1Z${getTochkaVkonce(String(parseParseMod(nullKan) - glubKan))}F${getTochkaVkonce(String(fTorcKan))}\nG0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}`
    }

    function newProhod(diametr) {
      let prohodStrNew = ``
      let kolvoProhNew = kolvoProh
      
      for (let i = 0; i <= Math.ceil(kolvoProh); i++) {
        console.log(kolvoProhNew)
        if (kolvoProhNew === 1 ) {
          diametr = parseFloat(dNarujTorcKan) - (parseFloat(plastinaTorec) * 2);
          prohodStrSverhu(diametr);
          console.log("kolvoProh == 1")
          prohodStrNew += prohodStrSverhu(diametr);
        }
        else if (i === 0) {
          diametr -= (plastinaTorec) * 2;
          prohodStrSverhu(diametr);
          console.log("kolvoProh > 1")
          console.log(diametr)
          prohodStrNew += "+" + prohodStrSverhu(diametr);
        }
        else if (kolvoProhNew > 1 && i !==0) {
          diametr -= (plastinaTorec*perekritPlast) * 2;
          prohodStrSverhu(diametr);
          console.log("kolvoProh > 1")
          console.log(diametr)
          prohodStrNew += "+" + prohodStrSverhu(diametr);
        }
        else if (kolvoProhNew < 1 && 0 < kolvoProhNew) {
          console.log("kolvoProh < 1")
          diametr = dVnutrTorcKan;
          prohodStrSverhu(diametr);
          prohodStrNew += prohodStrSverhu(diametr);
        } 
        else {
          break;
        }

        kolvoProhNew = kolvoProhNew - 1;
        
    }
    return prohodStrNew
  }
    if (shirObr < plastinaTorec) { 
      document.querySelector('.outTorcKan').innerHTML = `Ширина канавки меньше ширины пластины`
    } else {
    document.querySelector('.outTorcKan').innerHTML = `T0101 (TORC KANAVKA )\n(PLASTINA ${plastinaTorec} MM)\nG96G99S${sTorcKan}M3
G0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 5))}\nX${getTochkaVkonce(String((parseFloat(dNarujTorcKan) - (parseFloat(plastinaTorec) * 2))))}\nZ${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}
M8\n`+ newProhod(parseFloat(dNarujTorcKan)) + `\nX${getTochkaVkonce(String((parseFloat(dNarujTorcKan)+parseFloat(faskaTorcKan)*2 - (parseFloat(plastinaTorec) * 2))))}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan)))}
G2X${getTochkaVkonce(String((parseFloat(dNarujTorcKan) - (parseFloat(plastinaTorec) * 2))))}Z${getTochkaVkonce(String(parseParseMod(nullKan)-parseParseMod(faskaTorcKan)))}R${parseParseMod(faskaTorcKan)}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan) - glubKan))}F${getTochkaVkonce(String(fTorcKan))}\nX${getTochkaVkonce(String(dVnutrTorcKan))}
G0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}
G1X${getTochkaVkonce(String(parseParseMod(dVnutrTorcKan) - parseParseMod(faskaTorcKan)*2))}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan)))}
G3X${getTochkaVkonce(String(dVnutrTorcKan))}Z${getTochkaVkonce(String(parseParseMod(nullKan)-parseParseMod(faskaTorcKan)))}R${parseParseMod(faskaTorcKan)}
G1Z${getTochkaVkonce(String(parseParseMod(nullKan) + 1))}F${getTochkaVkonce(String(fTorcKan))}
G0Z${getTochkaVkonce(String(parseParseMod(nullKan) + 5))}M9\nG28U0.\nG28W0.\nM5\nM1`
    }
  } 
}

// //-------------------

document.querySelector('.kodRadKan').onclick = kodRadKan;
function kodRadKan () {
  let zRadKan = document.querySelector(".zRadKan").value
  let shirRadKan = +document.querySelector(".shirRadKan").value
  let d1 = document.querySelector(".d1").value
  let d2 = document.querySelector(".d2").value
  let rKan = document.querySelector(".rKan").value
  let skrugl = document.querySelector(".skrugl").value
  let plastinaRad = +document.querySelector(".plastinaRad").value
  let perekritPlast = document.querySelector(".perekritPlast").value
  let fTorcKan = document.querySelector(".fTorcKan").value
  let sTorcKan = document.querySelector(".sTorcKan").value
  let vidRadKan = document.querySelector("#vidRadKan").value


  let glubKan = parseParseMod(d2) - parseParseMod(d1)
  console.log("Глубина",glubKan)
  let kolvoProh
  if (shirRadKan - plastinaRad === 0) {
      kolvoProh = 1 
    }
  else  {kolvoProh = 1 + ((shirRadKan - plastinaRad) / (plastinaRad * perekritPlast))}
console.log("Количество проходов",kolvoProh)

if (vidRadKan == 0){

  function prohodStrRadNaruj(zCoord){
    return `\nZ-${getTochkaVkonce(String(zCoord))}\nG1X${getTochkaVkonce(String(parseParseMod(d1) + 0.1))}F${getTochkaVkonce(String(fTorcKan))}
G0X${getTochkaVkonce(String(parseParseMod(d2) + 1))}`
  }

    function newProhod(zCoord) {
      let prohodStrNew = ``
      let kolvoProhNew = kolvoProh
      
      for (let i = 0; i <= Math.ceil(kolvoProh); i++) {
        console.log(kolvoProhNew)
        if (kolvoProhNew === 1) {
          zCoord = (parseFloat(zRadKan) + parseFloat(shirRadKan));     
          console.log("kolvoProh === 1")
          prohodStrNew += prohodStrRadNaruj(zCoord);
        }
        else if (kolvoProhNew > 1 && i === 0) {
          zCoord = (parseFloat(zRadKan) + parseFloat(plastinaRad)) 
          console.log("kolvoProhNew > 1 && i === 0")
          console.log(zCoord)
          prohodStrNew += prohodStrRadNaruj(zCoord);
        }

        else if (kolvoProhNew > 1 && i !==0) {
          console.log("kolvoProh > 1 && i !==0")
          zCoord += parseFloat(plastinaRad) * parseFloat(perekritPlast);
          console.log(zCoord)
          prohodStrNew += prohodStrRadNaruj(zCoord);
        }
        else if (kolvoProhNew < 1 && 0 < kolvoProhNew) {
          console.log("kolvoProh < 1")
          zCoord = (parseFloat(zRadKan) + parseFloat(shirRadKan));
          console.log(zCoord)    
          prohodStrNew += prohodStrRadNaruj(zCoord);
        } 
        else {
          break;
        }

        kolvoProhNew = kolvoProhNew - 1;
        
    }
    return prohodStrNew
  }

  if (shirRadKan < plastinaRad) { 
    document.querySelector('.outRadKan').innerHTML = `Ширина канавки меньше ширины пластины`
  } else {
  document.querySelector('.outRadKan').innerHTML = `T0101 (NARUJ RAD KANAVKA)\n(PLASTINA ${plastinaRad} MM)\nG96G99S${sTorcKan}M3
G0X${getTochkaVkonce(String(parseParseMod(d2) + 2))}\nG0Z-${getTochkaVkonce(String(Math.abs((parseFloat(zRadKan) + parseFloat(plastinaRad)))))}
M8` + newProhod((Math.abs(parseParseMod(zRadKan)))) + `
Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(shirRadKan) + parseFloat(skrugl))))}
G1X${getTochkaVkonce(d2)}F${getTochkaVkonce(String(fTorcKan))}
G2Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(shirRadKan))))}X${getTochkaVkonce(String(parseParseMod(d2) - parseFloat(skrugl)*2))}R${getTochkaVkonce(String(parseParseMod(skrugl)))}
G1X${getTochkaVkonce(String(parseParseMod(d1)))}
Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(plastinaRad))))}\nG0X${getTochkaVkonce(String(parseParseMod(d2) + 2))}
Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(plastinaRad) - parseFloat(skrugl))))}
G1X${getTochkaVkonce(d2)}F${getTochkaVkonce(String(fTorcKan))}
G3Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(plastinaRad))))}X${getTochkaVkonce(String(parseParseMod(d2) - parseFloat(skrugl)*2))}R${getTochkaVkonce(String(parseParseMod(skrugl)))}
G0X${getTochkaVkonce(String(parseParseMod(d2) + 2))}
M9\nG0Z5.\nG28U0.\nG28W0.\nM5\nM1`
  }

}

// // канавка внутренняя

if (vidRadKan == 1){

  function prohodStrRadNaruj(zCoord){
    return `\nZ-${getTochkaVkonce(String(zCoord))}\nG1X${getTochkaVkonce(String(parseParseMod(d2) + 0.1))}F${getTochkaVkonce(String(fTorcKan))}
G0X${getTochkaVkonce(String(parseParseMod(d1) - 1))}`
  }

    function newProhod(zCoord) {
      let prohodStrNew = ``
      let kolvoProhNew = kolvoProh
      
      for (let i = 0; i <= Math.ceil(kolvoProh); i++) {
        console.log(kolvoProhNew)
        if (kolvoProhNew === 1) {
          zCoord = (parseFloat(zRadKan) + parseFloat(shirRadKan));     
          console.log("kolvoProh === 1")
          prohodStrNew += prohodStrRadNaruj(zCoord);
        }
        else if (kolvoProhNew > 1 && i === 0) {
          zCoord = (parseFloat(zRadKan) + parseFloat(plastinaRad)) 
          console.log("kolvoProhNew > 1 && i === 0")
          console.log(zCoord)
          prohodStrNew += prohodStrRadNaruj(zCoord);
        }

        else if (kolvoProhNew > 1 && i !==0) {
          console.log("kolvoProh > 1 && i !==0")
          zCoord += parseFloat(plastinaRad) * parseFloat(perekritPlast);
          console.log(zCoord)
          prohodStrNew += prohodStrRadNaruj(zCoord);
        }
        else if (kolvoProhNew < 1 && 0 < kolvoProhNew) {
          console.log("kolvoProh < 1")
          zCoord = (parseFloat(zRadKan) + parseFloat(shirRadKan));
          console.log(zCoord)    
          prohodStrNew += prohodStrRadNaruj(zCoord);
        } 
        else {
          break;
        }

        kolvoProhNew = kolvoProhNew - 1;
        
    }
    return prohodStrNew
  }

  if (shirRadKan < plastinaRad) { 
    document.querySelector('.outRadKan').innerHTML = `Ширина канавки меньше ширины пластины`
  } else {
  document.querySelector('.outRadKan').innerHTML = `T0101 (NARUJ RAD KANAVKA)\n(PLASTINA ${plastinaRad} MM)\nG96G99S${sTorcKan}M3
G0X${getTochkaVkonce(String(parseParseMod(d1) - 2))}\nG0Z-${getTochkaVkonce(String(Math.abs((parseFloat(zRadKan) + parseFloat(plastinaRad)))))}
M8` + newProhod((Math.abs(parseParseMod(zRadKan)))) + `
Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(shirRadKan) + parseFloat(skrugl))))}
G1X${getTochkaVkonce(d1)}F${getTochkaVkonce(String(fTorcKan))}
G3Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(shirRadKan))))}X${getTochkaVkonce(String(parseParseMod(d1) + parseFloat(skrugl)*2))}R${getTochkaVkonce(String(parseParseMod(skrugl)))}
G1X${getTochkaVkonce(String(parseParseMod(d2)))}
Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(plastinaRad))))}\nG0X${getTochkaVkonce(String(parseParseMod(d1) - 2))}
Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(plastinaRad) - parseFloat(skrugl))))}
G1X${getTochkaVkonce(d1)}F${getTochkaVkonce(String(fTorcKan))}
G2Z-${getTochkaVkonce(String((parseFloat(zRadKan) + parseFloat(plastinaRad))))}X${getTochkaVkonce(String(parseParseMod(d1) + parseFloat(skrugl)*2))}R${getTochkaVkonce(String(parseParseMod(skrugl)))}
G0X${getTochkaVkonce(String(parseParseMod(d1) - 2))}
M9\nG0Z5.\nG28U0.\nG28W0.\nM5\nM1`
  }
}

}

document.querySelector('.kodManual').onclick = kodManual;
function kodManual () {
  let vManual = document.querySelector(".vManual").value
  let rezecManual = document.querySelector(".rezecManual").value

  document.querySelector('.outManual').innerHTML = `T0303()\nG96S${vManual}M${rezecManual}
G0X100.Z5.\nM8\n\n\n\nM9\nG0Z5.\nG28U0.\nG28W0.\nM5\nM1\n`
}


// добавлять весь код в правый textarea.
// // сделать в мобильной версии правый textarea снизу
// продумать радиуса на дне канавок
