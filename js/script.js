



  const gradients = [
    "from-pink-500 to-yellow-500",
    "from-indigo-500 to-purple-500",
    "from-green-400 to-blue-500",
    "from-red-500 to-orange-500",
    "from-teal-400 to-lime-500"
  ];

  const titles = [
    "Selamat Datang!",
    "Promo Spesial Hari Ini",
    "Buat Harimu Cerah",
    "Diskon Gila-Gilaan",
    "Ayo Belanja Sekarang!"
  ];

  const subtitles = [
    "Temukan penawaran terbaik di sini.",
    "Jangan lewatkan kesempatan emas ini.",
    "Promo terbatas hanya hari ini!",
    "Buruan sebelum kehabisan!",
    "Nikmati pengalaman berbelanja menyenangkan."
  ];

  function generateBanner() {
    const banner = document.getElementById("banner");
    const title = document.getElementById("bannerTitle");
    const subtitle = document.getElementById("bannerSubtitle");

    // Reset gradient classes
    banner.className = "w-full h-48 flex flex-col items-center justify-center text-white text-center rounded-2xl mt-10 transition-all duration-500 ease-in-out";

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];

    banner.classList.add("bg-gradient-to-r", ...randomGradient.split(" "));
    title.textContent = randomTitle;
    subtitle.textContent = randomSubtitle;
  }

  window.onload = generateBanner;

