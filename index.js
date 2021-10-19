$(function(){
	
    var array = []
    var documentInput = document.getElementsByClassName(".valeur")

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {
            array = data
            tableauDisplay(data)
        }
    });
    
    




    // function qui boucle mes data dans un tableau qui s'apelle array
    function tableauDisplay(data){
        console.log(" log de data",data);
        $("#mettre").html(''); 
        data.forEach(function(personnage, index) {
            console.log("les personnage sont",personnage.firstName , index)
            
            $("#mettre").html( $("#mettre").html() + `  

                        <div class="col-4 mt-5">
                            <div>
                                <figure class="figure">
                                    <img class="img-fluid" src="${personnage.imageUrl}" alt="personage de game of throne ${personnage.fullName}"/>
                                    <figcaption class="text-dark fw-bold figure-caption text-start">${personnage.fullName} </br>${personnage.title}</figcaption>
                                </figure>  
                            </div>
                        </div>
            `);
        })
    }
    
    // function qui recup la valeur de l'input
     
        $("button").click(function(){
           var valeurInput = $("input").val().toLowerCase();
            console.log(valeurInput);
            var resulta = array.filter(function(person) {
                return person.fullName.toLowerCase().includes(valeurInput);
              });
              
              tableauDisplay(resulta)
        });
        
   
    


});
