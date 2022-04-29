var produit = [
    {
        nom: 'Blouson Cuir Homme OSX',
        image: 'https://s1.rockagogostatic.com/ref/pls/pls15/blouson-cuir-mec-marque-osx-brando-jacket-pr.jpg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 225
    },
    {
        nom: 'polo cintre slim fit en coton basic bleu',
        image: 'https://photos6.spartoo.com/photos/188/18830673/18830673_500_A.jpg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 75
    },
    {
        nom: 'Robe rose croisée à boucler',
        image: 'https://m1.quebecormedia.com/emp/emp/A1_2_1_d64e884e-d21e-41ab-8eb0-2baf6b656c00_ORIGINAL.jpg?impolicy=cropresize&x=0&y=0&w=802&h=1086&width=925&height=925',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 50
    },
    {
        nom: 'Sneakers Adidas Original Homme',
        image: 'https://www.kiffoo.com/7220-large_default/basket-adidas-original-homme.jpg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 159
    },
    {
        nom: 'Pantalon jogging Nike Just Do It - Noir',
        image: 'https://api.vs.prod.footkorner.nbs-aws.com/img/600/744/resize/catalog/product/f/o/footkorner-pantalon-nike-just-do-it-cu4050-010-noir_1_.jpeg',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 27
    },
    {
        nom: 'Robe verte ',
        image: 'https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27065771_40_R.jpg?ts=1640188185591&imwidth=412&imdensity=2',
        descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, laboriosam.',
        prix: 38
    }
];

/////ouvrir le modal//


var img = document.querySelectorAll( '.card_img' )
var price = document.querySelectorAll( '.price' )
var card_titre = document.querySelectorAll( '.card-title' )
var ajout = document.querySelectorAll( '.ajout' )

for ( let i = 0; i < produit.length; i++ ) {
    const element = produit[ i ];

    $( '#container' ).append( `<div class="my-2">
    <div class="card" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-title">${ element.nom }</h5>
            <div class="card_img">
                <img  src="${ element.image }" alt="hey" />
            </div>
            <p class="card-text">
            ${ element.descrption }
            </p>
            <p>Prix : <span class="price">${ element.prix } €</span></p>
            <a
                data-bs-toggle="modal"
                data-bs-target="#valider_infos_panier"
                
                href="#"
                class="btn btn-primary ajout"
                >Ajouter au panier</a
            >
        </div>
    </div>`)

}
/*
for ( let e = 0; e < price.length; e++ ) {
    const el = price;

    for ( let i = 0; i < produit.length; i++ ) {
        var et = produit
        function prix ( par ) {
            el[ par ].innerHTML = et[ par ].prix + ' €'
        }
        prix( 0 ); prix( 1 ); prix( 2 ); prix( 3 ); prix( 4 ); prix( 5 )
    }
}
for ( let e = 0; e < img.length; e++ ) {

    for ( let i = 0; i < produit.length; i++ ) {
        var et = produit
        function image ( p ) {
            img[ p ].innerHTML = `<img src="${ et[ p ].image }" alt="nope">`
        }
        image( 0 ); image( 1 ); image( 2 ); image( 3 ); image( 4 ); image( 5 )
    }
}
for ( let e = 0; e < card_titre.length; e++ ) {
    for ( let i = 0; i < produit.length; i++ ) {
        var et = produit
        function cardi_titre ( p ) {
            card_titre[ p ].innerHTML = `${ et[ p ].nom } `
        }
        cardi_titre( 0 ); cardi_titre( 1 ); cardi_titre( 2 ); cardi_titre( 3 ); cardi_titre( 4 ); cardi_titre( 5 )
    }
}*/
//////////////////////////////////////////////////////////////
var panier = []

ajout.forEach( elemente => {
    elemente.addEventListener( 'click', () => {
        elemente.style.display = "none"
        var titre = elemente.parentNode.childNodes[ 1 ].innerText
        var coûter = elemente.previousElementSibling.childNodes[ 1 ].innerText.replace( '€', "" )
        var nb = 1

        console.log()

        var crea = document.createElement( 'div' )
        crea.innerHTML = `<div  class=" card-body ">
           <h6 class="card-title">
               Désignation : <span class="designation">${ titre }</span>
           </h6>
           <form action="">
               <label for="quantity">Quantité</label>
               <input class="my-2 box " value="${ nb }" type="number" name="" id="quantity" />
               <p>Prix : <strong class="coûteux">${ coûter } €</strong></p>
           </form>
           <button type="button" class="btn btn-danger danger_droit">
               Supprimer
           </button>
       </div>`
        document.querySelector( '.lacarte' ).appendChild( crea )
        document.querySelectorAll( '.box' ).forEach( element => {
            var tot = []

            element.addEventListener( 'change', function () {

                var calcou = elemente.parentNode.childNodes[ 7 ].childNodes[ 1 ].innerText.replace( '€', "" )
                if ( element.value == "" ) {
                    coûter = elemente.parentNode.childNodes[ 7 ].childNodes[ 1 ].innerText.replace( '€', "" )
                } else {
                    coûter = calcou * parseInt( element.value )
                    element.nextElementSibling.childNodes[ 1 ].innerText = coûter

                }
                var sum = 0
                document.querySelectorAll( '.coûteux' ).forEach( element => {
                    sum += parseInt( element.innerText )
                    document.querySelector( ".total" ).innerText = sum
                } );
            } )
        } );
    } )
} );

////////////////////////2ème modal//////////////////////////

var inputs = document.querySelectorAll( "input[type=text]" )

console.log( document.querySelectorAll( "input[type=text]" ) )


for ( let i = 0; i < inputs.length; i++ ) {
    console.log( inputs[ 0 ] )
    var reg_nom_prenom = /^[a-zA-Z- ]+$/
    var reg_mail = /^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/

    var req_adresse = /[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/
    function conTrol ( puts, regex ) {
        puts.addEventListener( "keyup", function () {
            if ( !regex.test( puts.value ) ) {
                puts.style.backgroundColor = "#f76f72"


            } else {
                puts.style.backgroundColor = "#e9effd"


            }
        } )

    }
    conTrol( inputs[ 0 ], reg_nom_prenom ), conTrol( inputs[ 1 ], reg_nom_prenom ), conTrol( inputs[ 2 ], reg_mail ), conTrol( inputs[ 4 ], req_adresse )

    $( inputs[ 3 ] ).keyup( function () {
        if ( $( inputs[ 3 ] ).val().length > 10 || isNaN( $( inputs[ 3 ] ).val() ) ) {
            inputs[ 3 ].style.backgroundColor = "#f76f72"

        } else {
            inputs[ 3 ].style.backgroundColor = "#e9effd"

        }

    } )
}

