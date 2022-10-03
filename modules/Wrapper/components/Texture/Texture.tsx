import { TextureContainer } from "./styles";

export const Texture = () => {
  return (
    <>
      <TextureContainer
        id="porra aparece"
        shouldBlink={false}
        data-testid="static-texture"
      />
      <TextureContainer
        id="porra aparece"
        shouldBlink
        data-testid="animated-texture"
      />
    </>
  );
};
