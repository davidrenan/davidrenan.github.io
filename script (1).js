function reverterArray() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array.reverse();
    document.getElementById("resultado").innerText = "Array reverso: " + array.join(", ");
  }
  
  function ordemCrescente() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    document.getElementById("resultado").innerText = "Array em ordem crescente: " + array.join(", ");
  }
  