AOS.init();
const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contAsHoras = setInterval(function() {
 const agora = new Date();
 const timeStampAtual = agora.getTime();
 const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

 const diasRestantes = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
 const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
 const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

 console.log(diasRestantes);
 console.log(horasAteOEvento);
 console.log(minutosAteOEvento);
 console.log(segundosAteOEvento);

 document.getElementById('contador').innerHTML = `${diasRestantes}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
 if (distanciaAteOEvento < 0) {
    clearInterval(contAsHoras);
    document.getElementById('contador').innerHTML = 'Evento Expirado';
 }
}, 1000);
