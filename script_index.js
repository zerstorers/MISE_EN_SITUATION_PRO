$(document).ready(function () {
    console.log('test');
    // GÉNÉRATION DYNAMIQUE // INDEX 

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
        $(cardBody).append('<div class="d-flex justify-content-between div-btn">')
        var div = $(".card .card-body .div-btn").eq(i)

        $(div).append('<button class="btn-dislike" id="btn-dislike-' + i + '"><i class="fas fa-poo"></i></button>')
        $(div).append('<p id="votes-'+ i +'"> ' + pictures[i].votes + ' </p>')
        $(div).append('<button class="btn-like" id="btn-dislike-' + i + '"><i class="fas fa-heart"></i></button>')

        // FONCTIONNEMENT BTN+/BTN-


    }
    $(".btn-dislike").click(function () {
        var idBtn = $(this).attr("id")
        console.log(idBtn)

        var idVotes = idTrash.replace("btn-dislike-", "votes-")
        console.log(idVotes)
        var row = $("#" + idVote)
        

        var idCart = idTrash.replace("trash-", "")
        for (let i = 0; i < cart.length; i++) {
            if (idCart == cart[i].productId) {
                cart.splice(i, 1)
                var cart_json = JSON.stringify(cart);
                sessionStorage.setItem("cart", cart_json);

            }

            // TRI PAR DECROISSANCE
            // var nb = 0
            // for (let i = 0; i < pictures.length; i++) {
            //     if (pictures[i].votes > nb){
            //         nb = pictures[i].votes
            //         console.log(nb);

            //     }

            // }

        })


