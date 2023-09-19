document.querySelector('#btn-search').addEventListener('click', function () {
    const departure = document.querySelector('#departure').value;
         console.log('depart: ', departure)
    const arrival = document.querySelector('#arrival').value;
         console.log('arrivée :', arrival)
    // const newdate = new Date(document.querySelector('#date'))
    // console.log('date :', newdate)

           //1)créer la variable tripRow avec les div


    //console.log('click detected')

        fetch(`http://localhost:3000/trips`,{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({departure,arrival})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        if (!data.result) {
            document.querySelector('#second-card').innerHTML = `<p>${data.error}</p>`
        } else {
            for (let i = 0; i < data.allTrips.length; i++) {
                document.querySelector('#second-card').innerHTML +=  `
                <div class="row">
                        <div class="text-container">
                            <p style="color:black">${departure} > ${arrival} </p>
                        </div>
                        <div class="text-container">
                            <p style="color:black">HEURE</p>
                        </div>
                        <div class="text-container">
                            <p style="color:black">${data.allTrips[i].price} €</p>
                        </div>     
                        <button type="button" class="btn-book">Book</button>
                </div>
           ` 
            }
            
        }
            
    })

})

        // for (let i = 0; i < data.allTrips.length; i++) {

        //     if(data.allTrips.length===0) {
            
        //    console.log(data.allTrips[i])
            
        //    //1) créer la variable tripRow avec les div
        //    //2) REMOVE le contenu de second-card
        //    //3) REMPLACE PAR : document.querySelector('#second-card').textContent = tripRow



        //     //2) REMOVE le contenu de second-card NON !!!
        //     // this.parentNode.remove();

        //     //3) REMPLACE PAR : document.querySelector('#second-card').textContent = tripRow
        //     document.querySelector('#second-card').innerHTML += tripRow

        //     }  else {
        //         console.log("trip not found")
        //       }

        // }})




