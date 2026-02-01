import { useCountdown } from "../../../hooks/useCountdown";

export type CountdownTimerProps = {
  promotionEndDate: Date;
};

export function CountdownTimer({ promotionEndDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isFinished } =
    useCountdown(promotionEndDate);

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
