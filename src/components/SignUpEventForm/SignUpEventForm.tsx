import { ArrowDownOutlined } from "@ant-design/icons";
import { Select } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { StatusCodes } from "http-status-codes";
import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { error, success } from "../../components/Messages/Messages";
import { CONSTANTS } from "../../utils/constants";
import { AppContext } from "../../context/AppContext";
import { PriceCardInfo } from "../../utils/PriceCardInfo";
import { getUpcomingEvent } from "../../utils/getUpcomingEvent";
import { calendarInfo } from "../../utils/calendarInfo";

import "./SignUpEventForm.scss";

type Inputs = {
  name: string;
  phone: string;
  eventName: string;
};

const getOptions = () => {
  return PriceCardInfo.map((event) => {
    return {
      value: event.title,
      label: <span className="select__option">{event.title}</span>,
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
      <h2 className="form__title">Sign up for an event</h2>
      <div className="input__block">
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className={`sign-up__input name ${errors.name ? "error__input" : ""}`}
        />
        {errors.name && (
          <span className="error__text">This field is required</span>
        )}
      </div>

      <div className="input__block">
        <input
          placeholder="Phone"
          {...register("phone", { required: true })}
          className={`sign-up__input phone ${errors.phone ? "error__input" : ""}`}
        />
        {errors.phone && (
          <span className="error__text">This field is required</span>
        )}
      </div>

      <Controller
        control={control}
        name="eventName"
        render={({ field: { onChange } }) => (
          <Select
            defaultValue="Desired event"
            onChange={(currentEvent) => changeEvent(onChange, currentEvent)}
            options={getOptions()}
            style={{
              border: "2px solid rgba(33, 33, 33, 0.5)",
              padding: "10px 16px",
              borderRadius: 10,
              width: "100%",
              background: "#fff",
            }}
          />
        )}
      />
      {currentEventDate && (
        <p className="sign-up__form-date">{`Date: ${currentEventDate}`}</p>
      )}
      <button
        type="submit"
        disabled={isError}
        className={`sign-up__submit btn ${isError ? "disabled__btn" : ""}`}
      >
        <span>Submit</span>
        <ArrowDownOutlined
          style={{
            color: isError ? "rgb(206, 205, 204)" : "#d7611f",
            background: isError ? "rgb(99, 98, 98)" : "#fff",
            padding: 10,
            borderRadius: "50%",
          }}
        />
      </button>
    </form>
  );
};
