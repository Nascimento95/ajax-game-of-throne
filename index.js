$(function(){
	
    var array = []
    

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {
            array = data
            tableauDisplay(data)
        }
    });
    
    




    // function qui boucle mes data dans un tableau qui s'apelle array
    function tableauDisplay(data){
        $("#mettre").html(''); 
        data.forEach(function(personnage, index) {
            $("#mettre").html( $("#mettre").html() + `  

                        <div class="col-xs-12 col-lg-6 col-xl-4 mt-5">
                            <div>
                                <figure class="figure">
                                    <img  src="${personnage.imageUrl}" alt="personage de game of throne ${personnage.fullName}"/>
                                    <figcaption class="text-dark fs-5 fw-bold figure-caption mt-3 text-start">${personnage.fullName}</figcaption>
                                    <figcaption class="text-dark  figure-caption mt-3 text-start">${personnage.title}</figcaption>
                                </figure>  
                            </div>
                        </div>
            `);
        })
    }
    
    // function jquery qui recup la valeur de l'input et la compare avec le fullname de mes object
     
        $("input").keyup(function(){
            var valeurInput = $("input").val().toLowerCase();
            var resulta = array.filter(function(person) {
                return person.fullName.toLowerCase().includes(valeurInput);
            });
              
              tableauDisplay(resulta)
        });
        
        // 
        $("#random").click(function(){
            var arrayShuffle = _.shuffle(array);
            // fonction qui me boucle mon nouveau tableau pour l'afficher par la suite en lui passant la variable qui contient mon arrayshuffle
            tableauDisplay(arrayShuffle)
        });
        //  code qui permet de trié un array par ordre alphabétique grace a lodash
        $("#trie").click(function(){
            var triage = _.sortBy(array, ['type', 'fullName']);
            tableauDisplay(triage)
        });

});
