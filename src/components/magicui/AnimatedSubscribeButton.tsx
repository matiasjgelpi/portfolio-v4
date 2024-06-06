"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface AnimatedSubscribeButtonProps {
  brand: string;
  subscribeStatus: boolean;
  buttonTextColor?: string;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

const onSub = () => {
  const link = document.createElement("a");
  link.href = "/assets/docs/MatiasGelpiCV.pdf";
  link.download = "MatiasGelpiCV.pdf";

  document.body.appendChild(link);
  link.click();
};

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({ brand, subscribeStatus, buttonTextColor, changeText, initialText }) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  useEffect(() => {
    if (isSubscribed) {
      onSub();
    }
  }, [isSubscribed]);

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-[200px] items-center justify-center bg-gray-600 rounded-md border-none text p-[10px]"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: "white" }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[200px] cursor-pointer items-center justify-center rounded-md border-none p-[10px]"
          style={{ backgroundColor: brand, color: buttonTextColor }}
          onClick={() => {
            setIsSubscribed(true);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
