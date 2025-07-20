# Ürün Kataloğu & Kampanyalar Web Uygulaması (Tek JS Dosyası)

Bu proje, yalnızca bir JavaScript dosyası ile çalışan, dinamik olarak HTML ve CSS oluşturan basit bir ürün kataloğu ve kampanya slider uygulamasıdır.

## Özellikler

- Kampanya slider'ı (otomatik ve manuel geçiş)  
- FakeStoreAPI'den ürün verisi çekme  
- Ürünleri sepete ve favorilere ekleyip çıkarma  
- Sepet ve favoriler tarayıcı localStorage'da saklanır  
- Ürün detaylarını modal popup ile gösterme  
- Tüm HTML ve CSS içeriği JavaScript tarafından dinamik olarak oluşturulur  
- jQuery 3.6.0 dış kaynağından dinamik olarak yüklenir  
- Responsive ve erişilebilir tasarım

## Nasıl Çalışır?

- Projeyi çalıştırmak için sadece bu JavaScript dosyasını bir HTML sayfasına `<script src="script.js"></script>` şeklinde ekleyebilirsiniz.  
- Eğer doğrudan bir HTML dosyasına erişiminiz yoksa, bu JS dosyasını tarayıcı konsolunda da çalıştırabilirsiniz.  
- JS dosyası, sayfanın `body` içeriğini tamamen temizleyip, gerekli tüm HTML ve CSS yapılarını oluşturur ve işlevleri başlatır.  
- jQuery kütüphanesini otomatik olarak yükler.  
- Ürün verileri API'den çekilir ve kullanıcı etkileşimleri localStorage ile kaydedilir.

## Kullanım Önerileri

- Tek başına çalışabilir, başka dosya gerektirmez.  
- Sunucuya ihtiyaç yoktur, lokal dosyada veya canlı sayfada çalıştırılabilir.  
- LocalStorage tarayıcı temizlenene kadar sepet ve favoriler kaybolmaz.

## Dosya Yapısı

- `script.js` — Tüm kodları içerir (HTML, CSS ve JS)

## Lisans