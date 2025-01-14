import { motion, AnimatePresence } from "framer-motion";

function Modal({
  isOpen,
  onClose,
  title,
  aboutText,
  src,
  modalSrc,
  github,
  link,
  modalId,
}) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  const imageSrc = modalSrc || src;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          ></motion.div>

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
          >
            <div
              id={modalId}
              className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative"
            >
              <button
                className="absolute top-4 right-4 text-2xl font-bold"
                onClick={onClose}
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 className="text-center mb-4 text-lg font-bold leading-3 uppercase">
                {title}
              </h3>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Modal content"
                    className="rounded-lg w-full sm:w-1/2 h-64 object-cover"
                  />
                )}
                {aboutText && (
                  <p className="xs:text-sm text-base sm:w-1/2">
                    {aboutText}
                  </p>
                )}
              </div>
              <div className="flex justify-center gap-4 mt-6">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    GitHub
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Lien du prototype
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;
