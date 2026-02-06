# Deneme İnşaat Kurumsal Web Sitesi

Bu proje, Deneme İnşaat için hazırlanmış tek sayfalık (single-page) kurumsal web sitesidir. Tamamen HTML, CSS ve vanilla JavaScript ile geliştirilmiştir.

## Dosya Yapısı

```
/Deneme
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── main.js
│   └── img
└── README.md
```

## Metinleri Düzenleme

1. `index.html` dosyasını açın.
2. Değiştirmek istediğiniz alanların yanında `<!-- TODO: Burayı güncelle -->` yorumları bulunur.
3. Başlık, paragraf ve liste içeriklerini doğrudan değiştirin.

## Görselleri Düzenleme

- Tüm görseller için placeholder alanları hazırdır.
- `assets/img/` klasörüne görsellerinizi yükleyin.
- Ardından `index.html` içindeki ilgili placeholder alanlarına `img` etiketi ekleyin.

Örnek:
```html
<div class="image-placeholder">
  <img src="assets/img/hakkimizda.jpg" alt="Hakkımızda görseli" />
</div>
```

## Google Maps Embed Değiştirme

1. Google Maps üzerinde konumunuzu açın.
2. "Paylaş" > "Harita yerleştir" (Embed) seçeneğini tıklayın.
3. Verilen `iframe` linkini kopyalayın.
4. `index.html` dosyasında `src` alanını değiştirin:

```html
<iframe
  title="Google Maps konum"
  src="https://www.google.com/maps/embed?pb=..."
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

## İletişim Formu Mailto Opsiyonu

Bu proje backend içermediği için form gönderimi sadece teşekkür mesajı gösterir. Eğer e-posta ile gönderim yapmak isterseniz:

1. `index.html` içindeki form etiketini aşağıdaki gibi değiştirin:

```html
<form id="contact-form" action="mailto:info@denemeinsaat.com" method="post" enctype="text/plain">
```

2. Bu yöntem tarayıcıda varsayılan e-posta istemcisini açar.

## Hosting (FTP) ile Yayına Alma

1. Tüm proje dosyalarını (`index.html`, `assets/` klasörü ve `README.md`) bilgisayarınıza indirin.
2. Hosting firmanızın FTP bilgilerini alın.
3. FileZilla gibi bir FTP istemcisi ile sunucuya bağlanın.
4. Dosyaları `public_html` veya `www` klasörüne yükleyin.
5. Site birkaç dakika içinde aktif olur.

## Alan Adı (Domain) Bağlama

1. Alan adınızı satın aldıysanız hosting panelinden DNS yönetimine girin.
2. A kaydını hosting IP adresinize yönlendirin.
3. `www` için CNAME kaydı ekleyin.
4. DNS değişiklikleri 24 saate kadar sürebilir.

---

Herhangi bir güncelleme sonrası dosyaları tekrar FTP ile yüklemeniz yeterlidir.
