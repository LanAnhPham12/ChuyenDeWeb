import React from 'react';

const HomeSectionCard = () => {
    return (
        <div className='cursor-pointer flex flex-col justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
            <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full'
                     src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465187/item/vngoods_13_465187_3x4.jpg?width=369" alt=""/>
            </div>

            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>T-Shirt</h3>
                <p className='mt-2 text-sm text-gray-500'>colorful T-Shirt </p>
            </div>

        </div>
    )
}
export default HomeSectionCard;