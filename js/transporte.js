function mostrar(){
    const seleccion = document.getElementById("seleccionsala").value;
    //console.log(seleccion)
    
    
    const sala1=20;
    const sala2=40;
    const sala3=30;
    
    if (seleccion == "1"){
        let ticketsComprados=prompt("cuantos tickets desea adquirir?")
        while(ticketsComprados<sala1){
            const cuposRestantes=sala1-ticketsComprados
            let cupos=prompt("cuantos ticket va a adquirir? Quedan: " + cuposRestantes)
            let cuposInt=parseInt(cupos)
            ticketsComprados+=cuposInt;
            if (ticketsComprados>=sala1){
                let resultado=document.getElementById("resultado").innerHTML = `El cupo de la sala esta lleno, no se puede vender mas tickets, por favor, revise el cupo de la sala #2 y #3.`
            }

    }
    } else if (seleccion == "2"){
        let ticketsComprados1=prompt("cuantos tickets desea adquirir?")
        while(ticketsComprados1<sala2){
            const cuposRestantes2=sala2-ticketsComprados1
            const cupos2=prompt("cuantos ticket va a adquirir? Quedan: " + cuposRestantes2)
            const cuposInt2=parseInt(cupos2)
            ticketsComprados1+=cuposInt2;
            if (ticketsComprados1>=sala2){
                let resultado=document.getElementById("resultado").innerHTML = `El cupo de la sala esta lleno, no se puede vender mas tickets, por favor, revise el cupo de la sala #1 y #3.`
            }

    }
    } else if (seleccion == "3"){
        let ticketsComprados2=prompt("cuantos tickets desea adquirir?")
        while(ticketsComprados2<sala3){
            const cuposRestantes3=sala3-ticketsComprados2
            const cupos3=prompt("cuantos ticket va a adquirir? Quedan: " + cuposRestantes3)
            const cuposInt3=parseInt(cupos3)
            ticketsComprados2+=cuposInt3;
            if (ticketsComprados2>=sala3){
                let resultado=document.getElementById("resultado").innerHTML = `El cupo de la sala esta lleno, no se puede vender mas tickets, por favor, revise el cupo de la sala #1 y #2.`
            }

    }
    }
}