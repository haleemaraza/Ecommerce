import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

interface iAppProps {
    image: {
      _id: string;
      asset: {
        _ref: string;
        _type: string; 
      }}}

export default function ImageGallery({ image }: iAppProps) {
  const imageUrl = urlForImage(image.asset).url();
  console.log(`Image URL: ${imageUrl}`);

  return (
    <div className="mt-32 md:mt-0 w-full">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={imageUrl}
          alt="photo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
