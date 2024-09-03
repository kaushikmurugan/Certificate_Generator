import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>

            <div id="Footer" className=" bg-black text-white p-3">
                
                <div className="my-3">
                    <div className="text-2xl flex justify-center items-center mx-2">
                        <h1 className="capitalize text-center font-medium">Follow us for More Updates</h1>
                        <hr />
                    </div>
                </div>
                <div className="m-2">
                    <h1 className="capitalize text-center text-2xl font-medium">stay tuned with us</h1>
                    <div className="flex justify-center items-center gap-10 text-3xl my-2 mt-5">
                        <FaInstagram className="text-pink-600" />
                        <FaTwitter className="text-pink-600" />
                        <FaFacebook className="text-pink-600" />
                        <FaYoutube className="text-pink-600" />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <h1 className="capitalize">@ copyrights are received for this page</h1>
                </div>
            </div>
        </>
    );
}
