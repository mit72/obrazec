document.addEventListener("DOMContentLoaded", function() {
    new Cleave('#postnaStevilka', {
        numeral: true,
        numeralPositiveOnly: true,
        numeralIntegerScale: 4,
        numeralDecimalScale: 0,
        numeralThousandsGroupStyle: 'none'
    });

    document.getElementById("forma").addEventListener("submit", function(event) {
        event.preventDefault(); 

                
        const birthdateInput = document.getElementById("datumRojstva").value;
        const birthdate = new Date(birthdateInput);

                    
        const today = new Date();
        const fifteenYearsAgo = new Date();
        fifteenYearsAgo.setFullYear(today.getFullYear() - 16);

                    
        if (birthdate > fifteenYearsAgo) {
            Swal.fire({
                icon: 'error',
                title: 'Premladi ste',
                text: 'Morate biti starejši od 16 let za včlanitev.',
            });
        } else {

            Swal.fire({
                title: "Uspeh!",
                text: "Vaša zahteva je bila oddana!",
                icon: "success"
                            
            })
            .then((result) => {
                if (result.isConfirmed) {
                    event.target.submit();
                }
            });
        }
    });
    document.querySelector("#drzava").addEventListener("click", function() {
        this.style.color = "black";
    });

    document.querySelector("#kategorija").addEventListener("click", function() {
        this.style.color = "black";
    });
});

