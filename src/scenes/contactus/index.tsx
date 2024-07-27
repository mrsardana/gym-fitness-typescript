import Htext from "@/components/Htext"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault()
        }


    }
    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
                onViewportLeave={() => setSelectedPage(SelectedPage.OurClasses)}>
                <div className="md:3-3/5">
                    <Htext>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </Htext>
                    <p className="my-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus enim ut,
                        aliquid porro dignissimos unde commodi? Deleniti officiis perspiciatis consequatur,
                        iure doloremque quia eius laudantium veritatis debitis autem vel at earum,
                        eligendi beatae nulla. Vero ex sapiente commodi sit, rem at itaque architecto veritatis quia reiciendis, labore natus? Aliquam, delectus.
                    </p>
                </div>
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/267891949abac7949fc6ab5236c85895"
                            method="POST"
                        >
                            <input className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                                type="text"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,

                                })}
                            />
                            {
                                errors.name && (
                                    <p className="-mt-5 text-primary-500">
                                        {errors.name.type === "required" && "This field is required."}
                                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                                    </p>
                                )
                            }
                            <input className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,}$/i,

                                })}
                            />
                            {
                                errors.email && (
                                    <p className="-mt-5 text-primary-500">
                                        {errors.email.type === "required" && "This field is required."}
                                        {errors.email.type === "pattern" && "Invalid email address."}
                                    </p>
                                )
                            }
                            <textarea className="resize-none mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                                rows={4}
                                cols={50}

                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,

                                })}
                            />
                            {
                                errors.message && (
                                    <p className="-mt-5 text-primary-500">
                                        {errors.message.type === "required" && "This field is required."}
                                        {errors.message.type === "maxLength" && "Max length is 2000 char."}
                                    </p>
                                )
                            }
                            <button type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 gover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <div className="relative mt-16 basis-2/5 md:mt-0">
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img src={ContactUsPageGraphic} alt="ContactUsPageGraphic"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs