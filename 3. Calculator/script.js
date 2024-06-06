let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let target = e.target;

        // Adjust the target if it is an icon inside a button
        if (target.tagName === 'I') {
            target = target.parentElement;
        }

        let value = target.innerHTML.trim();
        let inputElement = document.querySelector('.input');  // Define inputElement here


        if (value.includes('fa-delete-left')) {
            // Handle delete action
            string = string.slice(0, -1);
            document.querySelector('.input').value = string;
        }
        else if (value === "=") {
            try {
                string = eval(string);
            }
            catch (error) {
                string = "Error";
            }
            document.querySelector('.input').value = string;
        }
        else if (value === "C") {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (value.includes('fa-divide')) {
            string += "/";
            document.querySelector('.input').value = string;
        }
        else if (value === "x") {
            string += "*";
            document.querySelector('.input').value = string;
        }
        else {
            string += value;
            document.querySelector('.input').value = string;
        }



        // Update the input element value
        inputElement.value = string;

        // Debugging statements
        console.log("Scroll Width before setting scrollLeft: ", inputElement.scrollWidth);

        // Ensure the input element scrolls to the right
        inputElement.scrollLeft = inputElement.scrollWidth;

        // Debugging statements
        console.log("Scroll Left after setting scrollLeft: ", inputElement.scrollLeft);

    });
});