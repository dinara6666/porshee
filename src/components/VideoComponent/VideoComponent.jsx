import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./VideoComponent.css";

const VideoComponent = () => {
    const videos = useRef([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoSources = [
        "/videos/car6.mp4",
        "/videos/car7.mp4",
        "/videos/car5.mp4",
        "/videos/car3.mp4",
        "/videos/car4.mp4",
        "/videos/car8.mp4",
        "/videos/car9.mp4",
        "/videos/car10.mp4",
        "/videos/car1.mp4",
    ];

    const handlePlay = (index) => {
        videos.current.forEach((video, i) => {
            if (i !== index && video) {
                video.pause();
                video.muted = true;
            }
        });
        videos.current[index].muted = false;
        videos.current[index].play();
    };

    const togglePlayAll = () => {
        if (isPlaying) {
            videos.current.forEach((video) => {
                if (video) {
                    video.pause();
                    video.muted = true;
                }
            });
        } else {
            videos.current.forEach((video, index) => {
                if (video) {
                    video.play();
                    if (index !== 0) video.muted = true;
                }
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="container">
            <h2 className="h23">Car Video Review</h2>

            <button
                onClick={togglePlayAll}
                className={`button ${isPlaying ? "stop" : "play"}`}
            >
                {isPlaying ? "Stop All Videos" : "Play All Videos"}
            </button>

            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    1400: { slidesPerView: 4 },
                    1200: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 },
                }}
                className="swiper-container"
            >
                {videoSources.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="video-slide">
                            <video
                                ref={(el) => (videos.current[index] = el)}
                                autoPlay
                                loop
                                muted
                                playsInline
                                width="600"
                                onClick={() => handlePlay(index)}
                            >
                                <source src={src} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default VideoComponent;
