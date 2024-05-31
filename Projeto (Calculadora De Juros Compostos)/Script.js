document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const tempo = document.getElementById('tempo').value;

    const total = value * (1 + fee)**tempo;

    document.getElementById('total').innerHTML = ("R$: " + total.toFixed(2).replace('.', ','));
});