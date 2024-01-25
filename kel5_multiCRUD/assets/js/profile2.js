// profile2.js

document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen HTML yang diperlukan
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var profileBtn = document.getElementById('profileBtn');

    // Atur nilai awal profil
    var userProfile = {
        name: 'John Doe',
        email: 'john@example.com'
    };

    // Fungsi untuk mengupdate tampilan profil
    function updateProfileView() {
        nameElement.textContent = userProfile.name;
        emailElement.textContent = userProfile.email;
    }

    // Fungsi untuk membuka form edit profil
    function openProfileEditor() {
        // Ganti tampilan HTML dengan formulir edit profil
        var newName = prompt('Masukkan nama baru:', userProfile.name);
        var newEmail = prompt('Masukkan email baru:', userProfile.email);

        // Periksa apakah pengguna membatalkan input
        if (newName !== null && newEmail !== null) {
            // Update data profil
            userProfile.name = newName;
            userProfile.email = newEmail;

            // Perbarui tampilan profil
            updateProfileView();
        }
    }

    // Tambahkan event listener untuk tombol profil
    profileBtn.addEventListener('click', openProfileEditor);

    // Inisialisasi tampilan profil
    updateProfileView();
});