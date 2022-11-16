import React from "react";
import Annoucne from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/Newsletter";

const ProductPage = () => {
    const colorpick='w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5';

    return (
      <div>
        <Annoucne />
        <Navbar />
        <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
              className=" w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
              alt="product_image"
            />
          </div>
          <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
            <h1 className="title text-[40px] mobile:text-[30px]">
              Cream Hoody Orignal
            </h1>
            <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
              accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
              doloribus dolore aliquam veniam. Natus totam odit consequatur
              consectetur delectus nihil!
            </p>
            <div className="flex flex-col place-self-start">
              <p className="mt-7 text-3xl">
                Price: <b>₹7000</b>
              </p>
  
              <div className="colors flex mt-7 text-2xl">
              Colours
              <div className= {colorpick +' bg-red-600'} ></div>
              <div className= {colorpick +' bg-blue-600'}></div>
              <div className= {colorpick +' bg-green-600'}></div>
              <div className= {colorpick +' bg-yellow-400'}></div>
              </div>
  
              <div className="mt-7 text-2xl">
                Size
                <select className="border-[2px] border-silver rounded-md ml-5">
                  <option selected>Select</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                </select>
              </div>
              
            </div>
            <div className="mt-5">
                <Counter />
              </div>
            <button className="btn mt-5">
              Add to Cart
            </button>
            <br />
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    );
  };
  
  export default ProductPage;