/** @module Login-Script */
/**
* Membuat variabel loginFormElement untuk tmpilan form
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel inputEmailElement untuk tampilan from
* @constant {HTMLElement} 
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat tampilan inputPassword Element
* @constant {HTMLElement} 
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password
* @constant {string}
*/
const expectedPassword = 'superpassword';


// Menambahkan aksi klik pada button Submit
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    /**
    * Membuat variabel email untuk menyimpan nilai email
    * @constant {string}
    */
    const email = inputEmailElement.value;


    /**
    * Membuat variabel password untuk menyimpan nilai password
    * @constant {string}
    */
    const password = inputPasswordElement.value;
    
    // Membuat logika perbandingan untuk memanggil informasi email dan password
    if (email == expectedEmail && password == expectedPassword) {

      // Jika email dan password sudah sesuai, maka akan menuju halaman Home
      goToHome();
    } else {
      
      // Jika salah satu atau kedua input tidak sesuai, akan menampilkan PopUp error
      showPopUp();
    }
});
