import NextImage from "next/image";
import { ImageProps } from "next/image";
import { getImageBlur } from "@/actions";


export const Image = async (props: ImageProps) => {
  const image = await getImageBlur(props.src as string);
  return <NextImage {...props} blurDataURL={`data:image/png;base64,${image}`} placeholder="blur" />;
};
