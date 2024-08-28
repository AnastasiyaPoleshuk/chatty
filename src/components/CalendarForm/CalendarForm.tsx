import { useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useForm, SubmitHandler } from "react-hook-form";
import StatusCodes from "http-status-codes";
import { ArrowDownOutlined } from "@ant-design/icons";
import { AppContext } from "../../context/AppContext";
import { CONSTANTS } from "../../utils/constants";
import { error, success } from "../Messages/Messages";

import "./CalendarForm.scss";

type Inputs = {
  name: string;
  phone: string;
};

export const CalendarForm = () => {
  const { closeModal, eventData } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await axios.post(
      `${CONSTANTS.TG_REQUEST_URL}&text=Event: ${eventData.name}%0ADate: ${dayjs(eventData.date).format(CONSTANTS.CALENDAR_FORMAT)}%0A Name: ${data.name}%0APhone: ${data.phone}`,
    );

    if (result.status === StatusCodes.OK) {
      success(CONSTANTS.MESSAGES.CALENDAR_FORM_SUCCESS);
    } else {
      error(CONSTANTS.MESSAGES.CALENDAR_FORM_FAIL);
    }

    closeModal(CONSTANTS.MODALS.CALENDAR__MODAL);
  };

  return (
    <form className="calendar__form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">{eventData.name}</h2>

      <div className="input__block">
        <input
          {...register("name", { required: true })}
          className={`calendar__input name ${errors.name ? "error__input" : ""}`}
        />
        {errors.name && (
          <span className="error__text">This field is required</span>
        )}
      </div>

      <div className="input__block">
        <input
          {...register("phone", { required: true })}
          className={`calendar__input phone ${errors.phone ? "error__input" : ""}`}
        />
        {errors.phone && (
          <span className="error__text">This field is required</span>
        )}
      </div>
      <button
        type="submit"
        disabled={errors.name && errors.phone && false}
        className={`calendar__submit btn ${errors.name && errors.phone ? "disabled__btn" : ""}`}
      >
        <span>Submit</span>
        <ArrowDownOutlined
          style={{
            color: "#d7611f",
            background: "#fff",
            padding: 10,
            borderRadius: "50%",
          }}
        />
      </button>
    </form>
  );
};
