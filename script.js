
        const images = [
  {
    thumb: 'images/bracelet1.jpeg',
    hd: 'images/bracelet1.jpeg',
    caption: 'Delicate gold chain with minimalist charm'
  },
  
  {
    thumb: 'images/bracelet2.jpeg',
    hd: 'images/bracelet2.jpeg',
    caption: 'Rose quartz beaded bracelet for calm and love'
  },
  
    {
    thumb: 'images/bracelet3.jpeg',
    hd: 'images/bracelet3.jpeg',
    caption:  'Handcrafted boho-style wrap bracelet'
  },
  
    {
    thumb: 'images/bracelet4.jpeg',
    hd: 'images/bracelet4.jpeg',
    caption: 'Elegant pearl bracelet with gold accents'
  },
  
    {
    thumb: 'images/bracelet5.jpeg',
    hd: 'images/bracelet5.jpeg',
    caption: 'Chunky silver chain bracelet with bold vibe'
  },
  
    {
    thumb: 'images/bracelet6.jpeg',
    hd: 'images/bracelet6.jpeg',
    caption: 'Classic black leather strap with metal clasp'
  },
  
    {
    thumb: 'images/bracelet7.jpeg',
    hd: 'images/bracelet7.jpeg',
    caption: 'Pastel gemstone bracelet for soft feminine energy'
  },
  
    {
    thumb: 'images/bracelet8.jpeg',
    hd: 'images/bracelet8.jpeg',
    caption: 'Beaded stretch bracelet in earthy tones'
  },
  
    {
    thumb: 'images/bracelet9.jpeg',
    hd: 'images/bracelet9.jpeg',
    caption: 'Dainty crystal bracelet for sparkle and light'
  },
  
    {
    thumb: 'images/bracelet10.jpeg',
    hd: 'images/bracelet10.jpeg',
    caption: 'Adjustable rope bracelet with yin-yang charm'
  },
  
    {
    thumb: 'images/bracelet11.jpeg',
    hd: 'images/bracelet11.jpeg',
    caption: 'Colorful woven thread bracelet handmade with love'
  },
  
    {
    thumb: 'images/bracelet12.jpeg',
    hd: 'images/bracelet12.jpeg',
    caption: 'Bold cuff bracelet with tribal patterns'
  },
  
    {
    thumb: 'images/bracelet13.jpeg',
    hd: 'images/bracelet13.jpeg',
    caption:  'Layered chain bracelet for a trendy look'
  },
  
    {
    thumb: 'images/bracelet14.jpeg',
    hd: 'images/bracelet14.jpeg',
    caption:  'Moonstone bracelet to enhance intuition and peace'
  },
  
    {
    thumb: 'images/bracelet15.jpeg',
    hd: 'images/bracelet15.jpeg',
    caption: 'Minimalist bar bracelet in polished gold'
  },


  
    {
    thumb: 'images/bracelet16.jpeg',
    hd: 'images/bracelet16.jpeg',
    caption: 'Raw crystal bracelet for grounding and clarity'
  },

    {
    thumb: 'images/bracelet17.jpeg',
    hd: 'images/bracelet17.jpeg',
    caption: 'Raw crystal bracelet for grounding and clarity'
  },

   {
    thumb: 'images/bracelet1.jpeg',
    hd: 'images/bracelet1.jpeg',
    caption: 'Delicate gold chain with minimalist charm'
  },
];

  
  const $gallery = document.getElementById('gallery');

  images.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.hd = image.hd;
    card.dataset.caption = image.caption;

    card.innerHTML = `
    <img src="${image.thumb}" alt="Image ${index + 1}">`;

$gallery.appendChild(card);

  });

  const $overlay = document.getElementById('overlay');
const $overlayImage = document.getElementById('overlay-image');
const $overlayCaption = document.getElementById('overlay-caption');


// click overlay close
$overlay.addEventListener('click', function() {
  $overlay.classList.add('hidden');
});

//overlay scroll lock
$gallery.addEventListener('click', function(e) {
  const card = e.target.closest('.card');
  if (card) {
    const hd = card.dataset.hd;
    const caption = card.dataset.caption;

    $overlayImage.src = hd;
    $overlayCaption.textContent = caption;

    document.body.classList.add('overlay-open'); 
    $overlay.classList.remove('hidden');
  }
});

$overlay.addEventListener('click', function(e) {
  if (e.target === $overlay) {
    $overlay.classList.add('hidden');
    document.body.classList.remove('overlay-open');
  }
});
