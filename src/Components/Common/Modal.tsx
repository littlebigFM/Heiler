import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50"
          />

          {/* Sheet — bottom on mobile, centered on desktop */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`
              fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 z-50 shadow-xl
              md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              md:w-full md:max-w-md md:rounded-2xl
              ${className}
            `}
          >
            {/* Drag handle — mobile only */}
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5 md:hidden" />

            {title && (
              <h3 className="font-semibold text-lg text-gray-900 text-center mb-4 font-poppins">
                {title}
              </h3>
            )}

            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
