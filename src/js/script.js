function Calcular() {
    let a = document.getElementById("txtA").value;
    let b = document.getElementById("txtB").value;
    let c = document.getElementById("txtC").value;
    if (a === "" || b === "" || c ==="") {
        alert("Insira todos os coeficientes.")
    }
    else {
        let delta = Math.pow(b,2) - (4*a*c);

        if (delta < 0) {
            alert("A equação não possui raizes reais.");
        }
        else {
            let raizA = (-b + Math.sqrt(delta)) / (2*a);
            let raizB = (-b - Math.sqrt(delta)) / (2*a);
            document.getElementById("txtDelta").value = delta.toFixed(2);
            document.getElementById("txtRaizA").value = raizA.toFixed(2);
            document.getElementById("txtRaizB").value = raizB.toFixed(2);
        } 
    }   
}

function Limpar() {
    document.getElementById("txtA").focus();
}