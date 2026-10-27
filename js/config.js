/*
 * ===================================================================
 *  SPECIYAL JOURNEY — FILE ISI (KONTEN)
 *  Cukup edit file ini untuk mengganti teks, rundown, karier, album, dll.
 *  Teks bertanda [ISI] masih placeholder & menunggu data asli.
 * ===================================================================
 */
window.SPECIYAL = {
  // ---------- Umum ----------
  title: "Speciyal Journey",
  office: "KPP Pratama Jakarta Pasar Minggu",
  tagline: ["One journey, one farewell.", "One more milestone to achieve."],

  // ---------- Musik ----------
  // Taruh file lagu di assets/audio/music.mp3 (atau ganti dengan URL mp3 lain).
  // Jika file belum ada, otomatis diputar melodi instrumental bawaan.
  music: "assets/audio/music.mp3",

  // ---------- Tokoh ----------
  honoree: {
    name: "Oktria Hendrarji",
    nickname: "Pak Iyal",
    position: "Kepala KPP Pratama Jakarta Pasar Minggu",
    photo: "assets/img/pak-iyal.jpg",
    birth: "Lahir 30 Oktober 1968",
    education: "Master of Economics in Public Finance and Tax Policy — Yokohama National University, Jepang (2004)",
    retire: "Purnabakti 30 Oktober 2026 — tepat di hari ulang tahun beliau yang ke-58",
    quote:
      "“Purnabakti bukan sekadar penanda berakhirnya masa kedinasan, melainkan momen untuk mensyukuri perjalanan panjang yang telah dilalui.”",
    bio: [
      "Oktria Hendrarji, yang akrab disapa Pak Iyal, merupakan sosok aparatur sipil negara yang menapaki perjalanan karier melalui berbagai penugasan di lingkungan Direktorat Jenderal Pajak. Perjalanan pengabdiannya membawanya dari Jakarta menuju Solo, Surabaya, Yogyakarta, Sumbawa Besar, Batang, hingga kembali ke Jakarta. Setiap tempat penugasan menjadi bagian penting dalam membentuk pengalaman, memperluas wawasan, dan memperkuat komitmennya terhadap pelayanan publik serta penerimaan negara.",
      "Dalam perjalanan tersebut, Pak Iyal mengembangkan kompetensi melalui pengalaman kerja di bidang peraturan perpajakan, pelaksanaan tugas administrasi perpajakan, serta pengawasan potensi perpajakan. Beliau juga menempuh pendidikan hingga jenjang magister di Yokohama National University, Jepang, dengan gelar Master of Economics in Public Finance and Tax Policy pada tahun 2004. Bekal pendidikan dan pengalaman lintas unit kerja tersebut menjadi bagian dari perjalanan profesionalnya hingga dipercaya mengemban amanah sebagai Kepala KPP Pratama Jakarta Pasar Minggu.",
      "Dalam kepemimpinan, perjalanan Pak Iyal merepresentasikan nilai integritas, tanggung jawab, ketekunan, dan semangat untuk terus belajar. Berbagai mutasi dan penugasan menjadi kesempatan untuk beradaptasi, membangun kerja sama, serta memberikan kontribusi di lingkungan kerja yang berbeda — hingga penghujung masa tugasnya sebagai Kepala KPP Pratama Jakarta Pasar Minggu.",
    ],
    // Angka akan beranimasi menghitung naik
    facts: [
      { value: 34, suffix: "", label: "Tahun Mengabdi" },
      { value: 13, suffix: "", label: "Jabatan Diemban" },
      { value: 8, suffix: "", label: "Kota Disinggahi" },
    ],
    values: ["Integritas", "Tanggung Jawab", "Ketekunan", "Terus Belajar"],
  },

  // ---------- Peta perjalanan (urutan rute) ----------
  // lon/lat dipakai untuk menggambar peta. "far" = di luar peta (ditampilkan sebagai kotak tujuan).
  route: [
    { city: "Jakarta", year: "1992", lon: 106.82, lat: -6.2 },
    { city: "Yokohama", year: "2004", far: true },
    { city: "Jakarta", year: "2004", lon: 106.82, lat: -6.2 },
    { city: "Surabaya", year: "2007", lon: 112.75, lat: -7.26 },
    { city: "Sumbawa Besar", year: "2010", lon: 117.42, lat: -8.49 },
    { city: "Jakarta", year: "2012", lon: 106.82, lat: -6.2 },
    { city: "Pondok Gede", year: "2020", lon: 106.93, lat: -6.29 },
    { city: "Batang", year: "2022", lon: 109.73, lat: -6.91 },
    { city: "Pasar Minggu", year: "2025", lon: 106.84, lat: -6.29 },
  ],
  // Kota lain yang pernah disinggahi (ditampilkan sebagai titik)
  otherCities: [
    { city: "Solo", lon: 110.82, lat: -7.57 },
    { city: "Yogyakarta", lon: 110.37, lat: -7.8 },
  ],

  // ---------- Jejak Langkah Pengabdian (bab cerita) ----------
  journey: [
    {
      year: "1992", icon: "🎒", title: "Awal Pengabdian",
      place: "Direktorat Peraturan Perpajakan",
      desc: "Berbekal kemampuan dan ketekunan, Pak Iyal bergabung dengan Direktorat Jenderal Pajak dan memulai perjalanan pengabdiannya sebagai aparatur negara. Penempatan awal di Subseksi Pemantauan Pelaksanaan Perjanjian Perpajakan II — membangun fondasi profesional di bidang peraturan perpajakan.",
    },
    {
      year: "2004", icon: "🎓", title: "Menimba Ilmu untuk Pengabdian yang Lebih Luas",
      place: "Yokohama National University, Jepang",
      desc: "Menyelesaikan pendidikan magister dengan gelar Master of Economics in Public Finance and Tax Policy. Ilmu yang diperoleh menjadi bekal berharga dalam memahami keuangan publik dan kebijakan perpajakan.",
    },
    {
      year: "2007", icon: "🚆", title: "Memperluas Pengalaman di Daerah",
      place: "KPP Surabaya Gubeng",
      desc: "Penugasan di Surabaya menjadi kesempatan memperluas pengalaman dalam pelaksanaan tugas perpajakan dan mengenal dinamika pelayanan di kantor pelayanan pajak.",
    },
    {
      year: "2010", icon: "⛵", title: "Mengemban Amanah di Tanah Nusantara",
      place: "KPP Pratama Sumbawa Besar",
      desc: "Amanah pertama sebagai Kepala Kantor — babak penting perjalanan kepemimpinan: mengelola kantor, mengoordinasikan tugas, dan mendukung penerimaan negara di wilayah penugasan.",
    },
    {
      year: "2012", icon: "📜", title: "Kembali ke Direktorat Peraturan Perpajakan I",
      place: "Kepala Subdirektorat Peraturan PPN Perdagangan, Jasa & PTLL",
      desc: "Kembali ke lingkungan perumusan peraturan perpajakan dengan tanggung jawab yang lebih besar.",
    },
    {
      year: "2019", icon: "🔍", title: "Mengawal Potensi Wajib Pajak Besar",
      place: "Kanwil DJP Wajib Pajak Besar",
      desc: "Dipercaya menjabat Kepala Bidang Data dan Pengawasan Potensi Perpajakan di Kanwil Wajib Pajak Besar.",
    },
    {
      year: "2020", icon: "🏢", title: "Memimpin di Pondok Gede",
      place: "KPP Pratama Pondok Gede",
      desc: "Kembali memimpin sebagai Kepala Kantor di lingkungan Kanwil DJP Jawa Barat III.",
    },
    {
      year: "2022", icon: "🌾", title: "Melanjutkan Pengabdian di Batang",
      place: "KPP Pratama Batang, Jawa Tengah",
      desc: "Perjalanan berikutnya membawa Pak Iyal ke pesisir utara Jawa Tengah sebagai Kepala KPP Pratama Batang.",
    },
    {
      year: "2025", icon: "🏙️", title: "Menuntaskan Amanah di Jakarta",
      place: "KPP Pratama Jakarta Pasar Minggu",
      desc: "Melanjutkan kepemimpinan dengan semangat memberikan pelayanan terbaik dan membangun kerja sama — sekaligus tempat beliau menutup masa tugas dengan membawa kenangan dari seluruh perjalanan sebelumnya.",
    },
    {
      year: "2026", icon: "🏁", title: "Purnabakti", place: "30 Oktober 2026", finish: true,
      desc: "Setiap penugasan, tanggung jawab, tantangan, dan perjumpaan dengan rekan kerja telah menjadi bagian dari kisah pengabdian yang bermakna. Terima kasih, Pak Iyal!",
    },
  ],

  // ---------- Riwayat Jabatan (SIKKA) ----------
  positions: [
    { date: "05 Jan 1998", role: "Kepala Subseksi", unit: "Pemantauan Pelaksanaan Perjanjian Perpajakan II, Direktorat Peraturan Perpajakan" },
    { date: "11 Des 1998", role: "Kepala Subseksi", unit: "Verifikasi PPh Badan, KPP Penanaman Modal Asing II" },
    { date: "20 Sep 1999", role: "Kepala Subseksi", unit: "Tata Usaha Penerimaan Pajak, Kanwil VI DJP Jakarta Raya Khusus" },
    { date: "s.d. 2004", role: "Tugas Belajar", unit: "Yokohama National University, Jepang", special: true },
    { date: "08 Jul 2004", role: "Kepala Seksi", unit: "Seksi Peraturan PPN Perdagangan, Direktorat Peraturan Perpajakan" },
    { date: "18 Jul 2006", role: "Kepala Seksi", unit: "Seksi PPN dan PTLL, KPP Jakarta Setiabudi Satu" },
    { date: "11 Okt 2007", role: "Kepala Seksi", unit: "Seksi PPh Badan, KPP Surabaya Gubeng" },
    { date: "12 Feb 2008", role: "Kepala Seksi", unit: "Seksi Pengawasan dan Konsultasi I" },
    { date: "12 Apr 2010", role: "Kepala Kantor Pelayanan", unit: "KPP Pratama Sumbawa Besar" },
    { date: "29 Okt 2012", role: "Kepala Subdirektorat", unit: "Peraturan PPN Perdagangan, Jasa, dan PTLL, Direktorat Peraturan Perpajakan I" },
    { date: "17 Jun 2019", role: "Kepala Bidang", unit: "Data dan Pengawasan Potensi Perpajakan, Kanwil DJP Wajib Pajak Besar" },
    { date: "24 Agu 2020", role: "Kepala Kantor Pelayanan", unit: "KPP Pratama Pondok Gede, Kanwil DJP Jawa Barat III" },
    { date: "01 Nov 2022", role: "Kepala Kantor Pelayanan", unit: "KPP Pratama Batang, Kanwil DJP Jawa Tengah I" },
    { date: "20 Jun 2025", role: "Kepala Kantor Pelayanan", unit: "KPP Pratama Jakarta Pasar Minggu, Kanwil DJP Jakarta Selatan II" },
  ],

  // ---------- Acara ----------
  event: {
    name: "Gathering Speciyal Journey",
    // Format ISO, zona WIB (+07:00). Dipakai juga untuk hitung mundur.
    start: "2026-10-31T06:00:00+07:00",
    end: "2026-10-31T16:00:00+07:00",
    dayLabel: "Sabtu",
    dateLabel: "31 Oktober 2026",
    timeLabel: "06.00 WIB — selesai",
    venue: "Kebun Raya Bogor",
    venueSub: "",
    // Poin-poin info acara (ditampilkan sebagai daftar)
    notes: [
      "Meeting point pukul 07.30 WIB di Pintu Masuk 1, Kebun Raya Bogor",
      "Parkir Kendaraan Pribadi / Bus di KPPN Bogor",
      "Bawa Perlengkapan pribadi & Jas Hujan/Payung",
    ],
    mapsQuery: "Pintu Masuk 1 Kebun Raya Bogor",
    // Opsional: tempel link Google Maps khusus (titik kumpul, dll). Kosongkan = pakai mapsQuery.
    mapsLink: "",
    dressCode: "SERAGAM SPECIYAL JOURNEY (Atasan & Bawahan Bebas)",
  },

  // ---------- Rundown ----------
  rundown: [
    { time: "06.00", title: "Kumpul di KPP", desc: "" },
    { time: "06.30", title: "Berangkat dari KPP", desc: "" },
    { time: "07.30", title: "Jalan Santai dan Games Kelompok", desc: "" },
    { time: "09.00", title: "Speciyal Journey Session - Performance - Doorprize", desc: "" },
    { time: "12.00", title: "Makan siang & foto bersama", desc: "" },
  ],

  // ---------- Album (taruh foto di assets/img/, lalu tambahkan baris di sini) ----------
  gallery: [
    { src: "assets/img/album-02.jpg", caption: "Kebersamaan keluarga besar" },
    { src: "assets/img/album-01.jpg", caption: "Makan bersama, penuh tawa" },
    { src: "assets/img/album-03.jpg", caption: "Bimbingan Mental" },
    { src: "assets/img/album-04.jpg", caption: "Semangat terus!" },
    { src: "assets/img/album-05.jpg", caption: "Ngopi santai bersama sahabat" },
    { src: "assets/img/album-06.jpg", caption: "Kebersamaan dalam balutan wastra" },
    { src: "assets/img/album-07.jpg", caption: "Bersama rekan-rekan Kemenkeu" },
    { src: "assets/img/album-08.jpg", caption: "Ceria dalam busana nusantara" },
    { src: "assets/img/album-09.jpg", caption: "Salam hangat & kenang-kenangan" },
    { src: "assets/img/album-10.jpg", caption: "Kompak berbatik bersama" },
    { src: "assets/img/album-11.jpg", caption: "Hari Pajak 2026" },
    { src: "assets/img/album-12.jpg", caption: "Rapimnas III DJP 2026" },
  ],

  closing:
    "Terima kasih atas setiap langkah, teladan, dan cerita yang telah Bapak bagikan. Selamat ulang tahun dan selamat memasuki babak baru, Pak Iyal!",
};
