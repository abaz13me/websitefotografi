document.addEventListener('DOMContentLoaded', () => {

    // Data untuk Keajaiban Dunia. Simpan langsung di sini.
    const wonders = [
        {
            id: 'chichen-itza',
            name: 'Chichen Itza',
            location: 'Meksiko',
            image: 'images/chichen-itza.jpg',
            description: 'Kompleks reruntuhan peradaban Maya yang megah dengan piramida El Castillo sebagai pusatnya.',
            full_description: 'Chichen Itza adalah situs arkeologi besar dari peradaban Maya di Semenanjung Yucatán, Meksiko. Piramida El Castillo yang ikonik mendominasi pusat situs dan berfungsi sebagai kuil untuk dewa Kukulkan.',
            facts: [
                'Piramida memiliki 365 anak tangga, melambangkan jumlah hari dalam setahun.',
                'Dua kali setahun, bayangan ular terlihat merayap menuruni piramida saat ekuinoks.',
                'Situs ini mencakup lapangan bola besar tempat permainan ritual kuno dimainkan.'
            ]
        },
        {
            id: 'christ-redeemer',
            name: 'Kristus Penebus',
            location: 'Brasil',
            image: 'images/kristus-penebus.jpg',
            description: 'Patung Art Deco Yesus Kristus raksasa yang berdiri megah di puncak Gunung Corcovado.',
            full_description: 'Patung Kristus Penebus adalah simbol Kekristenan di seluruh dunia dan ikon budaya Rio de Janeiro dan Brasil. Patung setinggi 30 meter ini menghadap ke kota dari puncak Gunung Corcovado.',
            facts: [
                'Patung ini terbuat dari beton bertulang dan dilapisi dengan ribuan ubin soapstone.',
                'Pembangunannya memakan waktu sembilan tahun, dari tahun 1922 hingga 1931.',
                'Tersambar petir beberapa kali, menyebabkan kerusakan kecil yang kemudian diperbaiki.'
            ]
        },
        {
            id: 'colosseum',
            name: 'Colosseum',
            location: 'Italia',
            image: 'images/colosseum.jpg',
            description: 'Amfiteater oval raksasa di pusat kota Roma, simbol ikonik dari Kekaisaran Romawi.',
            full_description: 'Colosseum adalah amfiteater terbesar yang pernah dibangun, digunakan untuk kontes gladiator, pertunjukan publik, dan drama. Meskipun sebagian besar hancur, bangunan ini tetap menjadi simbol kekuatan Roma Kuno.',
            facts: [
                'Mampu menampung antara 50.000 hingga 80.000 penonton.',
                'Memiliki sistem lorong bawah tanah yang rumit yang disebut hypogeum.',
                'Acara pembukaannya berlangsung selama 100 hari pada tahun 80 Masehi.'
            ]
        },
        {
            id: 'great-wall',
            name: 'Tembok Besar Tiongkok',
            location: 'Tiongkok',
            image: 'images/tembok-besar.jpg',
            description: 'Serangkaian benteng pertahanan kuno yang membentang ribuan kilometer di Tiongkok utara.',
            full_description: 'Tembok Besar Tiongkok dibangun selama berabad-abad untuk melindungi kekaisaran Tiongkok dari invasi nomaden. Ini bukan satu tembok tunggal, melainkan jaringan tembok dan benteng yang luas.',
            facts: [
                'Panjang totalnya lebih dari 21.000 kilometer.',
                'Bertentangan dengan mitos populer, tembok ini tidak terlihat dari bulan.',
                'Bahan bangunannya bervariasi, termasuk batu, bata, tanah, dan kayu.'
            ]
        },
        {
            id: 'machu-picchu',
            name: 'Machu Picchu',
            location: 'Peru',
            image: 'images/machu-picchu.jpg',
            description: 'Situs benteng Inca abad ke-15 yang terletak tinggi di Pegunungan Andes, Peru.',
            full_description: 'Machu Picchu adalah pencapaian arsitektur yang luar biasa dari Kekaisaran Inca. Terkenal dengan dinding batu keringnya yang canggih, situs ini ditinggalkan sekitar satu abad setelah pembangunannya.',
            facts: [
                'Sering disebut "Kota Inca yang Hilang".',
                'Terletak di ketinggian 2.430 meter di atas permukaan laut.',
                'Struktur batunya dipotong dengan presisi sehingga pas tanpa adukan semen.'
            ]
        },
        {
            id: 'petra',
            name: 'Petra',
            location: 'Yordania',
            image: 'images/petra.jpg',
            description: 'Kota arkeologi yang terkenal dengan arsitektur pahatan batu dan sistem saluran airnya.',
            full_description: 'Petra, yang juga dikenal sebagai Kota Mawar, adalah keajaiban arkeologi di Yordania selatan. Bangunan paling terkenal adalah Al-Khazneh (Perbendaharaannya), yang diukir langsung pada tebing batu pasir.',
            facts: [
                'Menjadi ibu kota Kerajaan Nabataean pada abad ke-4 SM.',
                'Pintu masuk utama ke kota adalah melalui Siq, sebuah ngarai sempit sepanjang 1,2 km.',
                'Lokasi ini menjadi terkenal di dunia Barat setelah muncul di film "Indiana Jones".'
            ]
        },
        {
            id: 'taj-mahal',
            name: 'Taj Mahal',
            location: 'India',
            image: 'images/taj-mahal.jpg',
            description: 'Mausoleum marmer putih gading yang indah di Agra, simbol cinta abadi.',
            full_description: 'Taj Mahal dibangun oleh kaisar Mughal Shah Jahan untuk mengenang istri tercintanya, Mumtaz Mahal. Dianggap sebagai mahakarya arsitektur Mughal dan permata seni Muslim di India.',
            facts: [
                'Pembangunannya membutuhkan waktu sekitar 22 tahun dan ribuan pengrajin.',
                'Warnanya tampak berubah tergantung pada waktu dan cahaya bulan.',
                'Desainnya sangat simetris, kecuali makam Shah Jahan yang ditambahkan kemudian.'
            ]
        },
        {
            id: 'borobudur-temple',
            name: 'Candi Borobudur',
            location: 'Indonesia',
            image: 'images/borobudur.jpg',
            description: 'Candi Buddha terbesar di dunia, sebuah mahakarya arsitektur dari Dinasti Syailendra.',
            full_description: 'Candi Borobudur adalah monumen Buddha Mahayana abad ke-9 di Magelang, Jawa Tengah, Indonesia. Monumen ini terdiri dari sembilan teras bertumpuk, enam persegi dan tiga bundar, diatapi oleh sebuah kubah pusat.',
            facts: [
                'Dihiasi dengan 2.672 panel relief dan 504 arca Buddha.',
                'Strukturnya melambangkan kosmologi Buddha, dari dunia keinginan hingga pencerahan (nirwana).',
                'Ditemukan kembali pada tahun 1814 oleh Sir Thomas Stamford Raffles.'
            ]
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const navbar = document.getElementById('navbar');
    const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));

    // Fungsi untuk mengubah warna navbar saat scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fungsi untuk merender semua kartu ke dalam galeri
    function renderGallery() {
        wonders.forEach(wonder => {
            const cardHTML = `
                <div class="col-lg-3 col-md-6">
                    <div class="card gallery-card" onclick="showDetail('${wonder.id}')">
                        <img src="${wonder.image}" class="card-img-top" alt="${wonder.name}">
                        <div class="card-body">
                            <h5 class="card-title">${wonder.name}</h5>
                            <p class="card-text text-muted">${wonder.location}</p>
                        </div>
                    </div>
                </div>
            `;
            galleryContainer.innerHTML += cardHTML;
        });
    }

    // Fungsi untuk menampilkan detail di dalam modal
    window.showDetail = function(id) {
        const wonder = wonders.find(w => w.id === id);
        if (!wonder) return;

        document.getElementById('modal-title').innerText = `${wonder.name} - ${wonder.location}`;
        document.getElementById('modal-body').innerHTML = `
            <div class="row">
                <div class="col-lg-7 mb-3 mb-lg-0">
                    <img src="${wonder.image}" class="img-fluid rounded shadow-sm" alt="${wonder.name}">
                </div>
                <div class="col-lg-5">
                    <p class="lead">${wonder.full_description}</p>
                    <h5 class="mt-4">Fakta Menarik:</h5>
                    <ul>
                        ${wonder.facts.map(fact => `<li>${fact}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        detailModal.show();
    }
    
    // Panggil fungsi untuk membangun galeri saat halaman dimuat
    renderGallery();
});
