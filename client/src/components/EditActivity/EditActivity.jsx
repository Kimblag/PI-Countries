import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getActivityDetails, updateActivity } from "../../redux/actions";

import Input from "../Input/Input.jsx";
import Navbar from "../Navbar/Navbar";
import SelectComponent from "../SelectComponent/SelectComponent";
import {
  Formulario,
  ContentCenterButton,
  Button,
  SuccessMessage,
  ErrorMessage,
} from "../../Elements/Form.jsx";
import { difficulty, season } from "../../helpers/Mock_activities";

import "./EditActivity.css";
import icon from "../../assets/warning.svg";

const EditActivity = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const activity = useSelector((state) => state.activityDetail);

  useEffect(() => {
    dispatch(getActivityDetails(id));
  }, [dispatch, id]);

  //*States
  const [nameInput, setNameInput] = useState({ field: "", validated: null });
  const [durationInput, setDurationInput] = useState({
    field: "",
    validated: null,
  });
  const [difficultySelect, setDifficultySelect] = useState({
    field: activity.difficulty || "",
    validated: null,
  });
  const [seasonSelect, setSeasonSelect] = useState({
    field: activity.season || "",
    validated: null,
  });
  const [validateForm, setValidateForm] = useState(null);

  useEffect(() => {
    setNameInput({ field: activity.name || "", validated: "true" });
    setDifficultySelect({
      field: activity.difficulty || "all",
      validated: "true",
    });
    setDurationInput({ field: activity.duration || "", validated: "true" });
    setSeasonSelect({ field: activity.season || "all", validated: "true" });
  }, [
    setNameInput,
    activity.name,
    setDifficultySelect,
    activity.difficulty,
    setDurationInput,
    activity.duration,
    setSeasonSelect,
    activity.season,
  ]);

  const expression = {
    name: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g,
    duration: /^[A-Za-z0-9\s]+$/g,
  };

  //*Handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nameInput.validated === "true" ||
      durationInput.validated === "true" ||
      difficultySelect.validated === "true" ||
      seasonSelect.validated === "true"
    ) {
      setValidateForm("true");
      const payload = {
        name: nameInput.field,
        duration: durationInput.field,
        difficulty: difficultySelect.field,
        season: seasonSelect.field,
      };
      dispatch(updateActivity({ id, payload }));
      setNameInput({ field: "", validated: null });
      setDurationInput({ field: "", validated: null });
      setDifficultySelect({ field: "all", validated: null });
      setSeasonSelect({ field: "all", validated: null });
      document.getElementById("difficulty").value = "all";
      document.getElementById("season").value = "all";
      alert("Activity updated");
      history.push("/home");
    } else {
      setValidateForm("false");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="Form__Container">
        <div className="Form__Card">
          <h1 style={{ textAlign: "center" }}>Edit Touristic Activity</h1>

          <Formulario onSubmit={(e) => handleSubmit(e)}>
            <Input
              state={nameInput}
              setState={setNameInput}
              type="text"
              label="Name"
              placeholder="Activity Name"
              name="name"
              errorText="Name is required. Only letters and spaces."
              expresionRegular={expression.name}
            />

            <Input
              state={durationInput}
              setState={setDurationInput}
              type="text"
              label="Duration"
              placeholder="15min or 1h"
              name="duration"
              errorText="Duration is required."
              expresionRegular={expression.duration}
            />

            <SelectComponent
              state={difficultySelect}
              setState={setDifficultySelect}
              titleLabel="Difficulty"
              mockData={difficulty}
              titleOption="Select Difficulty"
              name="difficulty"
              id="difficulty"
              errorText="Difficulty is required."
              validation={difficultySelect.validated}
              defaultValue="all"
              //   value={difficultySelect.field}
              disabled="disabled"
            />

            <SelectComponent
              state={seasonSelect}
              setState={setSeasonSelect}
              titleLabel="Season"
              mockData={season}
              titleOption="Select Season"
              name="season"
              id="season"
              errorText="Season is required."
              validation={seasonSelect.validated}
              defaultValue="all"
              //   value={activity.season}
              disabled="disabled"
            />
          </Formulario>

          <ContentCenterButton>
            <div>
              {validateForm === "false" && (
                <ErrorMessage>
                  <img src={icon} alt="warning" />
                  <b>Error:</b> Please fill all the fields.
                </ErrorMessage>
              )}
            </div>

            <Button onClick={(e) => handleSubmit(e)} type="submit">
              Update Activity
            </Button>

            {validateForm === "true" ? (
              <SuccessMessage>Activity updated successfully</SuccessMessage>
            ) : null}
          </ContentCenterButton>

          <div className="Back__Button">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <button className="Back_Button">
                <svg
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                </svg>

                <span>Back</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditActivity;
