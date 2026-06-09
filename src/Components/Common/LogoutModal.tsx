import { motion, AnimatePresence } from "framer-motion";
import { LogOut } from "lucide-react";
import { Button } from "../Props";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal = ({ isOpen, onClose, onConfirm }: LogoutModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop Shadow Overlay filter masks */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Card Layout */}
          <motion.div
            className="relative bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center border border-gray-50 z-10"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Warning Icon Badge */}
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
              <LogOut size={22} className="ml-0.5" />
            </div>

            <h3 className="text-lg font-bold text-[#0D1B2A] mb-1">
              Log out of your account?
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              You will need to re-enter your security details to access your
              medical dashboard workspace later.
            </p>

            {/* Action Buttons Layout Structure */}
            <div className="flex gap-3 w-full">
              <div className="flex-1">
                <Button
                  variant="outline"
                  label="Cancel"
                  onClick={onClose}
                  className="w-full border-gray-200! text-gray-700! bg-white hover:bg-gray-50"
                />
              </div>
              <div className="flex-1">
                <Button
                  variant="primary"
                  label="Log out"
                  onClick={onConfirm}
                  className="w-full bg-red-500! hover:bg-red-600! border-none text-white font-semibold"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LogoutModal;
