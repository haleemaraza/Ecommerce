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
    <div className="mt-32 ml-40">
    <div className="relative overflow-hidden   rounded-lg bg-gray-100">
      <Image
        src={imageUrl}
        alt="photo"
        width={500}
        height={500}
        className="h-full object-cover object-center"
      />
    </div>
    </div>
  );
}