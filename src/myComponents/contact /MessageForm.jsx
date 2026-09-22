import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from '@/constants/schema'
import useSendMessage from '@/hooks/contact /useSendMessage'



const MessageForm = () => {

    const { sendMessage, isPending } = useSendMessage()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            sendMessage(values, {
                onSuccess: () => {
                    resetForm()
                }
            })
        },
    })

    return (
        <div className='message border border-dark dark:border-secondary rounded-lg p-4'>
            <div className="title text-2xl font-semibold text-dark dark:text-light mb-4">
                Message Me
            </div>
            <form onSubmit={formik.handleSubmit} className='p-2 flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <input
                        type="text"
                        name="name"
                        placeholder='Your Name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 border border-x-transparent rounded-md border-t-transparent border-dark dark:border-secondary outline-none text-dark dark:text-light'
                    />
                    {formik.touched.name && formik.errors.name && (
                        <span className='text-red-500 text-sm'>{formik.errors.name}</span>
                    )}
                </div>

                <div className='flex flex-col gap-1'>
                    <input
                        type="email"
                        name="email"
                        placeholder='Your Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 border border-x-transparent rounded-md border-t-transparent border-dark dark:border-secondary outline-none text-dark dark:text-light'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <span className='text-red-500 text-sm'>{formik.errors.email}</span>
                    )}
                </div>

                <div className='flex flex-col gap-1'>
                    <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder='Your Message'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='p-2 border border-x-transparent rounded-md border-t-transparent border-dark dark:border-secondary outline-none text-dark dark:text-light'
                    ></textarea>
                    {formik.touched.message && formik.errors.message && (
                        <span className='text-red-500 text-sm'>{formik.errors.message}</span>
                    )}
                </div>

                <button
                    type='submit'
                    disabled={isPending}
                    className='bg-primary text-light p-2 rounded-lg font-semibold disabled:opacity-50 cursor-pointer'
                >
                    {isPending? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    )
}

export default MessageForm