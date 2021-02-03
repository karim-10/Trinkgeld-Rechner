
 function berechnen() {
     console.log("test")
     let price = document.getElementById("price").value
     let person = document.getElementById("person").value
     let service = document.getElementById("service").value
     console.log(price)
     console.log(Number(price))
     console.log(+price)
     console.log(price * 1)
     if (service == 'notSelected') {
        document.getElementById("alert").innerHTML = "Du musst angeben wie war der Service"
         document.getElementById("alert").innerHTML = ''
     } else if (service == 'good') {
         document.getElementById('total').innerHTML = `Gesamtsumme ist :${Number(price) + (Number(price) * 0.2)}€`
         document.getElementById('trink').innerHTML = `Trinkgeld ist: ${Number(price) * 0.2}€`
       document.getElementById("pro-person").innerHTML = `pro person :${((Number(price) + (Number(price) * 0.2)) / Number(person)).toFixed(2)}€`

    } else if (service == 'okay') {
         document.getElementById("alert").innerHTML = ''
        document.getElementById('trink').innerHTML = `Trinkgeld ist: ${Number(price) * 0.1}€`
        document.getElementById('total').innerHTML = `Gesamtsumme ist :${Number(price) + (Number(price) * 0.1)}€`
        document.getElementById("pro-person").innerHTML = `pro person :${((Number(price) + (Number(price) * 0.1)) / Number(person)).toFixed(2)}€`

    } else if (service == 'bad') {
         document.getElementById("alert").innerHTML = ''
         document.getElementById('trink').innerHTML = `Trinkgeld ist: ${Number(price) * 0.02}€`
         document.getElementById('total').innerHTML = `Gesamtsumme ist :${Number(price) + (Number(price) * 0.02)}€`
         document.getElementById("pro-person").innerHTML = `pro person :${((Number(price) + (Number(price) * 0.02)) / Number(person).toFixed(2))}€`
     }

} 