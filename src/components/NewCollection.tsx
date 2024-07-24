import First from "/public/image/img1.jpg"
import Second from "/public/image/img2.jpg"
import Image from "next/image"


const NewCollection = () => {
    return (
        <div className="flex flex-col lg:flex-row p-10 bg-[#E4DFD3]">
            <div className="lg:w-1/3 flex justify-center">
                <Image src={First} alt="brown Coat" width={400} height={100} className="object-cover object-top h-full" />
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center ">
                <h2 className="text-6xl lg:mb-48 text-center lg:text-left raleway">New <br /> Collections</h2>
                <div className="lg:flex space-x-4 hidden pl-4 pr-4">
                    <Image src={Second} alt="check Coat" className="object-cover" />
                </div>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center sm:w-3/3 sm:text-center md:text-center md:w-3/3 raleway">
                <p>
                    A stoical elegance, you might call it. Black asymmetric dresses blowing voluminously in the arctic wind.
                    The collection brings together the rugged beauty of nature with a refined sense of style. Each piece is designed to withstand the harshest looking effortlessly chic.                        </p>
                <p className="lg:mb-36 ">
                Sophisticated ensemble featuring a long, olive trench coat and checked blazer, complemented by a new burgundy handbag from ICICLE, paired with brown leather gloves and white trousers.                </p>
            </div>
        </div>
    );
};



export default NewCollection