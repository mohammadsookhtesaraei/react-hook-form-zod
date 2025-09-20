import { useForm } from "react-hook-form";

interface FormDataType {
  name: string;
  lastName: string;
  email: string;
  password: "";
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <form className="w-[500px] rounded-sm bg-slate-900 p-5 m-5 shadow shadow-white">
      {/* title */}
      <h1 className="text-white text-center decoration underline w-6/12 mx-auto text-2xl font-semibold mb-8">
        ReactHook
      </h1>
      {/* userName */}
      <div className="flex flex-col px-1.5 mb-1.5">
        <label className="text-white text-md mb-0.5 capitalize" htmlFor="name">
          username
        </label>
        <input
          className="border border-gray-300 rounded-sm pl-1.5 py-1.5 text-blue-200 focus:outline-none"
          type="text"
          id="name"
          placeholder="userName"
        />
        <p className="h-[35px]  text-red-500 flex items-center pl-1">error</p>
      </div>

      {/* email */}
      <div className="flex flex-col px-1.5 mb-1.5">
        <label className="text-white text-md mb-0.5 capitalize" htmlFor="email">
          E-mail
        </label>
        <input
          className="border border-gray-300 rounded-sm pl-1.5 py-1.5 text-blue-200 focus:outline-none"
          type="email"
          id="email"
          placeholder="E-mail"
        />
        <p className="h-[35px]  text-red-500 flex items-center pl-1">error</p>
      </div>
      {/* password */}
      <div className="flex flex-col px-1.5 mb-1.5">
        <label
          className="text-white text-md mb-0.5 capitalize"
          htmlFor="password"
        >
          password
        </label>
        <input
          className="border border-gray-300 rounded-sm pl-1.5 py-1.5 text-blue-200 focus:outline-none"
          type="password"
          id="password"
          placeholder="password"
        />
        <p className="h-[35px]  text-red-500 flex items-center pl-1">error</p>
      </div>
      {/* confirmPassword */}
      <div className="flex flex-col px-1.5 mb-1.5">
        <label
          className="text-white text-md mb-0.5 capitalize"
          htmlFor="confirmpassword"
        >
          confirmpassword
        </label>
        <input
          className="border border-gray-300 rounded-sm pl-1.5 py-1.5 text-blue-200 focus:outline-none"
          type="password"
          id="confirmpassword"
          placeholder="confirmpassword"
        />
        <p className="h-[35px]  text-red-500 flex items-center pl-1">error</p>
      </div>
      {/* gender */}
      <div className="flex flex-col gap-4 px-1.5 mb-1.5">
        <div className="flex gap-2">
          <label
            className="text-white text-md mb-0.5 capitalize"
            htmlFor="male"
          >
            male
          </label>
          <input type="radio" id="male" name="gender" defaultChecked />
        </div>
        <div className="flex gap-2">
          <label
            htmlFor="female"
            className="text-white text-md mb-0.5 capitalize"
          >
            female
          </label>
          <input type="radio" id="female" name="gender" />
        </div>
        <p className="h-[35px]  text-red-500 flex items-center pl-1">error</p>
      </div>

      {/* send */}
      <button
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
        send
      </button>
    </form>
  );
};

export default Form;
