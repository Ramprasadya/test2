import {Dispatch,SetStateAction} from 'react'
import { useForm, useWatch } from 'react-hook-form'
import Row from './Row'

type PaxFormValues = {
    adultTwin: number
    adultTriple: number
    adultSingle: number
    childWithoutBed: number
    childWithBed: number
}

type Props = {
    setStep:Dispatch<SetStateAction<"pax" | "enquiry">>
}

const PaxForm = ({setStep}:Props) => {

    const { register: registerPax, control: controlPax, handleSubmit: handleSubmitPax } = useForm<PaxFormValues>({
        defaultValues: {
            adultTwin: 0,
            adultTriple: 0,
            adultSingle: 0,
            childWithoutBed: 0,
            childWithBed: 0,
        },
    })


    const values = useWatch({ control: controlPax })

    const totalPax =
        (values?.adultTwin || 0) +
        (values?.adultTriple || 0) +
        (values?.adultSingle || 0) +
        (values?.childWithoutBed || 0) +
        (values?.childWithBed || 0)

    const handlePax = (data: PaxFormValues) => {
        console.log({ ...data, totalPax })
    }

  return (
      <div
                    className=" flex w-full space-x-4 rounded-lg bg-white"
                >
                    <div className='w-1/2 hidden md:flex' >
                        <img className='h-full w-full' src="https://www.holidays2cherish.com/public/images/noimageother.jpg" alt='Modal contact' />
                    </div>
                    <div className=' w-full md:w-1/2 flex flex-col gap-y-4 p-6 mt-4'>
                        <form
                            onSubmit={handleSubmitPax(handlePax)}
                            className="w-full max-w-xl rounded  bg-white"
                        >
                            <div className="border">


                                <div className="grid grid-cols-2 bg-yellow-50 px-4 py-2 font-semibold">
                                    <div>Details/Room type</div>
                                    <div className="text-right">No. of Pax</div>
                                </div>

                                <Row
                                    label="Adult (Twin Sharing)"
                                    {...registerPax('adultTwin', { valueAsNumber: true, min: 0 })}
                                />

                                <Row
                                    label="Adult (Triple Sharing)"
                                    {...registerPax('adultTriple', { valueAsNumber: true, min: 0 })}
                                />

                                <Row
                                    label="Adult (Single Room)"
                                    {...registerPax('adultSingle', { valueAsNumber: true, min: 0 })}
                                />

                                <Row
                                    label="Child Without Bed"
                                    {...registerPax('childWithoutBed', { valueAsNumber: true, min: 0 })}
                                />

                                <Row
                                    label="Child Extra / With Bed"
                                    {...registerPax('childWithBed', { valueAsNumber: true, min: 0 })}
                                />

                                {/* Total */}
                                <div className="grid grid-cols-2 border-t px-4 py-3 font-semibold">
                                    <div>Total (No. of Pax)</div>
                                    <div className="text-right">{totalPax}</div>
                                </div>
                            </div>
                            {/* Actions */}
                            <div className="flex justify-between gap-4 px-4 py-4">
                                <button
                                    onClick={()=>setStep("enquiry")}
                                    type="button"
                                    className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700 cursor-pointer"
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    className="rounded bg-green-600 px-6 py-2 text-white hover:bg-green-700 cursor-pointer"
                                >
                                    Check Rate &amp; Book
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
  )
}

export default PaxForm