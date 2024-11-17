document.addEventListener("DOMContentLoaded", function() {
    new Cleave('#postnaStevilka', {
        numeral: true,
        numeralPositiveOnly: true,
        numeralIntegerScale: 4,
        numeralDecimalScale: 0,
        numeralThousandsGroupStyle: 'none'
    });

    const asterisk = document.querySelector('.credits');

    asterisk.addEventListener('click', () => {

        Swal.fire({
            title: 'Avtor',
            text: 'Avtor te naloge je Mitja Filej, 4.Rb',
            icon: 'info',
            confirmButtonText: 'OK'
            customClass: {
                    confirmButton: 'premladi-sweet-alert',
                    popup: 'border-sweet-alert',
                }
        });

    });

    document.getElementById("forma").addEventListener("submit", function(event) {
        event.preventDefault(); 

                
        const birthdateInput = document.getElementById("datumRojstva").value;
        const birthdate = new Date(birthdateInput);

        const today = new Date();
        const sestnajst = new Date();
        sestnajst.setFullYear(today.getFullYear() - 16);

        if (birthdate > sestnajst) {
            Swal.fire({
                icon: 'error',
                title: 'Premladi ste',
                text: 'Morate biti starejši od 16 let za včlanitev.',
                confirmButtonText: 'OK',
                iconColor: 'rgb(195, 45, 47)',
                customClass: {
                    confirmButton: 'premladi-sweet-alert',
                    icon: 'premladi-icon',
                    popup: 'border-sweet-alert'
                }
            });
        } else {

            Swal.fire({
                title: "Uspeh!",
                text: "Vaša zahteva je bila oddana!",
                icon: "success",
                customClass: {
                    confirmButton: 'premladi-sweet-alert',
                    popup: 'border-sweet-alert',
                }
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

