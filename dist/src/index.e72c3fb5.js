AOS.init();
const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasRestantes = Math.floor(distanciaAteOEvento / 86400000);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % 86400000 / 3600000);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % 3600000 / 60000);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % 60000 / 1000);
    console.log(diasRestantes);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);
    document.getElementById("contador").innerHTML = `${diasRestantes}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contAsHoras);
        document.getElementById("contador").innerHTML = "Evento Expirado";
    }
}, 1000);

//# sourceMappingURL=index.e72c3fb5.js.map
