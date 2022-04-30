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
    },
];
/////ouvrir le modal//
var img = document.querySelectorAll( '.card_img' )
var price = document.querySelectorAll( '.price' )
var card_titre = document.querySelectorAll( '.card-title' )


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
                href="#"
                class="btn btn-primary ajout"
                >Ajouter au panier</a
            >
        </div>
    </div>`)
}
//////////////////////////////////////////////////////////////
var panier = []
var somme = 0
var ajout = document.querySelectorAll( '.ajout' )
ajout.forEach( elemente => {
    var nom = elemente.parentNode.childNodes[ 1 ].innerText;
    elemente.addEventListener( 'click', function () {
        elemente.style.display = "none"
        var prix = elemente.previousElementSibling.childNodes[ 1 ].innerText.replace( '€', "" )
        $( '.lacarte' ).append( `<div  class=" card-body ">
        <h6 class="card-title">
            Désignation : <span class="designation">${ nom }</span>
        </h6>
        <form action="">
            <label for="quantity">Quantité</label>
            <input  class="my-2 box " value="1" type="number" name="" id="quantity" min="1" max="100" />
            <p>Prix : <strong class="couteux">${ prix } €</strong></p>
        </form>
        <button type="button" class="btn btn-danger danger_droit supp">
            Supprimer
        </button>
    </div>`)
        $( '.panier' ).after( `<div class="del">
    <strong class="p-3">${ nom }</strong><div class="dflex">
    <p class="m-3">Prix unitaire : <strong>${ prix } €</strong></p>
    <p class="m-3">Quantité : <strong class="quant_confirm">pas trouvé 😭</strong></p>
</div>
<hr class=" dlfex m-3">`)
        document.querySelectorAll( '.box' ).forEach( element => {
            var coûter = elemente.previousElementSibling.childNodes[ 1 ].innerText.replace( '€', "" )
            element.addEventListener( 'keyup', function () {
                if ( element.value.length < 1 ) {
                    element.value = 1
                }
                var calcou = elemente.parentNode.childNodes[ 7 ].childNodes[ 1 ].innerText.replace( '€', "" )
                if ( element.value == "" ) {
                    coûter = elemente.parentNode.childNodes[ 7 ].childNodes[ 1 ].innerText.replace( '€', "" )
                } else {
                    coûter = parseInt( element.parentNode.childNodes[ 5 ].childNodes[ 1 ].innerText.replace( '€', " " ) ) * parseInt( element.value )
                    console.log( coûter )

                }
                var sum = 0
                var couteux = document.querySelectorAll( '.couteux' )
                for ( let i = 0; i < couteux.length; i++ ) {
                    const element = couteux[ i ];
                    console.log( couteux[ i ].parentNode.parentNode.childNodes[ 3 ].value )
                    sum += parseInt( ( element.innerText.replace( '€', '' ) ) * parseInt( couteux[ i ].parentNode.parentNode.childNodes[ 3 ].value ) )
                    document.querySelector( ".total" ).innerText = sum
                    document.querySelector( ".a_payer" ).innerText = sum
                }
            } );
        } );
        //gérer la suppression//
        var supp = document.querySelectorAll( '.supp' )
        supp.forEach( element => {
            $( element ).click( function () {
                this.parentNode.remove()
                $( '.del' ).first().remove()
                elemente.style.display = "initial"
                //RECALCULE LE PRIX/
                var sum = 0
                var couteux = document.querySelectorAll( '.couteux' )
                for ( let i = 0; i < couteux.length; i++ ) {
                    const element = couteux[ i ];
                    var product = couteux[ i ].parentNode.parentNode.parentNode.childNodes[ 1 ].childNodes[ 1 ].outerText
                    console.log( couteux[ i ].parentNode.parentNode.parentNode.childNodes[ 1 ].childNodes[ 1 ].outerText )
                    sum += parseInt( ( element.innerText.replace( '€', '' ) ) * parseInt( couteux[ i ].parentNode.parentNode.childNodes[ 3 ].value ) )
                    document.querySelector( ".total" ).innerText = sum
                    document.querySelector( ".a_payer" ).innerText = sum
                }
                // si le tableau 'couteux'est nul, le prix reviens à zéro
                if ( couteux.length == 0 ) {
                    document.querySelector( ".total" ).innerText = 0
                    document.querySelector( ".a_payer" ).innerText = 0
                }
            } )
        } );

    } )

} )
//appeler la fonction qui calcule au moment du cliquer sur voir mon panier
$( "#voir_mon_pan" ).click( function () {
    var sum = 0
    var couteux = document.querySelectorAll( '.couteux' )
    for ( let i = 0; i < couteux.length; i++ ) {
        const element = couteux[ i ];
        console.log( couteux[ i ].parentNode.parentNode.childNodes[ 3 ].value )
        sum += parseInt( ( element.innerText.replace( '€', '' ) ) * parseInt( couteux[ i ].parentNode.parentNode.childNodes[ 3 ].value ) )
        document.querySelector( ".total" ).innerText = sum
        document.querySelector( ".a_payer" ).innerText = sum
    }
} )
////////////////////////2ème modal (formulaire)//////////////////////////
var inputs = document.querySelectorAll( "input[type=text]" )
$( '#enregistrer' ).hide()
for ( let index = 0; index < inputs.length; index++ ) {
    const element = inputs[ index ];

    element.addEventListener( 'keyup', function () {
        var reg_nom_prenom = /^[a-zA-Z- ]+$/
        var reg_mail = /^[a-zA-Z0-9._%-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,4}$/
        var reg_adress = /[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/
        var reg_num = /^[0-9]{10}$/

        function conTrol ( regex, input ) {
            var test = regex.test( input.value )
            if ( !test ) {
                input.style.backgroundColor = "#f76f72"
            } else {
                input.style.backgroundColor = "#e9effd"
            }
            return test
        }
        conTrol( reg_nom_prenom, inputs[ 0 ] ), conTrol( reg_nom_prenom, inputs[ 1 ] ), conTrol( reg_mail, inputs[ 2 ] ), conTrol( reg_adress, inputs[ 4 ] ), conTrol( reg_num, inputs[ 3 ] )
        ///condition qui fera apparaître le bouton enregistrer///
        if ( conTrol( reg_nom_prenom, inputs[ 0 ] ) === true && conTrol( reg_nom_prenom, inputs[ 1 ] ) === true && conTrol( reg_mail, inputs[ 2 ] ) === true && conTrol( reg_num, inputs[ 3 ] ) === true && conTrol( reg_adress, inputs[ 4 ] ) === true ) {
            $( '#enregistrer' ).show( 300 )
        } else {
            $( '#enregistrer' ).hide( 300 )
        }
    } )
}
for ( let i = 0; i < inputs.length; i++ ) {
    const element = inputs[ i ];
    ////////////////////////3ème Validation de la commande//////////////////////////
    $( "#enregistrer" ).click( function () {
        $( ".valid_nom" ).text( $( inputs[ 0 ] ).val() )
        $( ".valid_prenom" ).text( $( inputs[ 1 ] ).val() )
        $( ".valid_tel" ).text( $( inputs[ 3 ] ).val() )
        $( ".valid_email" ).text( $( inputs[ 2 ] ).val() )
        $( ".valid_adress" ).text( $( inputs[ 4 ] ).val() )
    } )
}

///rediriger vers la page de confirmation

$( '.finaliser' ).click( function () {
    window.location.href = "valide.html"
} )