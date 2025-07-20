// jQuery'yi dinamik yükle
var jqScript = document.createElement('script');
jqScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
jqScript.onload = function () {
  main();
};
document.head.appendChild(jqScript);

function main() {
  $(function () {
    // Stil ekle
    $('<style>').text(`
      /* GENEL */
      * {
        box-sizing: border-box;
      }
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #f9fafb;
        color: #222;
        margin: 0; padding: 20px;
      }
      h1 {
        text-align: center;
        margin-bottom: 30px;
        font-weight: 700;
        color: #333;
      }

      /* KAMPANYA SLIDER */
      .carousel {
        max-width: 900px;
        width: 95%;
        margin: 0 auto 40px auto;
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        box-shadow: 0 6px 20px rgb(0 0 0 / 0.1);
        background: #fff;
      }
      .carousel-inner {
  white-space: nowrap;
  font-size: 0;
  transition: transform 0.5s ease;
  width: calc(100% * 3);
}

.campaign-slide {
  display: inline-block; /* block -> inline-block */
  width: 100%;
  position: relative;
  font-size: 16px;
  cursor: pointer;
}


      .campaign-slide img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 15px;
  filter: brightness(0.85);
  transition: filter 0.3s ease;
  vertical-align: top;
  
  /* Eklenen kısım: sağa kaydırmak için */
  margin-right: 15px; /* fotoğraf sağa biraz boşluk bırakır */
  transform: translateX(15px); 
}

      .campaign-slide:hover img {
        filter: brightness(1);
      }
      .campaign-text {
        position: absolute;
        bottom: 20px;
        left: 30px;
        background: linear-gradient(90deg, #f97316cc, #fb923ccc);
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        box-shadow: 0 4px 10px rgb(251 146 60 / 0.7);
        user-select: none;
        pointer-events: none;
      }

      /* İLERİ-GERİ BUTONLARI KÜÇÜLTÜLDÜ */
      .carousel-controls {
        position: absolute;
        top: 50%;
        width: 100%;
        pointer-events: none;
      }
      .btn-prev, .btn-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #f97316;
        border: none;
        color: white;
        font-size: 22px;
        width: 38px;
        height: 38px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgb(249 115 22 / 0.6);
        transition: background 0.3s ease;
        pointer-events: all;
        user-select: none;
      }
        .btn-prev, .btn-next {
  width: 32px;
  height: 32px;
  font-size: 18px;
}

/* Sadece ileri butonunun sağdan mesafesini artır */
.btn-next {
  right: auto; /* veya istediğin başka bir değer */
  left: 40px;
  position: absolute; /* zaten varsa sorun yok */
}
      .btn-prev:hover, .btn-next:hover {
        background: #fb923c;
      }
      .btn-prev {
        left: 8px;
      }
      .btn-next {
        right: auto;
      }

      /* NOKTALAR ALT ALANA SIĞDIRILDI */
      .carousel-dots {
        text-align: center;
        margin: 12px 0 15px 0;
        overflow-x: auto;
        white-space: nowrap;
        max-width: 100%;
        padding: 0 10px;
      }
      .carousel-dots button {
        width: 28px;
        height: 6px;
        background: #ddd;
        border-radius: 10px;
        margin: 0 4px;
        border: none;
        cursor: pointer;
        transition: background 0.3s ease;
        display: inline-block;
      }
      .carousel-dots button.active {
        background: #f97316;
      }

      /* ÜRÜN LİSTESİ */
      #productList {
        max-width: 900px;
        width: 95%;
        margin: 30px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }
      .product-card {
        background: white;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgb(0 0 0 / 0.1);
        padding: 15px;
        width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: box-shadow 0.3s ease;
        position: relative;
      }
      .product-card:hover {
        box-shadow: 0 10px 25px rgb(0 0 0 / 0.15);
      }
      .product-card img {
        width: 140px;
        height: 140px;
        object-fit: contain;
        margin-bottom: 15px;
      }
      .product-card h3 {
        font-size: 16px;
        font-weight: 700;
        color: #333;
        margin: 0 0 8px 0;
        height: 44px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
      }
      .product-card p {
        font-size: 14px;
        font-weight: 600;
        color: #f97316;
        margin: 0 0 12px 0;
      }

      /* BUTONLARI ALT ALTA KOY */
      .btn-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 8px;
        margin-top: auto;
      }
      .btn-group button {
        cursor: pointer;
        border: none;
        border-radius: 8px;
        padding: 10px 0;
        font-weight: 600;
        transition: background 0.3s ease;
        font-size: 14px;
        width: 100%;
        white-space: nowrap;
        text-align: center;
      }
      .addToCartBtn {
        background: #4ade80;
        color: #065f46;
      }
      .addToCartBtn:hover {
        background: #22c55e;
      }
      .addToFavoritesBtn {
        background: #f87171;
        color: #7f1d1d;
      }
      .addToFavoritesBtn:hover {
        background: #ef4444;
      }
      .removeFromFavoritesBtn {
        background: #e11d48;
        color: white;
      }
      .removeFromFavoritesBtn:hover {
        background: #be123c;
      }
      .showDetailsBtn {
        background: #60a5fa;
        color: #1e3a8a;
      }
      .showDetailsBtn:hover {
        background: #3b82f6;
      }

      /* SEPET VE FAVORİLER */
      #cart, #favorites {
        max-width: 900px;
        width: 95%;
        margin: 30px auto 50px auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgb(0 0 0 / 0.05);
        padding: 20px;
        min-height: 80px;
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        justify-content: center;
      }
      #cart h2, #favorites h2 {
        width: 100%;
        font-weight: 700;
        color: #333;
        margin-bottom: 15px;
      }
      .empty-message {
        color: #999;
        font-style: italic;
        font-weight: 600;
        text-align: center;
        width: 100%;
        padding: 20px 0;
      }

      /* DETAY POPUP */
      #detailPopup {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 90%;
        max-width: 450px;
        max-height: 80vh;
        overflow-y: auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgb(0 0 0 / 0.3);
        transform: translate(-50%, -50%);
        z-index: 9999;
        padding: 20px;
        display: none;
        box-sizing: border-box;
      }
      #detailPopup img {
        width: 100%;
        border-radius: 12px;
        margin-bottom: 15px;
      }
      #detailPopup h2 {
        margin-top: 0;
      }
      #detailPopup button.closeBtn {
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #555;
      }

      /* RESPONSIVE - KÜÇÜK EKRANLAR */
      @media (max-width: 480px) {
        .product-card {
          width: 100%;
        }
        .carousel-dots button {
          width: 20px;
          height: 5px;
          margin: 0 3px;
        }
        .btn-prev, .btn-next {
          width: 32px;
          height: 32px;
          font-size: 18px;
        }
      }
    `).appendTo('head');

    // Body içeriğini temizle ve yapıyı oluştur
    $('body').empty().append(`
      <h1>Ürün Kataloğu & Kampanyalar</h1>

      <div class="carousel" aria-label="Kampanya Slaydı" role="region" tabindex="0">
        <div class="carousel-inner"></div>
        <div class="carousel-controls">
          <button class="btn-prev" aria-label="Önceki Kampanya">&lsaquo;</button>
          <button class="btn-next" aria-label="Sonraki Kampanya">&rsaquo;</button>
        </div>
        <div class="carousel-dots" role="tablist" aria-label="Kampanya Düğmeleri"></div>
      </div>

      <div id="productList" aria-live="polite"></div>

      <div id="cartContainer" aria-label="Sepetiniz">
        <h2>Sepet</h2>
        <div id="cart"></div>
      </div>

      <div id="favoritesContainer" aria-label="Favorileriniz">
        <h2>Favoriler</h2>
        <div id="favorites"></div>
      </div>

      <div id="detailPopup" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
        <button class="closeBtn" aria-label="Kapat">&times;</button>
        <h2 id="detailTitle"></h2>
        <img src="" alt="" />
        <p id="detailPrice"></p>
        <p id="detailDesc"></p>
      </div>
    `);

    // Kampanya verisi (örnek)
    var campaigns = [
      { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", text: "Yaz İndirimi %40", url: "#" },
      { img: "https://images.unsplash.com/photo-1528701800489-565fdc521d61?auto=format&fit=crop&w=800&q=80", text: "Yeni Sezon Spor Ayakkabılar", url: "#" },
      { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80", text: "Elektronik Ürünlerde %25 İndirim", url: "#" }
    ];

    // Slider değişkenleri
    var currentSlide = 0;
    var $carouselInner = $('.carousel-inner');
    var $carouselDots = $('.carousel-dots');
    var slideInterval;

    // Kampanyaları göster
function showCampaigns() {
  $carouselInner.empty();
  $carouselDots.empty();
  campaigns.forEach(function(c, i) {
    $carouselInner.append(`
      <a href="${c.url}" class="campaign-slide" tabindex="-1" aria-label="${c.text}" style="width:100%; position:relative;">
        <img src="${c.img}" alt="${c.text}" />
        <div class="campaign-text">${c.text}</div>
      </a>
    `);
    $carouselDots.append(`<button data-slide="${i}" aria-label="Kampanya ${i+1}" role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}"></button>`);
  });
  // Kampanya sayısına göre genişlik ayarla
  
  updateCarousel();
}


    // Slider güncelle
function updateCarousel() {
  var offset = -currentSlide * 100;
  $carouselInner.css('transform', 'translateX(' + offset + '%)');
  // aktif dot güncelle
  $carouselDots.find('button').each(function(i) {
    $(this).toggleClass('active', i === currentSlide);
    $(this).attr('aria-selected', i === currentSlide);
    $(this).attr('tabindex', i === currentSlide ? 0 : -1);
  });
}

    // Butonlarla kaydırma
    $('.btn-prev').on('click', function() {
      currentSlide = (currentSlide - 1 + campaigns.length) % campaigns.length;
      updateCarousel();
    });
    $('.btn-next').on('click', function() {
      currentSlide = (currentSlide + 1) % campaigns.length;
      updateCarousel();
    });

    // Noktalarla kaydırma
    $carouselDots.on('click', 'button', function() {
      currentSlide = +$(this).data('slide');
      updateCarousel();
    });

    showCampaigns();

    // Ürün listesi, sepete ve favorilere ekleme fonksiyonları
    var products = [];

    // LocalStorage okuma/yazma fonksiyonları
    function loadStorage(key) {
      var data = localStorage.getItem(key);
      if (!data) return [];
      try {
        return JSON.parse(data);
      } catch {
        return [];
      }
    }
    function saveStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    }

    // Sepet ve favori ID dizileri
    var cart = loadStorage('cart');
    var favorites = loadStorage('favorites');

    // Ürün kartı oluştur
    function createProductCard(product) {
      var inCart = cart.includes(product.id);
      var inFav = favorites.includes(product.id);

      var $card = $(`
        <div class="product-card" data-id="${product.id}" data-description="${product.description}">
          <img src="${product.image}" alt="${product.title}" />
          <h3 title="${product.title}">${product.title}</h3>
          <p>${product.price} $</p>
          <div class="btn-group">
            ${inCart ? '' : '<button class="addToCartBtn" aria-label="Sepete ekle">Sepete Ekle</button>'}
            ${inFav ? `<button class="removeFromFavoritesBtn" aria-label="Favorilerden kaldır">Favorilerden Kaldır</button>` : `<button class="addToFavoritesBtn" aria-label="Favorilere ekle">Favorilere Ekle</button>`}
            <button class="showDetailsBtn" aria-label="Detayları göster">Detay</button>
          </div>
        </div>
      `);
      return $card;
    }

    // Ürünleri göster
    function renderProducts() {
      $('#productList').empty();
      if (products.length === 0) {
        $('#productList').append('<div class="empty-message">Ürün bulunamadı.</div>');
        return;
      }
      products.forEach(function(p) {
        $('#productList').append(createProductCard(p));
      });
    }

    // FakeStoreAPI'den ürün çek
    $.ajax({
      url: 'https://fakestoreapi.com/products',
      method: 'GET',
      success: function(data) {
        products = data;
        renderProducts();
      },
      error: function() {
        $('#productList').html('<div class="empty-message">Ürünler alınamadı.</div>');
      }
    });

    // Sepete ekle
    $(document).on('click', '.addToCartBtn', function() {
      var id = $(this).closest('.product-card').data('id');
      if (!cart.includes(id)) {
        cart.push(id);
        saveStorage('cart', cart);
        renderProducts();
        renderCart();
      }
    });

    // Sepetten çıkarma (sepette silme butonu yok ama hazır)
    $(document).on('click', '.removeFromCartBtn', function() {
      var id = $(this).closest('.product-card').data('id');
      cart = cart.filter(item => item !== id);
      saveStorage('cart', cart);
      renderCart();
      renderProducts();
    });

    // Favorilere ekle
    $(document).on('click', '.addToFavoritesBtn', function() {
      var id = $(this).closest('.product-card').data('id');
      if (!favorites.includes(id)) {
        favorites.push(id);
        saveStorage('favorites', favorites);
        renderFavorites();
        renderProducts();
      }
    });

    // Favorilerden çıkar
    $(document).on('click', '.removeFromFavoritesBtn', function() {
      var id = $(this).closest('.product-card').data('id');
      favorites = favorites.filter(item => item !== id);
      saveStorage('favorites', favorites);
      renderFavorites();
      renderProducts();
    });

    // Sepeti render et
function renderCart() {
  var $cart = $('#cart');
  $cart.empty();
  if (cart.length === 0) {
    $cart.append('<div class="empty-message">Sepetiniz boş.</div>');
    return;
  }

  // Sepeti temizle butonu ekle (ilk seferde, üstte)
  $cart.append(`
    <button id="clearCartBtn" style="margin-bottom:15px; padding:8px 12px; border:none; border-radius:8px; background:#ef4444; color:white; cursor:pointer; font-weight:600;">
      Sepeti Temizle
    </button>
  `);

  cart.forEach(function(id) {
    var product = products.find(p => p.id === id);
    if (product) {
      $cart.append(`
        <div class="product-card" data-id="${product.id}" style="flex-direction: row; align-items: center; gap:10px;">
          <img src="${product.image}" alt="${product.title}" style="width:50px; height:50px; object-fit:contain;"/>
          <h3 title="${product.title}" style="font-size:14px; flex-grow:1;">${product.title}</h3>
          <p style="color:#4ade80; font-weight:600; margin:0 10px 0 0;">${product.price} $</p>
          <button class="removeFromCartBtn" aria-label="Sepetten çıkar" style="background:#ef4444; color:white; border:none; padding:6px 10px; border-radius:8px; cursor:pointer; font-size:13px;">
            Çıkar
          </button>
        </div>
      `);
    }
  });
}


    // Favorileri render et
    function renderFavorites() {
      var $fav = $('#favorites');
      $fav.empty();
      if (favorites.length === 0) {
        $fav.append('<div class="empty-message">Favorileriniz boş.</div>');
        return;
      }
      favorites.forEach(function(id) {
        var product = products.find(p => p.id === id);
        if (product) {
          $fav.append(`
            <div class="product-card" data-id="${product.id}">
              <img src="${product.image}" alt="${product.title}" style="width:50px; height:50px; object-fit:contain;"/>
              <h3 title="${product.title}" style="font-size:14px;">${product.title}</h3>
              <p style="color:#f87171; font-weight:600; margin:0;">${product.price} $</p>
              <button class="removeFromFavoritesBtn" aria-label="Favorilerden kaldır" style="margin-top:6px; padding:6px 10px; font-size:13px; width:100%;">Kaldır</button>
            </div>
          `);
        }
      });
    }

    // Detay popup aç
    $(document).on('click', '.showDetailsBtn', function() {
      var $card = $(this).closest('.product-card');
      var id = $card.data('id');
      var product = products.find(p => p.id === id);
      if (!product) return;
      $('#detailTitle').text(product.title);
      $('#detailPopup img').attr('src', product.image).attr('alt', product.title);
      $('#detailPrice').text('Fiyat: ' + product.price + ' $');
      $('#detailDesc').text(product.description);
      $('#detailPopup').fadeIn(200);
    });

    // Detay popup kapat
    $('#detailPopup .closeBtn').on('click', function() {
      $('#detailPopup').fadeOut(200);
    });

    // İlk renderlar
    renderCart();
    renderFavorites();
  });
}

// Sepeti temizle butonu
$(document).on('click', '#clearCartBtn', function() {
  cart = [];
  saveStorage('cart', cart);
  renderCart();
  renderProducts();
});

// Kampanya slider ayarları
var slideInterval;

function startAutoSlide() {
  slideInterval = setInterval(function() {
    currentSlide = (currentSlide + 1) % campaigns.length;
    updateCarousel();
  }, 4000); // 4 saniyede bir geçiş
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

function showCampaigns() {
  $carouselInner.empty();
  $carouselDots.empty();

  campaigns.forEach(function(c, i) {
    $carouselInner.append(`
      <a href="${c.url}" class="campaign-slide" tabindex="-1" aria-label="${c.text}" style="width:100%; position:relative; display:block;">
        <img src="${c.img}" alt="${c.text}" />
        <div class="campaign-text">${c.text}</div>
      </a>
    `);
    $carouselDots.append(`<button data-slide="${i}" aria-label="Kampanya ${i+1}" role="tab" aria-selected="${i===0}" tabindex="${i===0?0:-1}"></button>`);
  });

  updateCarousel();
  startAutoSlide();
}

function updateCarousel() {
  var offset = -currentSlide * 100;
  $carouselInner.css('transform', 'translateX(' + offset + '%)');
  $carouselDots.find('button').each(function(i) {
    $(this).toggleClass('active', i === currentSlide);
    $(this).attr('aria-selected', i === currentSlide);
    $(this).attr('tabindex', i === currentSlide ? 0 : -1);
  });
}

// İleri ve geri butonlarına tıklandığında otomatik kaydırmayı sıfırla ve yeniden başlat
$('.btn-prev').on('click', function() {
  currentSlide = (currentSlide - 1 + campaigns.length) % campaigns.length;
  updateCarousel();
  stopAutoSlide();
  startAutoSlide();
});
$('.btn-next').on('click', function() {
  currentSlide = (currentSlide + 1) % campaigns.length;
  updateCarousel();
  stopAutoSlide();
  startAutoSlide();
});

// Noktalarla kaydırma
$carouselDots.on('click', 'button', function() {
  currentSlide = +$(this).data('slide');
  updateCarousel();
  stopAutoSlide();
  startAutoSlide();
});
