import { X } from 'lucide-react'
import { useEffect, ReactNode, Dispatch, SetStateAction } from 'react'

interface ModalProps {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    children: ReactNode
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
    
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape')
                setIsOpen(false)
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEsc)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = ''
        }
    }, [isOpen, handleCloseModal])



    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={handleCloseModal}
        >
            <div
                className="relative w-full max-w-5xl rounded-lg bg-white  shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleCloseModal}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                    aria-label="Close modal"
                >
                    <X />
                </button>

                {children}
            </div>
        </div>
    )
}

export default Modal
