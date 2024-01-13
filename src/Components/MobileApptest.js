import React, { useEffect } from "react";
import { useCountUp } from "react-countup";
import { useInViewport } from "react-in-viewport";

export default function MobileApptest() {
  const countUpRef1 = React.useRef(null);
  const { inViewport, enterCount, leaveCount } = useInViewport(countUpRef1);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef1,
    start: 0,
    end: 50,
    // delay: 1000,
    duration: 4,
    suffix: "+",
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  useEffect(() => {
    if (enterCount == 1) {
      reset()
      pauseResume()
    }
  }, [enterCount]);
  return (
    <div>
      <p className="count" ref={countUpRef1}></p>
    </div>
  );
}
