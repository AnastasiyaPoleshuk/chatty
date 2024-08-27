import { error, success } from "../../components/Messages/Messages";
import { CONSTANTS } from "../../utils/constants";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import dayjs from "dayjs";
import { StatusCodes } from "http-status-codes";
import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import "./SignUpEventForm.scss";
import { Select } from "antd";
import { PriceCardInfo } from "../../utils/PriceCardInfo";
import { getUpcomingEvent } from "../../utils/getUpcomingEvent";
import { calendarInfo } from "../../utils/calendarInfo";

type Inputs = {
  name: string;
  phone: string;
  eventName: string;
};

const getOptions = () => {
  return PriceCardInfo.map((event) => {
    return {
      value: event.title,
      label: <span>{event.title}</span>,
    };
  });
};

export const SignUpEventForm = () => {
  const { closeModal } = useContext(AppContext);
  const [currentEventName, setCurrentEventName] = useState("");
  const [currentEventDate, setCurrentEventDate] = useState("");
  const [isError, setIsError] = useState(true);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const currentEvent = getUpcomingEvent(calendarInfo, PriceCardInfo[0].title);

    if (currentEvent) {
      setCurrentEventDate(
        dayjs(currentEvent.date).format(CONSTANTS.CALENDAR_FORMAT),
      );
    } else {
      setCurrentEventDate("");
    }
  }, []);

  useEffect(() => {
    const currentEvent = getUpcomingEvent(calendarInfo, currentEventName);

    if (currentEvent) {
      setCurrentEventDate(
        dayjs(currentEvent.date).format(CONSTANTS.CALENDAR_FORMAT),
      );
      setIsError(false);
    } else {
      setCurrentEventDate("");
      currentEventName.length && error(CONSTANTS.MESSAGES.SIGN_UP_FAIL);
      currentEventName.length && setIsError(true);
    }
  }, [currentEventName]);

  const changeEvent = (
    onChange: (event: string) => void,
    currentEvent: string,
  ) => {
    setCurrentEventName(currentEvent);
    onChange(currentEvent);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const upcomingEvent = getUpcomingEvent(calendarInfo, data.eventName);

    if (!upcomingEvent) {
      error(CONSTANTS.MESSAGES.SIGN_UP_FAIL);
      closeModal(CONSTANTS.MODALS.SIGN_UP__MODAL);
      return;
    }

    const result = await axios.post(
      `${CONSTANTS.TG_REQUEST_URL}&text=Event: ${data.eventName}%0ADate: ${dayjs(upcomingEvent.date).format(CONSTANTS.CALENDAR_FORMAT)}%0AName: ${data.name}%0APhone: ${data.phone}`,
    );

    if (result.status === StatusCodes.OK) {
      success(CONSTANTS.MESSAGES.CALENDAR_FORM_SUCCESS);
    } else {
      error(CONSTANTS.MESSAGES.CALENDAR_FORM_FAIL);
    }

    closeModal(CONSTANTS.MODALS.SIGN_UP__MODAL);
  };

  return (
    <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Your name"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <input
        placeholder="Your phone"
        {...register("phone", { required: true })}
      />
      {errors.phone && <span>This field is required</span>}
      <Controller
        control={control}
        name="eventName"
        render={({ field: { onChange } }) => (
          <Select
            // defaultValue={PriceCardInfo[0].title}
            defaultValue="Choose the event"
            onChange={(currentEvent) => changeEvent(onChange, currentEvent)}
            options={getOptions()}
          />
        )}
      />
      {currentEventDate && <p>{`Date: ${currentEventDate}`}</p>}
      <button type="submit" disabled={isError}>
        Submit
      </button>
    </form>
  );
};
