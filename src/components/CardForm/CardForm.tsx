import { useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
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
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <input {...register("phone", { required: true })} />
      {errors.phone && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
