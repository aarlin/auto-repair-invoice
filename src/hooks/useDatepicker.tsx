import { useState } from "react";

export enum FocusedDatepickerItem {
  START_DATE = "startDate",
  END_DATE = "endDate"
}

export const useDatepicker = () => {
  const [datepickerState, setDatepickerState] = useState({
    startDate: null,
    endDate: null,
    focused: FocusedDatepickerItem.START_DATE
  });

  return {
    datepickerState,
    setDatepickerState
  };
};
