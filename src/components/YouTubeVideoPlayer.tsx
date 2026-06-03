'use client';

import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

const VIDEO_WIDTH = 980;
const VIDEO_HEIGHT = 650;
const YOUTUBE_VIDEO_ID = 'LXb3EKWsInQ';

const getEmbedUrl = (videoId: string) =>
    `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;

type YouTubeVideoPlayerProps = {
    previewSrc: StaticImageData;
    previewAlt?: string;
    videoId?: string;
};

const YouTubeVideoPlayer = ({
    previewSrc,
    previewAlt = 'video preview',
    videoId = YOUTUBE_VIDEO_ID,
}: YouTubeVideoPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handlePlay = () => {
        if (iframeRef.current) {
            iframeRef.current.src = getEmbedUrl(videoId);
        }
        setIsPlaying(true);
    };

    return (
        <div
            className="video_img relative mx-auto w-full max-w-[980px] overflow-hidden"
            style={{ aspectRatio: `${VIDEO_WIDTH} / ${VIDEO_HEIGHT}` }}
        >
            <iframe
                ref={iframeRef}
                className={`absolute inset-0 h-full w-full ${isPlaying ? 'z-10' : 'z-0 pointer-events-none opacity-0'}`}
                title="my Webcoder YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />

            {!isPlaying && (
                <button
                    type="button"
                    className="group relative z-20 block h-full w-full cursor-pointer border-0 bg-transparent p-0"
                    aria-label="Play video"
                    onClick={handlePlay}
                >
                    <Image
                        className="video_img h-full w-full object-cover"
                        src={previewSrc}
                        alt={previewAlt}
                        width={VIDEO_WIDTH}
                        height={VIDEO_HEIGHT}
                    />
                    <span
                        className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40"
                        aria-hidden
                    >
                        <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
                            <span className="ml-1.5 block h-0 w-0 border-y-[14px] border-l-[24px] border-y-transparent border-l-[#333333]" />
                        </span>
                    </span>
                </button>
            )}
        </div>
    );
};

export default YouTubeVideoPlayer;
