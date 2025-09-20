
// import useForm from react hook form

import { useForm } from "react-hook-form";

// import zod resolver from resolver/zod but before npm i @hookform/resolvers
import { zodResolver } from '@hookform/resolvers/zod';

// import z from zod but before npm install zod
import * as z from "zod"; 



// create schema validation

const schema=z.object({
  name:z.string().min(1,"please validData").min(3,"at least four characters"),
  lastName:z.string().min(1,"please validData").min(3,"at least four characters"),
  email:z.email({pattern:z.regexes.email}),
  password:z.string().min(6,"at least six characters"),
  confirmPassword:z.string(),
  gender:z.string()


}).refine((data)=> data.password === data.confirmPassword,{
  message:"not match password",
  path:["confirmPassword"]
});


// type safe
type FormDataType=z.infer<typeof schema>;


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting},

  } = useForm<FormDataType>({
   resolver:zodResolver(schema)
  });

  // sleep function

  function sleep(ms:number){
    return new Promise((resolve)=>setTimeout(resolve,ms))
  }

  // checkData

  const onSubmit=async(data:FormDataType)=>{
     await sleep(2000);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(async(data) => await onSubmit(data))}>
      {/* title */}
 

      <fieldset disabled={isSubmitting} className="w-[500px] rounded-sm bg-slate-900 p-5 m-5 shadow shadow-white">
             <h1 className="text-white
       text-center decoration 
       underline w-6/12 mx-auto
        text-2xl font-semibold mb-8
        ">
        ReactHook
      </h1>

      {/* userName */}
      <div className="
      flex flex-col
       px-1.5 mb-1.5
       ">

        <label className="text-white
         text-md mb-0.5
          capitalize
          " 
          htmlFor="name">
          username
        </label>

        <input
          className="border border-gray-300
           rounded-sm
            pl-1.5 py-1.5
           text-blue-200
            focus:outline-none
            "
          type="text"
          id="name"
          placeholder="userName"
          {...register("name")}
        />
        <p className="h-[35px]
          text-red-500 
          flex items-center
           pl-1
           ">
            {errors?.name && <span>{errors?.name.message}</span>}
           </p>
      </div>

      {/* lastName */}
       <div className="
      flex flex-col
       px-1.5 mb-1.5
       ">

        <label className="text-white
         text-md mb-0.5
          capitalize
          " 
          htmlFor="lastName">
          lastName
        </label>

        <input
          className="border border-gray-300
           rounded-sm
            pl-1.5 py-1.5
           text-blue-200
            focus:outline-none
            "
          type="text"
          id="lastName"
          placeholder="lastName"
          {...register("lastName")}
        />
        <p className="h-[35px]
          text-red-500 
          flex items-center
           pl-1
           ">
              {errors?.lastName && <span>{errors?.lastName.message}</span>}
           </p>
      </div>



      {/* email */}
      <div className="flex
       flex-col
        px-1.5 mb-1.5
        ">
        <label className="text-white
         text-md mb-0.5
          capitalize
          " 
          htmlFor="email">
          E-mail
        </label>
        <input
          className="
            border
           border-gray-300
            rounded-sm
            pl-1.5 py-1.5
             text-blue-200 
            focus:outline-none"
          type="email"
          id="email"
          placeholder="E-mail"
          {...register("email")}

        />
        <p className="
          h-[35px]
          text-red-500 
          flex items-center
           pl-1
           "
           >  {errors?.email && <span>{errors?.email.message}</span>}</p>
      </div>


      {/* password */}
      <div className="
      flex flex-col 
      px-1.5 mb-1.5
      ">
        <label
          className="
          text-white text-md
           mb-0.5 capitalize"

          htmlFor="password"
        >
          password
        </label>
        <input
          className="
          border border-gray-300
          rounded-sm
          pl-1.5 py-1.5
         text-blue-200
          focus:outline-none"

          type="password"
          id="password"
          placeholder="password"
          {...register("password")}

        />
        <p className="
        h-[35px]
        text-red-500 
        flex items-center
        pl-1">
            {errors?.password && <span>{errors?.password.message}</span>}
        </p>
      </div>


      {/* confirmPassword */}
      <div className="
      flex flex-col 
      px-1.5 mb-1.5
      ">
        <label
          className="text-white text-md mb-0.5 capitalize"
          htmlFor="confirmPassword"
        >
         confirmPassword
        </label>
        <input
          className="
          border border-gray-300
           rounded-sm 
           pl-1.5 py-1.5
            text-blue-200 
            focus:outline-none"
          type="password"
          id="confirmPassword"
          placeholder="confirmPassword"
          {...register("confirmPassword")}

        />
        <p className="h-[35px]  text-red-500 flex items-center pl-1">
            {errors?.confirmPassword && <span>{errors?.confirmPassword.message}</span>}
        </p>
      </div>


      {/* gender */}
      <div className="
        flex flex-col
        gap-4
        px-1.5 mb-1.5
        ">
        <div className="flex gap-2">
          <label
            className="text-white text-md mb-0.5 capitalize"
            htmlFor="male"
          >
            male
          </label>
          <input type="radio" id="male"  defaultValue="male" defaultChecked  {...register("gender")} />
        </div>
        <div className="flex gap-2">
          <label
            htmlFor="female"
            className="text-white text-md mb-0.5 capitalize"
          >
            female
          </label>
          <input type="radio" id="female" defaultValue="female" {...register("gender")} />
        </div>
        <p className="h-[35px]  text-red-500 flex items-center pl-1">{errors?.gender && <span>{errors?.gender.message}</span>}</p>
      </div>

      {/* send */}
      <button
      type="submit"
        className="
    w-6/12
    block mx-auto
    rounded-sm
    py-2
    bg-slate-600
    text-white
    transition-all ease-in-out delay-150
    hover:bg-slate-700 hover:text-blue-400
  "
      >
        {isSubmitting ? "sending.." : "send"}
      </button>

      </fieldset>

    </form>
  );
};

export default Form;
