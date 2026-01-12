//
//
//u0yyJgZj18po1tp4Z

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for(let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0
    const oddInteger = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("dark-theme")
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm(
      "service_9thl1up",
      "template_znpog6g",
      event.target,
      "u0yyJgZj18po1tp4Z"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable.  Please contact me directly on dbeauche12@gmail.com"
      );
    });
}

function modalExit() {
  document.body.classList.remove("modal--open");
  isModalOpen = false;
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}



// begins when the button is pushed
// the function begins

// the first line prior to the function does not DO anything
// it just creates a variable called isModalOpen, giving it a false value

//the if statement checks if the value is true, and since it is not, it skips the code block.
//so it always skips the code block upon opening the page.

//it goes down to the next section, where JS overwrites the value of isModalOpen to true
// and adds the CSS "modal--open" to the body

// "model--open" CSS contains the visibile setting which makes the modal visible

//button response is complete.  It has toggled the modal ON.

//so now if we hit the button again, the function is called againb
// isModalOpen now has a value of true from our prior function exectuion
// so our if statement is true,
//the next line returns the value to false,
//and our return is already set to execute and remove the "model--open" setting
//once again making the modal invisible.

//So in short, you hit the button
//the function runs
//the variable in its if statement has been defined as false
//so the block is skipped
//the value of isModalOpen is redfined to true,
// to get the right result from the next button push
//but our last button push adds "modal--open" to the body
//making it visible per the CSS "modal--open" settings
//if we push the button again, our function executes again
//this time based on the true value for "isModalOpen"
//and so our if statement is true, causing "modal--open" to be removed from body.
