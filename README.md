# Speciyal Journey 2026 — E-Leaflet Pak Iyal

E-leaflet purnabakti **Bapak Oktria Hendrarji (Pak Iyal)**, Kepala KPP Pratama Jakarta Pasar Minggu,
dan gathering **Speciyal Journey** di Istana Bogor, Sabtu 31 Oktober 2026.

## Isi halaman
Cover + nama tamu → Hero (H-n otomatis) → Pita "Speciyal Journey" → Hitung mundur → Profil & ulang tahun ke-58 →
Peta rute perjalanan (animasi) → Jejak langkah → Riwayat jabatan (boarding pass) → Acara + Google Maps → Rundown →
Album → Garis finish → Penutup. Musik otomatis berputar saat leaflet dibuka.

## Cara mengubah isi
Semua teks ada di **`js/config.js`** (bagian bertanda `[ISI]` masih placeholder).
- **Tambah foto album:** unggah foto ke `assets/img/`, lalu tambahkan satu baris di `gallery`, misalnya
  `{ src: "assets/img/album-05.jpg", caption: "Keterangan foto" },`
- Musik: taruh lagu di `assets/audio/music.mp3`. Bila belum ada, diputar melodi instrumental bawaan.

## Link per tamu
Tambahkan `?to=Nama` di akhir link, misal `https://speciyaljourney.github.io/?to=Herjuno%20Bagus`.
