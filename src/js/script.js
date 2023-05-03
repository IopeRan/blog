// animasi pada navbar
// Dapatkan elemen navbar-wrapper
const navbarWrapper = document.querySelector('.navbar-wrapper');

// Inisialisasi array warna
const colors = ['#00ff00', '#ff0000', '#0000ff', '#ffff00'];

// Inisialisasi variabel index warna
let colorIndex = 0;

// Buat fungsi untuk mengubah warna border-bottom secara periodik
function changeBorderColor() {
  // Ubah warna border-bottom
  navbarWrapper.style.borderBottom = `5px solid ${colors[colorIndex]}`;

  // Tambahkan 1 pada index warna dan atur ulang ke 0 jika melebihi panjang array warna
  colorIndex = (colorIndex + 1) % colors.length;

  // Set waktu tunggu dan panggil fungsi kembali
  setTimeout(changeBorderColor, 1000); // ubah warna setiap 1 detik
}

// Jalankan fungsi untuk mengubah warna border-bottom secara periodik
changeBorderColor();

// Animasi border pada menu home
// Dapatkan elemen home-greet-fullname
const homeGreetFullname = document.querySelector('.home-greet-fullname');

// Set timeout untuk mengubah ukuran border-top setelah 1 detik
setTimeout(function() {
    homeGreetFullname.style.borderTopWidth = '2px'; // atur ukuran border-top menjadi 2px
}, 1);



// animasi typing pada fullname di menu home
// Dapatkan elemen dengan class "home-typing"
const homeTyping = document.querySelector('.home-typing');

// Dapatkan teks pada elemen tersebut
const text = homeTyping.innerHTML;

// Hapus teks pada elemen tersebut
homeTyping.innerHTML = '';

// Inisialisasi variabel index dan speed
let index = 0;
let speed = 100; // Waktu tunggu antara setiap karakter (ms)

// Buat fungsi animasi typing
function type() {
  // Jika index kurang dari panjang teks
  if (index < text.length) {
    // Tambahkan karakter pada elemen
    homeTyping.innerHTML += text.charAt(index);

    // Tambahkan 1 pada index
    index++;

    // Set waktu tunggu dan panggil fungsi kembali
    setTimeout(type, speed);
  }
}

// Jalankan fungsi animasi typing
type();

  