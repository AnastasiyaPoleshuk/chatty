import { useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { ArrowDownOutlined } from "@ant-design/icons";

import { useForm, SubmitHandler } from "react-hook-form";
import StatusCodes from "http-status-codes";
import { AppContext } from "../../context/AppContext";
import { CONSTANTS } from "../../utils/constants";
import { error, success } from "../Messages/Messages";
import "./CardForm.scss";

type Inputs = {
  name: string;
  phone: string;
};

export const CardForm = () => {
  const { closeModal, eventData } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await axios.post(
      `${CONSTANTS.TG_REQUEST_URL}&text=Event: ${eventData.name}%0ADate: ${dayjs(eventData.date).format(CONSTANTS.CALENDAR_FORMAT)}%0AName: ${data.name}%0APhone: ${data.phone}`,
    );

    if (result.status === StatusCodes.OK) {
      success(CONSTANTS.MESSAGES.CALENDAR_FORM_SUCCESS);
    } else {
      error(CONSTANTS.MESSAGES.CALENDAR_FORM_FAIL);
    }

    closeModal(CONSTANTS.MODALS.CARDS__MODAL);
  };
  return (
    <form className="card__form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="card__title">{eventData.name}</h2>
      <div className="input__block">
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className={`card__input name ${errors.name ? "error__input" : ""}`}
        />
        {errors.name && (
          <span className="error__text">This field is required</span>
        )}
      </div>
      <div className="input__block">
        <input
          placeholder="Phone"
          {...register("phone", { required: true })}
          className={`card__input phone ${errors.phone ? "error__input" : ""}`}
        />
        {errors.phone && (
          <span className="error__text">This field is required</span>
        )}
      </div>
      <button
        type="submit"
        className={`card__submit btn ${errors.name && errors.phone ? "disabled__btn" : ""}`}
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
      </button>{" "}
    </form>
  );
};
