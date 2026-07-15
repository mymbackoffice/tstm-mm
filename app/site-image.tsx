import NextImage, { type ImageProps } from "next/image";

export function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      unoptimized
      loading={props.priority ? undefined : (props.loading ?? "eager")}
    />
  );
}
