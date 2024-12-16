// Kredensial yang ditetapkan secara langsung (hanya untuk pembelajaran)
// Dalam aplikasi nyata, JANGAN PERNAH menyimpan kredensial langsung di frontend
const username = "sela";
const password = "123";

// Fungsi login untuk memeriksa apakah kredensial yang dimasukkan benar
function login() {
  // Mengambil nilai dari input username dan password
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Menghapus pesan error sebelumnya
  errorMessage.textContent = "";

  // Memeriksa apakah input cocok dengan kredensial yang ditetapkan
  if (usernameInput === username && passwordInput === password) {
    alert("Login berhasil!");
    // Di sini, Anda bisa mengarahkan pengguna atau melakukan tindakan lainnya
  } else {
    // Menampilkan pesan error jika login gagal
    errorMessage.textContent = "Username atau password salah.";
  }
}
