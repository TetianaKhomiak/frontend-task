import type { Props } from "../../../types/types";
import { useCountdown } from "./useCountdown";

export function CountdownTimer({ targetDate }: Props) {
  const { days, hours, minutes, seconds, isFinished } =
    useCountdown(targetDate);

  //   if (isFinished)
  //     return (
  //       <span className="text-white font-(family-name:--font-anonymous)">
  //         Час вийшов ⏰
  //       </span>
  //     );

  return (
    <time className="font-normal">
      {days} dni : {hours} h : {minutes} min : {seconds} s
    </time>
  );
}
