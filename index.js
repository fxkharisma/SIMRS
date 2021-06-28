const data = {};

data.kelompokPengguna = [
  { _id: "1", kelompok: null, nama: "Karyawan" }, //
  { _id: "2", kelompok: null, nama: "Pelanggan" },
];

data.pengguna = [
  { _id: "1", nama: "Andi" }, //
  { _id: "2", nama: "Budi" },
  { _id: "3", nama: "Cika" },
];

// jurnal 
// jurnal umum
// jurnal pembelian
// jurnal penjualan
// jurnal kas masuk
// jurnal kas keluar

// buku 
// buku besar umum
// buku besar pembantu utang
// buku besar pembantu piutang
// buku besar pembantu persediaan

// laporan 
// laporan saldo 
// laporan neraca
// laporan laba rugi

// _id tanpa tanda (-)
// _id = XXX-XXX-XXX
data.akun = [
  { _id: "100000000", kelompok: null, nama: "Harta" }, //
  { _id: "100001000", kelompok: "100000000", nama: "Piutang Non Usaha" },
  { _id: "100001001", kelompok: "100001000", nama: "Piutang Karyawan" },
  { _id: "100001002", kelompok: "100001000", nama: "Piutang Lainnya" },
  { _id: "100002000", kelompok: "100000000", nama: "Pajak Dibayar Dimuka" },
  { _id: "100002001", kelompok: "100002000", nama: "PPn Dibayar Dimuka" },
  { _id: "100002002", kelompok: "100002000", nama: "PPh 21 dibayar Dimuka" },
  { _id: "100003000", kelompok: "100000000", nama: "Pekerjaan Dalam Pelaksanaan" },
  { _id: "100003001", kelompok: "100003000", nama: "Biaya Bahan" },
  { _id: "100003002", kelompok: "100003000", nama: "Biaya Tenaga Kerja" },
  { _id: "100003003", kelompok: "100003000", nama: "Biaya Tidak Langsung" },
  { _id: "100004000", kelompok: "100000000", nama: "Kas" },
  { _id: "100004001", kelompok: "100004000", nama: "Kas Kecil" },
  { _id: "100004002", kelompok: "100004000", nama: "Kas" },
  { _id: "100004003", kelompok: "100004000", nama: "Kas" },
  { _id: "100005000", kelompok: "100000000", nama: "Bank" },
  { _id: "100005001", kelompok: "100005000", nama: "Bank" },
  { _id: "100005002", kelompok: "100005000", nama: "Bank" },
  { _id: "100006000", kelompok: "100000000", nama: "Piutang Usaha" },
  { _id: "100006001", kelompok: "100006000", nama: "Piutang Usaha" },
  { _id: "100006002", kelompok: "100006000", nama: "Piutang Usaha" },
  { _id: "100006003", kelompok: "100006000", nama: "Piutang Giro" },
  { _id: "100006004", kelompok: "100006000", nama: "Cadangan Kerugian Piutang" },
  { _id: "100006005", kelompok: "100006000", nama: "Uang Muka Pembelian" },
  { _id: "100006006", kelompok: "100006000", nama: "Uang Muka Pembelian" },
  { _id: "100007000", kelompok: "100000000", nama: "Persediaan" },
  { _id: "100007001", kelompok: "100007000", nama: "Persediaan Bahan Baku" },
  { _id: "100007002", kelompok: "100007000", nama: "Persediaan Bahan Penolong" },
  { _id: "100007003", kelompok: "100007000", nama: "Persediaan Barang Jadi" },
  { _id: "100007004", kelompok: "100007000", nama: "Persediaan Dalam Perjalanan Beli" },
  { _id: "100007005", kelompok: "100007000", nama: "Persediaan Dalam Perjalanan Jual" },
  { _id: "100008000", kelompok: "100000000", nama: "Biaya Dibayar Dimuka" },
  { _id: "100008001", kelompok: "100008000", nama: "Asuransi Dibayar di Muka" },
  { _id: "100008002", kelompok: "100008000", nama: "Sewa Dibayar di Muka" },
  { _id: "100009000", kelompok: "100000000", nama: "Investasi Jangka Panjang" },
  { _id: "100009001", kelompok: "100009000", nama: "Investasi Saham" },
  { _id: "100010000", kelompok: "100000000", nama: "Harta Tetap Berwujud" },
  { _id: "100010001", kelompok: "100010000", nama: "Tanah" },
  { _id: "100010002", kelompok: "100010000", nama: "Bangunan" },
  { _id: "100010003", kelompok: "100010000", nama: "Akumulasi Penyusutan Bangunan" },
  { _id: "100010004", kelompok: "100010000", nama: "Peralatan" },
  { _id: "100010005", kelompok: "100010000", nama: "Akumulasi Penyusutan Peralatan" },
  { _id: "100010006", kelompok: "100010000", nama: "Perlengkapan" },
  { _id: "100010007", kelompok: "100010000", nama: "Akumulasi Penyusutan Perlengkapan" },
  { _id: "100010008", kelompok: "100010000", nama: "Kendaraan" },
  { _id: "100010009", kelompok: "100010000", nama: "Akumulasi Penyusutan Kendaraan" },
  { _id: "100010010", kelompok: "100010000", nama: "Harta Lainnya" },
  { _id: "100010011", kelompok: "100010000", nama: "Akumulasi Penyusutan Harta Lainnya" },
  { _id: "100011000", kelompok: "100000000", nama: "Harta Tetap Tidak Berwujud" },
  { _id: "100011001", kelompok: "100011000", nama: "Harta Tetap Tidak Berwujud" },
  { _id: "100012000", kelompok: "100000000", nama: "Harta Lainnya" },
  { _id: "100012001", kelompok: "100012000", nama: "Biaya Pra Operasi dan Operasi" },
  { _id: "100012002", kelompok: "100012000", nama: "Akumulasi Amortisasi Pra Operasi dan Operasi" },
  { _id: "200000000", kelompok: null, nama: "Kewajiban" },
  { _id: "200001000", kelompok: "200000000", nama: "Hutang pajak" },
  { _id: "200001001", kelompok: "200001000", nama: "Hutang PPn" },
  { _id: "200002000", kelompok: "200000000", nama: "Hutang Non Usaha" },
  { _id: "200002001", kelompok: "200002000", nama: "Hutang Deviden" },
  { _id: "200002002", kelompok: "200002000", nama: "Hutang Bunga" },
  { _id: "200002003", kelompok: "200002000", nama: "Kartu Kredit" },
  { _id: "200002004", kelompok: "200002000", nama: "Hutang Komisi Penjualan" },
  { _id: "200002005", kelompok: "200002000", nama: "Hutang Gaji" },
  { _id: "200003000", kelompok: "200000000", nama: "Hutang Usaha" },
  { _id: "200003001", kelompok: "200003000", nama: "Hutang Usaha" },
  { _id: "200003002", kelompok: "200003000", nama: "Hutang Usaha" },
  { _id: "200003003", kelompok: "200003000", nama: "Hutang Giro" },
  { _id: "200003004", kelompok: "200003000", nama: "Hutang Konsinyasi" },
  { _id: "200003005", kelompok: "200003000", nama: "Uang Muka Penjualan" },
  { _id: "200003006", kelompok: "200003000", nama: "Uang Muka Penjualan" },
  { _id: "200004000", kelompok: "200000000", nama: "Pendapatan yang diterima di muka" },
  { _id: "200004001", kelompok: "200004000", nama: "Sewa Diterima di Muka" },
  { _id: "200005000", kelompok: "200000000", nama: "Hutang Jangka Panjang" },
  { _id: "200005001", kelompok: "200005000", nama: "Hutang Bank" },
  { _id: "200006000", kelompok: "200000000", nama: "Hutang Lain" },
  { _id: "200006001", kelompok: "200006000", nama: "Hutang Lain" },
  { _id: "300000000", kelompok: null, nama: "Modal" },
  { _id: "300001000", kelompok: "300000000", nama: "Modal" },
  { _id: "300001001", kelompok: "300001000", nama: "Modal Disetor" },
  { _id: "300001002", kelompok: "300001000", nama: "Saham" },
  { _id: "300002000", kelompok: "300000000", nama: "Laba" },
  { _id: "300002001", kelompok: "300002000", nama: "Laba ditahan" },
  { _id: "300002002", kelompok: "300002000", nama: "Laba Tahun Berjalan" },
  { _id: "300002003", kelompok: "300002000", nama: "Deviden" },
  { _id: "300002004", kelompok: "300002000", nama: "Historical Balancing" },
  { _id: "400000000", kelompok: null, nama: "Pendapatan" },
  { _id: "400001000", kelompok: "400000000", nama: "Pendapatan Usaha" },
  { _id: "400001001", kelompok: "400001000", nama: "Penjualan Roti" },
  { _id: "400001002", kelompok: "400001000", nama: "Penjualan Lain" },
  { _id: "400002000", kelompok: "400000000", nama: "Pendapatan Usaha Lainnya" },
  { _id: "400002001", kelompok: "400002000", nama: "Potongan Penjualan" },
  { _id: "400002002", kelompok: "400002000", nama: "Pendapatan Denda Keterlambatan" },
  { _id: "400002003", kelompok: "400002000", nama: "Pendapatan atas Pengantaran" },
  { _id: "500000000", kelompok: null, nama: "Biaya atas Pendapatan" },
  { _id: "500001000", kelompok: "500000000", nama: "Harga Pokok Penjualan" },
  { _id: "500001001", kelompok: "500001000", nama: "Harga Pokok Roti" },
  { _id: "500001002", kelompok: "500001000", nama: "Pemakaian Bahan Penolong" },
  { _id: "500002000", kelompok: "500000000", nama: "Biaya Usaha Lainnya" },
  { _id: "500002001", kelompok: "500002000", nama: "Kerugian Piutang" },
  { _id: "500002002", kelompok: "500002000", nama: "Biaya Denda Keterlambatan" },
  { _id: "500002003", kelompok: "500002000", nama: "Kerusakan dan Kegagalan Material" },
  { _id: "500002004", kelompok: "500002000", nama: "Komisi Penjualan" },
  { _id: "500002005", kelompok: "500002000", nama: "Potongan Pembelian" },
  { _id: "500002006", kelompok: "500002000", nama: "Biaya atas Pengiriman Barang" },
  { _id: "600000000", kelompok: null, nama: "Pengeluaran Operasional" },
  { _id: "600001000", kelompok: "600000000", nama: "Biaya Administari & Umum" },
  { _id: "600001001", kelompok: "600001000", nama: "Gaji Direksi dan Karyawan" },
  { _id: "600001002", kelompok: "600001000", nama: "Tunjangan" },
  { _id: "600001003", kelompok: "600001000", nama: "Lembur" },
  { _id: "600001004", kelompok: "600001000", nama: "Listrik, Air dan Telpon" },
  { _id: "600001005", kelompok: "600001000", nama: "Bensin, Parkir dan Tol" },
  { _id: "600001006", kelompok: "600001000", nama: "Alat Tulis Kantor" },
  { _id: "600001007", kelompok: "600001000", nama: "Kebersihan dan Keamanan" },
  { _id: "600001008", kelompok: "600001000", nama: "Rumah Tangga" },
  { _id: "600001009", kelompok: "600001000", nama: "Perbaikan dan Pemeliharaan" },
  { _id: "600001010", kelompok: "600001000", nama: "Asuransi" },
  { _id: "600001011", kelompok: "600001000", nama: "Biaya Sewa" },
  { _id: "600002000", kelompok: "600000000", nama: "Biaya Non Operasional" },
  { _id: "600002001", kelompok: "600002000", nama: "Penyusutan Bangunan" },
  { _id: "600002002", kelompok: "600002000", nama: "Penyusutan Peralatan" },
  { _id: "600002003", kelompok: "600002000", nama: "Penyusutan Perlengkapan" },
  { _id: "600002004", kelompok: "600002000", nama: "Penyusutan Kendaraan" },
  { _id: "600002005", kelompok: "600002000", nama: "Penyusutan Harta Lainnya" },
  { _id: "600002006", kelompok: "600002000", nama: "Amortisasi Pra Operasi dan Opreasi" },
  { _id: "700000000", kelompok: null, nama: "Pengeluaran Non Operasional" },
  { _id: "800000000", kelompok: null, nama: "Pendapatan Lain" },
  { _id: "800001000", kelompok: "800000000", nama: "Pendapatan Luar Usaha" },
  { _id: "800001001", kelompok: "800001000", nama: "Pendapatan Bunga Bank" },
  { _id: "800001002", kelompok: "800001000", nama: "Laba Selisih" },
  { _id: "900000000", kelompok: null, nama: "Pengeluaran Lain" },
  { _id: "900001000", kelompok: "900000000", nama: "Pengeluaran Luar Usaha" },
  { _id: "900001001", kelompok: "900001000", nama: "Biaya Bunga Bank" },
  { _id: "900001002", kelompok: "900001000", nama: "Bank Administrasi" },
  { _id: "900001003", kelompok: "900001000", nama: "Rugi Selisih" },
];

// _id tanpa tanda (-)
// _id = YYYYMMDD-XX-XXXXXXX
// _id = YYYYMMDD-XX-XXXXXXX-XXXXXXX
// _id = YYYYMMDD-XX-XXXXXXX-XXXXXXX
data.transaksi = [
  { _id: "20210512010000001", tanggal: "2021-05-12", keterangan: "Modal awal disetor" }, //
  { _id: "202105120100000010000001", transaksiId: "202105120000001", akun: "100004002", debit: 1000000, kredit: 0 },
  { _id: "202105120100000010000002", transaksiId: "202105120000001", akun: "300001001", debit: 0, kredit: 1000000 },
];

export {data}