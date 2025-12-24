'use client'

import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
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

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              TUTUT RUWAIDAH Pearl Jewelry berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
            <p className="text-sm text-amber-800">
              <strong>Terakhir Diperbarui:</strong> 1 Januari 2024
            </p>
          </div>

          {/* Privacy Policy Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-amber-600 mr-3" />
                Pendahuluan
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Selamat datang di TUTUT RUWAIDAH Pearl Jewelry. Kami sangat menghargai kepercayaan Anda 
                  dan berkomitmen untuk melindungi privasi data pribadi Anda. Kebijakan Privasi ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika 
                  menggunakan layanan kami.
                </p>
                <p>
                  Dengan menggunakan layanan TUTUT RUWAIDAH Pearl Jewelry, Anda menyetujui praktik 
                  pengumpulan dan penggunaan data yang dijelaskan dalam kebijakan ini.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-amber-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Kami dapat mengumpulkan informasi pribadi Anda dalam berbagai cara, termasuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Informasi Identifikasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                  <li><strong>Informasi Kontak:</strong> Nomor WhatsApp, alamat, informasi komunikasi lainnya</li>
                  <li><strong>Informasi Transaksi:</strong> Detail pembelian, riwayat pesanan, preferensi produk</li>
                  <li><strong>Informasi Penggunaan:</strong> Data tentang bagaimana Anda menggunakan website dan layanan kami</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, browser, perangkat, dan informasi teknis lainnya</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-amber-600 mr-3" />
                Cara Kami Menggunakan Informasi Anda
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  TUTUT RUWAIDAH Pearl Jewelry menggunakan informasi pribadi Anda untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memproses dan menyelesaikan transaksi pembelian produk mutiara</li>
                  <li>Memberikan layanan pelanggan dan dukungan teknis</li>
                  <li>Menginformasikan tentang produk baru dan penawaran khusus</li>
                  <li>Mem personalisasi pengalaman berbelanja Anda</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Memproses pembayaran dan verifikasi transaksi</li>
                  <li>Mengirimkan informasi pengiriman dan update pesanan</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-amber-600 mr-3" />
                Perlindungan Data
              </h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi hanya untuk staf yang berwenang</li>
                  <li>Sistem keamanan yang terus diperbarui</li>
                  <li>Monitoring rutin untuk mencegah akses tidak sah</li>
                  <li>Backup data yang aman dan terenkripsi</li>
                </ul>
              </div>
            </section>

            {/* Third-Party Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Berbagi dengan Pihak Ketiga</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga 
                  untuk tujuan pemasaran tanpa persetujuan Anda. Informasi Anda mungkin dibagikan dengan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Layanan pengiriman untuk pengiriman produk</li>
                  <li>Payment gateway untuk pemrosesan pembayaran</li>
                  <li>Otoritas hukum jika diwajibkan oleh hukum</li>
                  <li>Partner bisnis yang membantu kami menyediakan layanan</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kebijakan Cookies</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Membantu kami memahami bagaimana website digunakan</li>
                  <li><strong>Cookies Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                </ul>
                <p>
                  Anda dapat mengatur browser untuk menolak cookies, namun ini dapat mempengaruhi 
                  fungsionalitas website.
                </p>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hak Anda sebagai Pengguna</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Membatasi pemrosesan data pribadi Anda</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                  menggunakan hak privasi Anda, silakan hubungi kami:
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

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pembaruan Kebijakan</h2>
              <div className="text-gray-600 space-y-3">
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                  diposting di halaman ini dengan tanggal "Terakhir Diperbarui" yang baru. Kami 
                  mendorong Anda untuk secara berkala meninjau kebijakan ini.
                </p>
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