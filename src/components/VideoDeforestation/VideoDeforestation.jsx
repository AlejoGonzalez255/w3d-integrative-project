import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const VideoDeforestation = (props) => {
  const texture = useVideoTexture("/videos/Deforestation.mp4", {
    muted: false,
    loop: true,
    start: false,
  });

  const [pause, setPause] = useState(false);

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, setPause, texture]
  );

  return (
    <mesh {...props} onClick={handleVideo}>
      <planeGeometry args={[1.6 , 0.9]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default VideoDeforestation;