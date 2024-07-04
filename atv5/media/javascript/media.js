var n1, n2, n3, media
n1 = parseFloat(prompt("Qual sua primeira nota?"))
n2 = parseFloat(prompt("Qual sua segunda nota?"))
n3 = parseFloat(prompt("Qual sua terceira nota?"))
media = (n1 + n2 + n3) / 3
if (media >= 60) {
    window.alert("Sua media foi " + media + ", você está aprovado")
}
else {
    window.alert("Sua media foi " + media + ", você está reprovado")
}

