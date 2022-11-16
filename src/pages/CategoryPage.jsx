import React from 'react';
import Announce from '../components/Announce';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

function CategoryPage() {
    const filterSortstyle ='ml-3 border-2 border-silver'
    return (
        <div>
            <Announce />
            <Navbar/>
            <div className=' flex flex-col p-5'>
                <h1 className='text-[30px]'>Men's Collection</h1>
                <div className='flex items-center justify-between mt-3'>
                    <div className='flex mobile:flex-col'>
                       <p>Filter By</p> 
                       <select className={filterSortstyle + 'mobile:ml-0'} >
                            <option Selected disabled>Size</option>
                            <option >Small</option>
                            <option >Medium</option>
                            <option >Large</option>
                        </select>
                        <select className={filterSortstyle + 'mobile:ml-0'} >
                            <option Selected disabled>Colour</option>
                            <option >Blue </option>
                            <option >Red </option>
                            <option >Yellow </option>
                       </select>
                    </div>

                    <div className='flex mobile:flex-col mobile:items-end'>
                    <p>Sort By</p>
                    <select className={filterSortstyle}>
                            <option  >Trending</option>
                            <option >Antique </option>
                            <option >Price (Accending) </option>
                            <option >Price (Decending)</option>
                       </select>
                </div>

                </div>
              
            </div>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default CategoryPage;