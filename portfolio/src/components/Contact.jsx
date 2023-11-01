import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

function Contact() {
    const schema = Yup.object().shape( {
        fullName: Yup.string().required("Full Name is Required"),
        email: Yup.string().email().required("Full Email Address is Required"),
        informationAboutRequest: Yup.string().max(200).required("Too Many Characters.")

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            if(response.ok) {
                console.log('Email Sent Successfully')
            } else {
                console.error("Email Sending Failed")
            }
        } catch(error) {
            console.log("An Error Occured", error)
        }
    }
  return (
    <div>
        <h1>Contact</h1>
        <form className="submitForm" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter Full Name Here.." {...register("fullName")}></input>
            {errors.fullName?.message}
            <input type="text" placeholder="Enter Email Here..." {...register("email")}></input>
            {errors.email?.message}
            <input type="text" placeholder="Information About Request" {...register("informationAboutRequest")}></input>
            {errors.information?.message}
            <button type="submit">Submit</button>
            
        </form>
      
    </div>
  )
}

export default Contact
