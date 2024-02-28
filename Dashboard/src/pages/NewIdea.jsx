/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

export const NewIdea = ()=>{
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
        // eslint-disable-next-line no-unused-vars
        reset,
      } = useForm({
        defaultValues: {
        titel:'',
        description:''
       
        },
      });

      const addIdea = ({ titel , description })=>{

console.log("Hello")

      }
     
return<section className="bg-white dark:bg-gray-900">
<div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
    <form action="#">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title </label>
                <input type="text" name="name" id="name"
                {...register("titel", {
                    required: "please! Enter Titel",
                    minLength: {
                      value: 2,
                      message: "Please Enter atleast more than 2 character",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please Enter atleast less than 15 character",
                    },
                  })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Idea Titel" required=""/>
             {errors.titel && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.titel.message}
                    </span>
                  )}
            </div>
           
            <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Of Idea</label>
                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">Select Idea Type</option>
                 
                    <option value="Motivation">for Motivation</option>
                    <option value="Work">for Work</option>
                    <option value="Happiness">for Happiness</option>
                </select>
            </div>
          
            <div className="sm:col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="8" 
                 {...register("description", {
                    required: "please! Enter Description",
                 
                  })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
             {errors.description && (
                    <span className="text-red-700 col-span-1 md:col-span-2 ">
                      {errors.description.message}
                    </span>
                  )}
            </div>
        </div>
        <button type="submit" 
         className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-blue-500 border border-blue-600 hover:text-white hover:bg-blue-600 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 focus:ring-primary-900 hover:bg-primary-800"

        onClick={handleSubmit(addIdea)} 
        
       
        >
            Add product
        </button>
    </form>
</div>
</section>
}