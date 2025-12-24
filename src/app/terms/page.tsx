'use client'

import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="TUTUT RUWAIDAH Pearl Jewelry"
                  className="h-10 w-auto"
                />
                <div className="ml-3">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                    TUTUT RUWAIDAH
                  </h1>
                  <p className="text-xs text-amber-700">Pearl Jewelry</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link 
                href="/"
                className="flex items-center text-gray-700 hover:text-amber-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan TUTUT RUWAIDAH Pearl Jewelry
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
            <p className="text-sm text-amber-800">
              <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-amber-600 mr-3" />
                Penerimaan Syarat dan Ketentuan
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Dengan mengakses dan menggunakan website TUTUT RUWAIDAH Pearl Jewelry, Anda 
                  menerima dan setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak 
                  setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh 
                  menggunakan website atau layanan kami.
                </p>
              </div>
            </section>

            {/* Company Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasi Perusahaan</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  <strong>Nama Perusahaan:</strong> TUTUT RUWAIDAH
                </p>
                <p>
                  <strong>Bidang Usaha:</strong> Industri Perhiasan Mutiara
                </p>
                <p>
                  <strong>Alamat:</strong> KEBUN DUREN, Desa/Kelurahan Selagalas, Kec. Sandubaya, 
                  Kota Mataram, Provinsi Nusa Tenggara Barat
                </p>
                <p>
                  <strong>Telepon:</strong> 082382466172
                </p>
                <p>
                  <strong>Email:</strong> info@tututruwaidah.com
                </p>
              </div>
            </section>

            {/* Products and Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk dan Layanan</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  TUTUT RUWAIDAH Pearl Jewelry menyediakan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perhiasan mutiara asli Lombok (kalung, anting, gelang, cincin)</li>
                  <li>Produk mutiara dengan kualitas premium dan terjamin keasliannya</li>
                  <li>Layanan konsultasi pemilihan produk mutiara</li>
                  <li>Layanan purna jual dan perawatan produk</li>
                  <li>Pengiriman produk ke seluruh Indonesia</li>
                </ul>
              </div>
            </section>

            {/* Product Authenticity */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-amber-600 mr-3" />
                Keaslian Produk
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Kami menjamin bahwa:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Semua produk mutiara yang kami jual adalah mutiara asli Lombok</li>
                  <li>Setiap produk melalui proses quality control yang ketat</li>
                  <li>Kami menyediakan sertifikat keaslian untuk produk premium</li>
                  <li>Informasi produk yang kami tampilkan akurat dan jujur</li>
                </ul>
              </div>
            </section>

            {/* Ordering and Payment */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pemesanan dan Pembayaran</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  <strong>Proses Pemesanan:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pelanggan dapat melakukan pemesanan melalui website, telepon, atau WhatsApp</li>
                  <li>Konfirmasi stok akan dilakukan setelah pemesanan diterima</li>
                  <li>Pesanan akan diproses setelah pembayaran dikonfirmasi</li>
                </ul>
                
                <p className="mt-4">
                  <strong>Metode Pembayaran:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                  <li>E-Wallet (OVO, GoPay, Dana)</li>
                  <li>Pembayaran tunai (untuk pengambilan langsung)</li>
                </ul>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Harga dan Biaya</h2>
              <div className="text-gray-600 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Harga yang tercantum adalah harga dalam Rupiah dan belum termasuk ongkos kirim</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya</li>
                  <li>Kami berhak menyesuaikan harga berdasarkan kualitas dan ukuran mutiara</li>
                  <li>Biaya pengiriman akan ditanggung oleh pembeli</li>
                </ul>
              </div>
            </section>

            {/* Shipping and Delivery */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pengiriman dan Pengantaran</h2>
              <div className="text-gray-600 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pengiriman dilakukan melalui jasa ekspedisi terpercaya (JNE, TIKI, POS Indonesia)</li>
                  <li>Estimasi waktu pengiriman 2-7 hari kerja tergantung lokasi</li>
                  <li>Kami menyediakan asuransi pengiriman untuk produk bernilai tinggi</li>
                  <li>Risiko pengiriman menjadi tanggung jawab pembeli setelah barang diserahkan ke ekspedisi</li>
                  <li>Untuk wilayah Mataram, tersedia pengantaran langsung (gratis untuk pembelian minimal Rp 1.000.000)</li>
                </ul>
              </div>
            </section>

            {/* Returns and Refunds */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pengembalian dan Pengembalian Dana</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  <strong>Kebijakan Pengembalian:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pengembalian dapat dilakukan dalam waktu 3 hari sejak barang diterima</li>
                  <li>Produk harus dalam kondisi asli, tidak rusak, dan lengkap dengan packaging</li>
                  <li>Alasan pengembalian harus valid (produk cacat, tidak sesuai deskripsi)</li>
                  <li>Ongkos kirim pengembalian ditanggung oleh pembeli</li>
                </ul>
                
                <p className="mt-4">
                  <strong>Kebijakan Pengembalian Dana:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pengembalian dana akan diproses dalam waktu 7 hari kerja setelah barang diterima kembali</li>
                  <li>Dana akan dikembalikan melalui metode pembayaran yang sama</li>
                  <li>Biaya administrasi bank mungkin berlaku</li>
                </ul>
              </div>
            </section>

            {/* Warranty */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Garansi Produk</h2>
              <div className="text-gray-600 space-y-3">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Garansi keaslian produk seumur hidup</li>
                  <li>Garansi service gratis selama 1 tahun untuk perbaikan ringan</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat kelalaian pemakaian</li>
                  <li>Klaim garansi harus disertai dengan bukti pembelian</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hak Kekayaan Intelektual</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Semua konten di website TUTUT RUWAIDAH Pearl Jewelry, termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nama "TUTUT RUWAIDAH" dan logo</li>
                  <li>Desain produk dan foto produk</li>
                  <li>Teks, grafik, dan konten visual lainnya</li>
                  <li>Struktur dan tampilan website</li>
                </ul>
                <p>
                  merupakan hak milik intelektual TUTUT RUWAIDAH Pearl Jewelry dan dilindungi oleh 
                  hukum hak cipta Indonesia. Tidak diperbolehkan menggunakan, menyalin, atau mendistribusikan 
                  konten tanpa izin tertulis dari kami.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3" />
                Pembatasan Tanggung Jawab
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  TUTUT RUWAIDAH Pearl Jewelry tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga (ekspedisi)</li>
                  <li>Kerusakan produk selama proses pengiriman</li>
                  <li>Kerugian tidak langsung yang timbul dari penggunaan produk kami</li>
                  <li>Kesalahan informasi yang disebabkan oleh faktor di luar kontrol kami</li>
                </ul>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Privasi</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Privasi Anda sangat penting bagi kami. Informasi pribadi yang Anda berikan akan 
                  digunakan sesuai dengan Kebijakan Privasi kami. Dengan menggunakan layanan kami, 
                  Anda setuju dengan pengumpulan dan penggunaan informasi sesuai kebijakan tersebut.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hukum yang Berlaku</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa yang timbul dari atau berhubungan dengan Syarat dan Ketentuan ini akan 
                  diselesaikan melalui musyawarah untuk mufakat. Jika tidak tercapai kesepakatan, 
                  sengketa akan diselesaikan melalui pengadilan yang berwenang di Kota Mataram.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  TUTUT RUWAIDAH Pearl Jewelry berhak untuk mengubah Syarat dan Ketentuan ini 
                  sewaktu-waktu. Perubahan akan berlaku efektif segera setelah diposting di website. 
                  Penggunaan terus-menerus layanan kami setelah perubahan merupakan penerimaan 
                  Anda terhadap syarat dan ketentuan yang diperbarui.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <p><strong>Nama:</strong> TUTUT RUWAIDAH Pearl Jewelry</p>
                    <p><strong>Alamat:</strong> KEBUN DUREN, Desa/Kelurahan Selagalas, Kec. Sandubaya, Kota Mataram, Provinsi Nusa Tenggara Barat</p>
                    <p><strong>Telepon:</strong> 082382466172</p>
                    <p><strong>Email:</strong> info@tututruwaidah.com</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © 2024 TUTUT RUWAIDAH Pearl Jewelry. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}