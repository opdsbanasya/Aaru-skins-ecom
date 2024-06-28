import React from "react";
import {  useNavigate, useParams } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()
  const name = useParams()

  const handleClickTop =() => {
    navigate({name});
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="w-[90%] mx-auto mt-10 p-8 h-[40vh] flex items-center justify-around gap-10 bg-[#EBF4F6] rounded-lg">
        <div className="part1 h-full w-1/4 space-y-4">
          <h1 className="uppercase text-2xl font-semibold">aaru Skins</h1>
          <h4 className="text-sm">45, Manu Tower, Malviya Nagar <br /> Jaipur, Rajasthan <br />302017.</h4>
        </div>
        <div className="part2 h-full w-1/4 ">
          <h5 className="text-xs leading-10">Pages</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">Contact us</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">About Us</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">Terms and condition</h5>
        </div>
        <div className="part3 h-full w-1/4 ">
          <h5 className="text-xs leading-10">Follow us</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">Twitter</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">Facebook</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">YouTube</h5>
          <h5 className="text-xs leading-10 cursor-pointer hover:underline">Instagram</h5>
        </div>
        <button
          onClick={handleClickTop}
          className="fixed bottom-5 right-10 h-10 w-10 grid place-items-center bg-zinc-200 rounded-full cursor-pointer"
          to="/home"
        >
          <i className="ri-arrow-up-s-line text-4xl"></i>
        </button>
      </footer>
      <br />
      <br />
    </div>
  );
}
export default Footer;
