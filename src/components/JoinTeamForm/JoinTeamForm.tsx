import { useContext } from "react";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { StatusCodes } from "http-status-codes";
import { Select } from "antd";

import { error, success } from "../../components/Messages/Messages";
import { CONSTANTS } from "../../utils/constants";
import { AppContext } from "../../context/AppContext";
import { teamPositions } from "../../utils/TeamPositions";

import "./JoinTeamForm.scss";

type Inputs = {
  name: string;
  phone: string;
  eventName: string;
};

const getOptions = () => {
  return teamPositions.map((position) => {
    return {
      value: position,
      label: <span>{position}</span>,
    };
  });
};

export const JoinTeamForm = () => {
  const { closeModal } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await axios.post(
      `${CONSTANTS.TG_REQUEST_URL}&text=Position: ${data.eventName}%0AName: ${data.name}%0APhone: ${data.phone}`,
    );

    if (result.status === StatusCodes.OK) {
      success(CONSTANTS.MESSAGES.CALENDAR_FORM_SUCCESS);
    } else {
      error(CONSTANTS.MESSAGES.CALENDAR_FORM_FAIL);
    }

    closeModal(CONSTANTS.MODALS.SIGN_UP__MODAL);
  };

  return (
    <form className="join-team__form" onSubmit={handleSubmit(onSubmit)}>
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
            defaultValue={teamPositions[0]}
            onChange={(currentPosition) => onChange(currentPosition)}
            options={getOptions()}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};
