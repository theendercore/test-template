export function br() {
  document.querySelector("#console").innerHTML += "<br>";
}









export function log(string: string, value: any) {
  console.log(string, value);

  document.querySelector("#console").innerHTML +=
    string + '<span class="val">' + JSON.stringify(value) + "</span>";
  br();
  
  
}















let timesCalled: number = 1;

export function test(...args: any) {
  let func = args[0];
  log(timesCalled + "-Function :", args[1]);
  for (let i = 2; i < args.length; i++) {
    let text = "└═─test " + (i - 1) + ": ";
    if (Array.isArray(args[i])) {
      if (args[i][1] === "SingleArray") {
        log(text, func(args[i][0]));
      } else {
        log(text, func(...args[i]));
      }
    } else {
      log(text, func(args[i]));
    }
  }
  br();
  timesCalled++;
}
