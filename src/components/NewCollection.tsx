import First from "/public/image/img1.jpg"
import Second from "/public/image/img2.jpg"
import Image from "next/image"


const NewCollection = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 py-10 sm:px-8 lg:px-12 bg-[#E4DFD3]">
            <div className="lg:w-1/3 flex justify-center">
                <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-none aspect-[3/4] rounded-xl overflow-hidden">
                    <Image src={First} alt="brown Coat" fill className="object-cover object-top" />
                </div>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center lg:text-left raleway leading-tight lg:mb-12">New <br /> Collections</h2>
                <div className="hidden lg:block mt-4 px-4">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                        <Image src={Second} alt="check Coat" fill className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left raleway space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                    A stoical elegance, you might call it. Black asymmetric dresses blowing voluminously in the arctic wind.
                    The collection brings together the rugged beauty of nature with a refined sense of style. Each piece is designed to withstand the harshest looking effortlessly chic.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                    Sophisticated ensemble featuring a long, olive trench coat and checked blazer, complemented by a new burgundy handbag from ICICLE, paired with brown leather gloves and white trousers.
                </p>
            </div>
        </div>
    );
};



export default NewCollection
