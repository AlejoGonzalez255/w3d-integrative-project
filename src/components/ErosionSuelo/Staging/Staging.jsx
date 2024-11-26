import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <>
      <Environment
        ground={{ height: 5, radius: 200, scale: 100 }}
        files={"/hdris/sky/sky1.hdr"}
        background={true}
      />
    </>
  );
};

export default Staging;