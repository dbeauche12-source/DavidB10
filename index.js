//
//
//u0yyJgZj18po1tp4Z

function contact(event) {
event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible";
emailjs
.sendForm(
        "service_9thl1up",
        "template_znpog6g",
        event.target,
        "u0yyJgZj18po1tp4Z"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable.  Please contact me directly on dbeauche12@gmail.com"
        );
        })
        }





        let isModalOpen = false;
        function toggleModal() {
            isModalOpen = !isModalOpen;
            if (ismodalOpen) {
                return document.body.classList.remove("model--open");
            }
            //toggle modal
            document.body.classList += " modal--open";
        }



