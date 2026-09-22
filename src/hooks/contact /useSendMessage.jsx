import { sendMessageFn } from '@/services/contact/services'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'

const useSendMessage = () => {
    
    const {mutate : sendMessage ,isPending} = useMutation({
        mutationKey : ['sendMessage'],
        mutationFn : (data)=> sendMessageFn(data),

        onSuccess : ()=> {
            toast.success("Message sent successfully")
        },

        onError :()=> {
            toast.error("Failed to send message")
        }
    })

    return {sendMessage , isPending}
}

export default useSendMessage