import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonPlusFill} from 'react-icons/bs';
const CourseCard = ({course}) => {
    const {title, rating, total_student, price, consultant, image_url, details, _id} = course;
    return (
        <div>
            <div className="rounded-md shadow-md  dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={consultant?.img} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{consultant?.name}</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-400">Consultant</span>
                        </div>
                    </div>
                </div>
                <img src={image_url} alt={title} className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3">
                    
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                        <span className="inline-block font-semibold text-2xl leading-none dark:text-gray-400">{title}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-4">
                            <span className="inline-block font-medium text-md leading-none text-gray-700">Reviews: <span className='text-amber-500'>{rating?.number}</span></span>
                           <span className="flex font-medium text-md leading-none text-gray-700"><BsFillPersonPlusFill className='mr-2 text-gray-600'></BsFillPersonPlusFill> Student : { total_student}</span>
                    </div>
                    <div className="space-y-3">
                        <p className="text-sm">
                            {details.length > 100 ? 
                            <span> {details.slice(0, 80)} <span className='font-bold text-rose-400 cursor-pointer'><Link to={`/course/${_id}`}>Read More...</Link></span></span> 
                            :
                            details}
                        </p>
                        <span className="inline-block font-bold text-1xl leading-none dark:text-gray-500">Course Fee : ${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;