import React from 'react';

function Counter() {
    const countbutton ='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer';
    return (
        <div>
            <div className='flex item-center justify-center text-2xl mobile:mr-[75%]'>Quantity 
                <div className='ml-5 shadow-md flex'>
                    <div className={countbutton+' rounded-l-md'}> 
                        -
                    </div>
                    <div className='w-8 flex items-center justify-center  border-[#8a4af3] border-[1px]'>
                        1
                    </div>
                    <div className={countbutton + ' rounded-r-md'}>
                        +
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Counter;