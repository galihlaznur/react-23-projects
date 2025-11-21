import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import style from "./imageslider.module.css";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. Definisikan fungsi async di dalam useEffect
    async function fetchImages() {
      // 2. Tambahkan pengecekan prasyarat di awal
      if (!url) {
        // Tidak perlu fetching jika URL kosong
        return;
      }

      try {
        // 3. Status Loading diaktifkan sebelum fetch
        setLoading(true);

        // Pastikan variabel 'page' dan 'limit' tersedia di scope ini
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);

        // Tambahkan pengecekan status code response untuk menangkap error HTTP
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        // 4. Update state dan matikan loading
        setImages(data);
        setErrorMsg(null); // Hapus pesan error sebelumnya jika berhasil
      } catch (error) {
        // 5. Tangani error (termasuk error network atau HTTP)
        setErrorMsg(error.message);
        setImages([]); // Kosongkan images jika error
      } finally {
        // 6. Matikan loading DENGAN PASTI, baik berhasil atau gagal
        setLoading(false);
      }
    }

    // Panggil fungsi
    fetchImages();

    // 7. Dependency Array yang benar:
    // Fungsi akan dijalankan ulang setiap kali 'url', 'page', atau 'limit' berubah
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error: {errorMsg}</div>;
  }

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={style.container}>
      {/* Panah ke kiri */}
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className={`${style.arrow} ${style["arrow-left"]}`}
      />

      {/* List gambar */}
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={index}
              src={image.download_url}
              alt={image.download_url}
              className={
                currentSlide === index
                  ? style["current-image"]
                  : `${style["current-image"]} ${style["hide-current-image"]}`
              }
            />
          ))
        : null}

      {/* Panah ke kanan */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className={`${style.arrow} ${style["arrow-right"]}`}
      />

      {/* Indikator lingkaran */}
      <span className={style["circle-indicators"]}>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? style["current-indicator"]
                    : `${style["current-indicator"]} ${style["inactive-indicator"]}`
                  }
                  onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
