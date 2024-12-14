import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video = (props) => {
  const texture = useVideoTexture("/videos/Erosion del Suelo.mp4", {
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
      <planeGeometry args={[9, 5.361]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default Video;