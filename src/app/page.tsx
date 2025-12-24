'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Star, ChevronRight, Sparkles, Gem, Crown } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="TUTUT RUWAIDAH Pearl Jewelry"
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  TUTUT RUWAIDAH
                </h1>
                <p className="text-xs text-amber-700">Pearl Jewelry</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">Tentang</a>
              <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Kontak</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-amber-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Tentang</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Produk</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="/hero-banner.jpg"
            alt="TUTUT RUWAIDAH Pearl Jewelry Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="max-w-3xl">
                <div className="flex items-center mb-4">
                  <Crown className="w-8 h-8 text-amber-400 mr-3" />
                  <h2 className="text-sm md:text-base font-semibold text-amber-300 uppercase tracking-wider">
                    Koleksi Mutiara Pilihan
                  </h2>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    TUTUT RUWAIDAH
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-amber-100">
                  Mutiara Asli Lombok dengan Keindahan yang Tiada Tara
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg">
                    Lihat Koleksi
                  </button>
                  <button className="border-2 border-amber-400 text-white px-8 py-3 rounded-lg hover:bg-amber-400 hover:text-black transition-all">
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih <span className="text-amber-600">TUTUT RUWAIDAH</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan mutiara berkualitas tinggi dengan keaslian terjamin dan desain yang elegan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mutiara Asli Lombok</h3>
              <p className="text-gray-600">
                Mutiara pilihan dengan kualitas terbaik dari perairan Lombok yang terkenal akan keindahannya
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kualitas Premium</h3>
              <p className="text-gray-600">
                Setiap produk melalui proses seleksi ketat untuk memastikan kualitas terbaik dan keaslian
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Desain Elegan</h3>
              <p className="text-gray-600">
                Desain yang memukau dan timeless, sempurna untuk berbagai kesempatan istimewa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Koleksi Unggulan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai pilihan perhiasan mutiara yang memukau
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img
                  src="/featured-product.jpg"
                  alt="Pearl Necklace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Kalung Mutiara Laut</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(5.0)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Kalung mutiara asli dengan desain klasik yang timeless
                </p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all">
                  Lihat Detail
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <Gem className="w-24 h-24 text-amber-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Anting Mutiara Premium</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.9)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Anting mutiara elegan untuk penampilan yang berkelas
                </p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all">
                  Lihat Detail
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <Crown className="w-24 h-24 text-amber-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Gelang Mutiara Exclusive</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(5.0)</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Gelang mutiara dengan sentuhan modern yang sophisticated
                </p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Tentang <span className="text-amber-600">TUTUT RUWAIDAH</span>
              </h2>
              <p className="text-gray-600 mb-6">
                TUTUT RUWAIDAH adalah usaha yang bergerak di industri perhiasan mutiara asli Lombok. 
                Kami berkomitmen untuk menyediakan produk mutiara berkualitas tinggi dengan keaslian yang terjamin.
              </p>
              <p className="text-gray-600 mb-6">
                Berlokasi di Mataram, Nusa Tenggara Barat, kami menghadirkan keindahan mutiara Lombok 
                yang terkenal hingga ke seluruh Indonesia. Setiap produk kami adalah pilihan terbaik 
                dari mutiara-mutiara berkualitas premium.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-gray-600">Mutiara Asli</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">Premium</div>
                  <div className="text-gray-600">Kualitas Terjamin</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 text-center">
              <Crown className="w-32 h-32 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kepercayaan Anda Prioritas Kami</h3>
              <p className="text-gray-600">
                Kami memberikan jaminan keaslian dan kualitas untuk setiap produk yang kami jual
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan koleksi mutiara terbaik kami dan dapatkan penawaran spesial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Alamat</p>
                    <p className="text-gray-600">
                      KEBUN DUREN, Desa/Kelurahan Selagalas, Kec. Sandubaya, Kota Mataram, Provinsi Nusa Tenggara Barat
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Telepon</p>
                    <p className="text-gray-600">082382466172</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@tututruwaidah.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Pesan</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="/logo.png"
                  alt="TUTUT RUWAIDAH Pearl Jewelry"
                  className="h-10 w-auto mr-3"
                />
                <div>
                  <h3 className="text-lg font-bold text-amber-400">TUTUT RUWAIDAH</h3>
                  <p className="text-xs text-amber-300">Pearl Jewelry</p>
                </div>
              </div>
              <p className="text-gray-400">
                Mutiara asli Lombok dengan kualitas premium
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-amber-400 transition-colors">Produk</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-amber-400" />
                  082382466172
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-amber-400" />
                  info@tututruwaidah.com
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-amber-400 mt-1" />
                  <span className="text-sm">
                    KEBUN DUREN, Selagalas, Sandubaya, Mataram, NTB
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TUTUT RUWAIDAH Pearl Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}