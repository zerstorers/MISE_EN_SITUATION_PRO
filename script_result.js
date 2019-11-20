$(document).ready(function(){
    console.log('test');

    //GÉNÉRATION DYNAMIQUE //CLASSMENT DES IMAGES A PARTIR DE LA QUATRIEME

    for (i = 0; i < pictures.length; i++) {
        console.log('test');

        var image = pictures[i].url;

        $(".container-image").append('<div class="card article" style="width: 23rem;">')
        var card = $(".container-image .card").eq(i)

        $(card).append('<img src="https://picsum.photos/200/300" class="" alt="...">')
        // pictures[i].url

        $(card).append('<div class="card-body text-center">')
        var cardBody = $(".card .card-body").eq(i);

        $(cardBody).append('<h5 class="card-title">"' + pictures[i].title + '"</h5>')
        $(cardBody).append('<p class="card-text">' + pictures[i].subtile + '</p>')
        $(cardBody).append('<div class="div-btn">')
        var div = $(".card .card-body .div-btn").eq(i)

        var cpt = i+4
        $(div).append('<p class="cpt">' + cpt + '</p>')
        $(div).append('<p>Score : ' + pictures[i].votes + ' </p>')




    }

    // GENERATION DYNAMIQUE // TOP-3 IMAGES

    for (i = 0; i < 3; i++) {
        console.log('lol');

        var image = pictures[i].url;

        $(".top-images").append('<div class="card article" style="width: 30rem;">')
        var card = $(".top-images .card").eq(i)
        $(card).append('<img src="https://picsum.photos/200/300" class="" alt="...">')
        // pictures[i].url

        $(card).append('<div class="card-body text-center ">')
        var cardBody = $(".card .card-body").eq(i);

        $(cardBody).append('<h5 class="card-title">"' + pictures[i].title + '"</h5>')
        $(cardBody).append('<p class="card-text">' + pictures[i].subtile + '</p>')

        if (i == 0){
            $(cardBody).append('<i class="fas fa-trophy text-warning m-2" ></i>')
        }
        else if (i == 1){
            $(cardBody).append('<i class="fas fa-trophy text-muted m-2" ></i>')
        }

        else if (i == 2){
            $(cardBody).append('<i class="fas fa-trophy text-dark m-2" ></i>')
        }



        $(cardBody).append('<div class="d-flex justify-content-center div-score">')
        var div = $(".card .card-body .div-score").eq(i)


        $(div).append('<p> ' + pictures[i].votes + ' </p>')

    }

    
    

})




// <div class="card article" style="width: 30rem;">
// <img src="https://picsum.photos/200/350" class="" alt="...">
// <div class="card-body text-center">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk
//         of the card's content.</p>
//     <div class="d-flex justify-content-center">
//         <p>score :</p>
//     </div>
// </div>
// </div>














