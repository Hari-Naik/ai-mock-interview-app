"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { toast } from "react-toastify";
import { WebcamIcon } from "lucide-react";
import { cn } from "@/lib/utils";
const Webcam = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    return () => stopCamera();
  }, [error]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err: any) {
      setError(
        err.name === "NotAllowedError"
          ? "Camera access denied. Please allow camera permissions and try again."
          : "Unable to access camera. Please check your camera connection."
      );
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <div className="relative w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <WebcamIcon
          className={cn(
            "absolute min-w-24 min-h-24 text-muted-foreground",
            isStreaming && "hidden"
          )}
        />
      </div>
      <Button
        onClick={isStreaming ? stopCamera : startCamera}
        text={isStreaming ? "Disable Webcam" : "Enable Webcam"}
      />
    </div>
  );
};

export default Webcam;
