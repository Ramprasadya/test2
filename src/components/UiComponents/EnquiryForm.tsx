"use client"
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import DatePicker from 'react-datepicker'
import { Dispatch, SetStateAction } from 'react'
import 'react-phone-input-2/lib/style.css'
import 'react-datepicker/dist/react-datepicker.css'

interface FormValues {
    title: string
    firstName: string
    lastName: string
    email: string
    phone: string
    travelDate: Date | null
    captcha: string
}

type Props = {
    image: string | { src: string;[key: string]: any }
    title: string
    customTitle?: boolean
    setStep?:Dispatch<SetStateAction<"enquiry" | "pax" > >
}

const EnquiryForm = ({ image, title, customTitle = false, setStep}: Props) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            travelDate: null,
        },
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
        setStep?.("pax")
    }
    const imageSrc = typeof image === 'string' ? image : image.src;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex w-full space-x-4 rounded-lg bg-white"
        >
            <div className='w-1/2 hidden md:flex' >
                <img className='h-full w-full' src={imageSrc} alt='Modal contact' />
            </div>
            <div className=' w-full md:w-1/2 flex flex-col gap-y-4 p-6 mt-4'>

                <div>
                    <h1 className="text-lg font-semibold">
                        {!customTitle ? ` Check Rate & Send Enquiry for ${title}` : `${title}`}
                    </h1>
                    <hr className="my-3" />
                    <p className="text-sm text-gray-500">
                        Enter your details, and our consultants will help you with the best quotes
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <select
                        {...register('title', { required: true })}
                        className="rounded border px-3 py-2 text-sm"
                    >
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Ms">Miss</option>
                    </select>

                    <input
                        {...register('firstName', { required: 'First name required' })}
                        placeholder="First Name"
                        className="col-span-2 rounded border px-3 py-2 text-sm"
                    />
                </div>


                <div className="grid grid-cols-2 gap-3">
                    <input
                        {...register('lastName', { required: 'Last name required' })}
                        placeholder="Last Name"
                        className="rounded border px-3 py-2 text-sm"
                    />

                    <input
                        {...register('email', {
                            required: 'Email required',
                            pattern: {
                                value: /^\S+@\S+$/,
                                message: 'Invalid email',
                            },
                        })}
                        placeholder="Email Address"
                        className="rounded border px-3 py-2 text-sm"
                    />
                </div>


                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: 'Mobile number required' }}
                    render={({ field }) => (
                        <PhoneInput
                            {...field}
                            country="in"
                            enableSearch
                            placeholder="Mobile"
                            inputClass="!w-full !border !rounded !py-2 !pl-12 !text-sm"
                            containerClass="!w-full"
                        />
                    )}
                />


                <Controller
                    name="travelDate"
                    control={control}
                    rules={{ required: 'Travel date required' }}
                    render={({ field }) => (
                        <div className="relative w-full">
                            <DatePicker
                                selected={field.value}
                                onChange={field.onChange}
                                placeholderText="Traveller Date"
                                className="w-full rounded border px-3 py-2 pr-10 text-sm"
                                wrapperClassName="w-full"
                            />
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                📅
                            </span>
                        </div>
                    )}
                />


                <div className="flex items-center gap-3">
                    <input
                        {...register('captcha', { required: 'Captcha required' })}
                        placeholder="Captcha code*"
                        className="flex-1 rounded border px-3 py-2 text-sm"
                    />
                    <span className="font-semibold text-blue-600">epidemy</span>
                    <button type="button" className="text-green-600">
                        ⟳
                    </button>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        className="rounded bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700 cursor-pointer"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EnquiryForm
