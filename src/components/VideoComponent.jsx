import React, { useRef, useState, useEffect } from "react";
import "./VideoComponent.css";

const VideoComponent = () => {
    const videos = useRef([]);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoSources = [
        "/videos/pinterest.mp4",
        "/videos/car2.mp4",
        "/videos/car3.mp4",
        "/videos/car4.mp4",
        
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

    useEffect(() => {

        videoSources.forEach((src, index) => {
            const video = document.createElement("video");
            video.src = src;
            video.load();
            video.onerror = () => console.error(`Ошибка загрузки видео: ${src}`);
        });
    }, []);

    return (
        <div className="container">
            <h2 className="h23">Car Video Review</h2>

            <button
                onClick={togglePlayAll}
                className={`button ${isPlaying ? "stop" : "play"}`}
            >
                {isPlaying ? "Stop All Videos" : "Play All Videos"}
            </button>

            <div className="car20">
                {videoSources.map((src, index) => (
                    <div key={index} className={`vid${index + 1}`}>
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
                ))}
            </div>
        </div>
    );
};

export default VideoComponent;
