import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  let [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-start bg-gradient-to-br from-slate-700 to-slate-400 mt-6">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
        <div className="flex justify-between rounded p-8">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="px-8 pb-8">
          <div>
            <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 w-4/6 rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400  hover:text-slate-700"
            >
              Back
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className={`${
                step > 4 ? "pointer-events-none opacity-50" : ""
              }bg flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-4`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div animate={status} className="relative ">
      <motion.div
        // animate={status}
        variants={{
          active: {
            scale: 1,
            // opacity: 1,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          },
          complete: {
            scale: 1.25,
            // opacity: 0,
          },
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 bg-blue-200 rounded-full"
      ></motion.div>
      <motion.div
        initial={false}
        // animate={status}
        variants={{
          inactive: {
            backgroundColor: "#fff",
            borderColor: "#1a3f77",
            color: "red",
          },
          active: {
            backgroundColor: "#fff",
            borderColor: "#1a3f77",
            color: "red",
          },
          complete: {
            backgroundColor: "#0072e6",
            borderColor: "#0072e6",
            color: "red",
          },
        }}
        transition={{ duration: 0.2 }}
        className={` relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold`}
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIconx className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIconx(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="white"
      className="w-6 h-6"
    >
      <motion.path
        props={props}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
