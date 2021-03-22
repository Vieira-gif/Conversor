function converterGraus() {
  var localDoResultadoDaConversaoTermica = document.getElementById(
    "grausConvertidos"
  );
  const celsius = document.getElementById("caixaDeCelsius");

  if (celsius.value.length <= 0) {
    alert("[ERRO!] Caixa está vazia!");
  } else {
    let c = parseFloat(celsius.value);
    localDoResultadoDaConversaoTermica.innerHTML = `${c.toFixed(1)}° são ${(
      (c * 9) / 5 +
      32
    ).toFixed(1)}F`;
  }
  celsius.value = "";
  celsius.focus();
}

function converterLibra() {
  var localDoResultadoDaConversaoMonetaria = document.getElementById(
    "librasConvertidas"
  );
  const libras = document.getElementById("caixaDeLibras");

  if (libras.value.length <= 0) {
    alert("[ERRO!] Caixa está vazia!");
  } else {
    let l = parseFloat(libras.value);
    localDoResultadoDaConversaoMonetaria.innerHTML = `£${l.toFixed(
      2
    )} são $${(l * 1.39).toFixed(2)}`;
  }
  libras.value = "";
  libras.focus();
}
