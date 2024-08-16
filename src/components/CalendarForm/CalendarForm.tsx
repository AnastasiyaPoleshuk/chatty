import { useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useForm, SubmitHandler } from "react-hook-form";
import StatusCodes from "http-status-codes";
// import MaskedInput from "react-text-mask";
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
      `${CONSTANTS.TG_REQUEST_URL}&text=Event: ${eventData.name}%0ADate: ${dayjs(eventData.date).format("DD-MM-YYYY")}%0A Name: ${data.name}%0APhone: ${data.phone}`,
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
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <input {...register("phone", { required: true })} />
      {/* <MaskedInput
        className={`form__input ${errors.phone ? "input-error" : null}`}
        name="phone"
        placeholderChar="x"
        mask={[
          "+",
          "3",
          "7",
          "5",
          " ",
          "(",
          /[1-9]/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
        ]}
        type="tel"
        showMask={true}
      /> */}

      {errors.phone && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
