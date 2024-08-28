import { useContext } from "react";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { StatusCodes } from "http-status-codes";
import { Select } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";

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
      <h2 className="join-team__title">Join team</h2>
      <div className="input__block">
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className={`join-team__input name ${errors.name ? "error__input" : ""}`}
        />
        {errors.name && (
          <span className="error__text">This field is required</span>
        )}
      </div>
      <div className="input__block">
        <input
          placeholder="Phone"
          {...register("phone", { required: true })}
          className={`join-team__input phone ${errors.phone ? "error__input" : ""}`}
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
            defaultValue={teamPositions[0]}
            onChange={(currentPosition) => onChange(currentPosition)}
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
      <button
        type="submit"
        className={`join-team__submit btn ${errors.name && errors.phone ? "disabled__btn" : ""}`}
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
