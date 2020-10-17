import React, { useEffect, useState } from "react";
import { Form, Button, Radio, Dropdown, Header } from "semantic-ui-react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "../layout/Loader";

const personalSchema = {
  FirstName: "",
  LastName: "",
  FullName: "",
  Gender: "",
  PlaceBirth: "",
  DateBirth: "",
  Country: "",
  Province: "",
  City: "",
  Email: "",
  emailConfirmation: "",
  PhoneNumber: "",
  Affiliation: "",
  OfficePhoneNumber: "",
};

const eventSchema = {
  Category: "",
  Package: "",
  Price: 0,
  event1: null,
  event2: null,
  event3: null,
};

const categoryOptions = [
  { key: "sp", text: "Specialist", value: "sp" },
  { key: "gp", text: "General Practitioner", value: "gp" },
  { key: "msn", text: "Medical Student & Nurse", value: "msn" },
];

const packageOptions = [
  {
    key: "silver",
    text: "Silver (1 workshop or symposium)",
    value: "silver",
  },
  {
    key: "gold",
    text: "Gold (1 workshop and symposium)",
    value: "gold",
  },
  {
    key: "platinum",
    text: "Platinum (2 workshop and symposium)",
    value: "platinum",
  },
];

const eventOptions = [
  {
    key: "ws1",
    text: "Workshop 1 : Workshop of ACS",
    value: "ws1",
  },
  {
    key: "ws2",
    text:
      "Workshop II : Workshop of Echocardiography in congenital heart disease",
    value: "ws2",
  },
  {
    key: "ws3",
    text: "Workshop III : Workshop of Arrhythmia in Clinical Practice",
    value: "ws3",
  },
  {
    key: "ws4",
    text: "Workshop IV : Workshop of Acute Heart Failure",
    value: "ws4",
  },
  {
    key: "sy",
    text: "Symposium",
    value: "sy",
  },
];

export default function RegistrationForm() {
  const history = useHistory();

  const [formValues, setFormValues] = useState(
    JSON.parse(localStorage.getItem("personal")) || personalSchema
  );
  const [errors, setErrors] = useState(personalSchema);
  const [step, setStep] = useState("personal");

  const [eventFormValues, setEventFormValues] = useState(eventSchema);
  const [eventErrors, setEventErrors] = useState(eventSchema);
  const [posting, setPosting] = useState(false);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleRadioChange(_, { value, name }) {
    handleChange({ target: { value, name } });
    setErrors({ ...errors, Gender: "" });
  }

  function handleChangeEvent(e) {
    setEventFormValues({ ...eventFormValues, [e.target.name]: e.target.value });
  }

  function handleDropdownChange(_, { value, name }) {
    resetEventError({ target: { value, name } });
    handleChangeEvent({ target: { value, name } });
  }

  function resetError(e) {
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function resetEventError(e) {
    setEventErrors({ ...eventErrors, [e.target.name]: "" });
  }

  function handleSubmit() {
    const err = validatePersonal(formValues);

    if (!err) {
      localStorage.setItem("personal", JSON.stringify(formValues));
      setStep("event");
    } else {
      setErrors({ ...errors, ...err });
    }
  }

  function handleSubmitEvent() {
    const err = validateEvent(eventFormValues);

    if (!err) {
      // success
      const {
        emailConfirmation,
        event1,
        event2,
        event3,
        Package,
        Category,
        ...rawPayload
      } = {
        ...JSON.parse(localStorage.getItem("personal")),
        ...eventFormValues,
      };

      const fixedPayload = {
        ...rawPayload,
        Category: categoryOptions.find((cat) => cat.key === Category).text,
        Package: packageOptions.find((pkg) => pkg.key === Package).text,
        Symposhium: event1 === "sy" ? event1 : null,
        Workshop1:
          event1 === "sy"
            ? eventOptions.find((event) => event.key === event2)
              ? eventOptions.find((event) => event.key === event2).value
              : null
            : eventOptions.find((event) => event.key === event1)
            ? eventOptions.find((event) => event.key === event1).value
            : null,
        Workshop2:
          event1 === "sy"
            ? eventOptions.find((event) => event.key === event3)
              ? eventOptions.find((event) => event.key === event3).value
              : null
            : eventOptions.find((event) => event.key === event2)
            ? eventOptions.find((event) => event.key === event2).value
            : null,
        Status: 1,
      };

      setPosting(true);

      axios
        .post("http://backend.bacup.co/register", fixedPayload)
        .then(() => {
          localStorage.setItem("registration", JSON.stringify(fixedPayload));
          localStorage.removeItem("personal");
          history.push("/registration/success");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setPosting(false);
        });
    } else {
      setEventErrors({ ...eventErrors, ...err });
    }
  }

  useEffect(() => {
    function getPrice() {
      const categoryPackagePriceMapping = {
        sp: {
          silver: 300_000,
          gold: 450_000,
          platinum: 550_000,
        },
        gp: {
          silver: 250_000,
          gold: 300_000,
          platinum: 400_000,
        },
        msn: {
          silver: 150_000,
          gold: 200_000,
          platinum: 250_000,
        },
      };

      return categoryPackagePriceMapping[eventFormValues.Category] &&
        categoryPackagePriceMapping[eventFormValues.Category][
          eventFormValues.Package
        ]
        ? categoryPackagePriceMapping[eventFormValues.Category][
            eventFormValues.Package
          ]
        : 0;
    }

    setEventFormValues((latestState) => ({
      ...latestState,
      Price: getPrice(),
    }));
  }, [eventFormValues.Category, eventFormValues.Package]);

  useEffect(() => {
    if (eventFormValues.Package === "silver") {
      setEventFormValues((latestState) => ({
        ...latestState,
        event2: null,
        event3: null,
      }));
    } else {
      setEventFormValues((latestState) => ({
        ...latestState,
        event1: "sy",
      }));
    }

    if (eventFormValues.Package === "gold") {
      setEventFormValues((latestState) => ({
        ...latestState,
        event3: null,
      }));
    }
  }, [eventFormValues.Package]);

  return (
    <div className="page">
      {posting && <Loader floating></Loader>}
      <Header as="h1">Registration</Header>
      {step === "personal" && (
        <Form onSubmit={handleSubmit}>
          <Header as="h3">Personal data</Header>

          <Form.Field>
            <label className={errors.FirstName ? "label--error" : ""}>
              First Name <span className="required">*</span>
            </label>
            {errors.FirstName && <p className="error">{errors.FirstName}</p>}
            <input
              className={errors.FirstName ? "input--error" : ""}
              placeholder="Enter your first name"
              value={formValues.FirstName}
              name="FirstName"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.LastName ? "label--error" : ""}>
              Last Name <span className="required">*</span>
            </label>
            {errors.LastName && <p className="error">{errors.LastName}</p>}
            <input
              className={errors.LastName ? "input--error" : ""}
              placeholder="Enter your last name"
              value={formValues.LastName}
              name="LastName"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.FullName ? "label--error" : ""}>
              Full Name (for certificate) <span className="required">*</span>
            </label>
            {errors.FullName && <p className="error">{errors.FullName}</p>}
            <input
              className={errors.FullName ? "input--error" : ""}
              placeholder="Enter your full name for certificate"
              value={formValues.FullName}
              name="FullName"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.Gender ? "label--error" : ""}>
              Gender <span className="required">*</span>
            </label>
            {errors.Gender && <p className="error">{errors.Gender}</p>}
          </Form.Field>
          <Form.Field>
            <Radio
              label="Male"
              name="Gender"
              value="Laki Laki"
              onChange={handleRadioChange}
              checked={formValues.Gender === "Laki Laki"}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Female"
              name="Gender"
              value="Perempuan"
              onChange={handleRadioChange}
              checked={formValues.Gender === "Perempuan"}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.PlaceBirth ? "label--error" : ""}>
              Place of birth <span className="required">*</span>
            </label>
            {errors.PlaceBirth && <p className="error">{errors.PlaceBirth}</p>}
            <input
              className={errors.PlaceBirth ? "input--error" : ""}
              placeholder="Enter your place of birth"
              value={formValues.PlaceBirth}
              name="PlaceBirth"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.DateBirth ? "label--error" : ""}>
              Date of birth <span className="required">*</span>
            </label>
            {errors.DateBirth && <p className="error">{errors.DateBirth}</p>}
            <input
              className={errors.DateBirth ? "input--error" : ""}
              placeholder="Enter your date of birth"
              value={formValues.DateBirth}
              name="DateBirth"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.Country ? "label--error" : ""}>
              Country <span className="required">*</span>
            </label>
            {errors.Country && <p className="error">{errors.Country}</p>}
            <input
              className={errors.Country ? "input--error" : ""}
              placeholder="Enter your country"
              value={formValues.Country}
              name="Country"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.Province ? "label--error" : ""}>
              Province <span className="required">*</span>
            </label>
            {errors.Province && <p className="error">{errors.Province}</p>}
            <input
              className={errors.Province ? "input--error" : ""}
              placeholder="Enter your province"
              value={formValues.Province}
              name="Province"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.City ? "label--error" : ""}>
              City <span className="required">*</span>
            </label>
            {errors.City && <p className="error">{errors.City}</p>}
            <input
              className={errors.City ? "input--error" : ""}
              placeholder="Enter your city"
              value={formValues.City}
              name="City"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.Email ? "label--error" : ""}>
              Email Address <span className="required">*</span>
            </label>
            {errors.Email && <p className="error">{errors.Email}</p>}
            <input
              className={errors.Email ? "input--error" : ""}
              placeholder="Enter your email"
              value={formValues.Email}
              name="Email"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.emailConfirmation ? "label--error" : ""}>
              Confirmation Email Address <span className="required">*</span>
            </label>
            {errors.emailConfirmation && (
              <p className="error">{errors.emailConfirmation}</p>
            )}
            <input
              className={errors.emailConfirmation ? "input--error" : ""}
              placeholder="Enter your confirmation email address"
              value={formValues.emailConfirmation}
              name="emailConfirmation"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.PhoneNumber ? "label--error" : ""}>
              Mobile Phone Number <span className="required">*</span>
            </label>
            {errors.PhoneNumber && (
              <p className="error">{errors.PhoneNumber}</p>
            )}
            <input
              className={errors.PhoneNumber ? "input--error" : ""}
              placeholder="Enter your mobile phone number"
              value={formValues.PhoneNumber}
              name="PhoneNumber"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.Affiliation ? "label--error" : ""}>
              Affiliation
            </label>
            <input
              className={errors.Affiliation ? "input--error" : ""}
              placeholder="Enter your affiliation"
              value={formValues.Affiliation}
              name="Affiliation"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.OfficePhoneNumber ? "label--error" : ""}>
              Office Phone Number (including Area Code)
            </label>
            <input
              className={errors.OfficePhoneNumber ? "input--error" : ""}
              placeholder="Enter your office phone number"
              value={formValues.OfficePhoneNumber}
              name="OfficePhoneNumber"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Button color="blue" type="submit">
            Continue
          </Button>
        </Form>
      )}
      {step === "event" && (
        <Form onSubmit={handleSubmitEvent}>
          <Header as="h3">Event data</Header>

          <Form.Field>
            <label className={eventErrors.Category ? "label--error" : ""}>
              Category <span className="required">*</span>
            </label>
            {eventErrors.Category && (
              <p className="error">{eventErrors.Category}</p>
            )}
            <Dropdown
              placeholder="Select Category"
              selection
              name="Category"
              options={categoryOptions}
              onChange={handleDropdownChange}
            />
          </Form.Field>
          <Form.Field>
            <label className={eventErrors.Package ? "label--error" : ""}>
              Package <span className="required">*</span>
            </label>
            {eventErrors.Package && (
              <p className="error">{eventErrors.Package}</p>
            )}
            <Dropdown
              placeholder="Select Package"
              selection
              name="Package"
              options={packageOptions}
              onChange={handleDropdownChange}
            />
          </Form.Field>
          {eventFormValues.Price ? (
            <Form.Field>
              <label
                className={
                  eventErrors.event1 || eventErrors.even2 || eventErrors.event3
                    ? "label--error"
                    : ""
                }
              >
                Event <span className="required">*</span>
              </label>
              {eventErrors.event1 && (
                <p className="error">{eventErrors.event1}</p>
              )}
              {eventFormValues.Package === "silver" ? (
                <Dropdown
                  placeholder="Select Event"
                  selection
                  name="event1"
                  value={eventFormValues.event1}
                  onChange={handleDropdownChange}
                  options={eventOptions}
                />
              ) : (
                <>
                  {eventErrors.event1 && (
                    <p className="error">{eventErrors.event1}</p>
                  )}
                  <Dropdown
                    selection
                    name="event1"
                    value={eventFormValues.event1}
                    options={eventOptions.slice(4)}
                    disabled
                  />
                </>
              )}
              {eventFormValues.Package !== "silver" && (
                <>
                  {eventErrors.event2 && (
                    <p className="error">{eventErrors.event2}</p>
                  )}
                  <Dropdown
                    placeholder="Select Workshop"
                    selection
                    name="event2"
                    value={eventFormValues.event2}
                    onChange={handleDropdownChange}
                    options={eventOptions.slice(0, 4)}
                  />
                </>
              )}
              {eventFormValues.Package === "platinum" && (
                <>
                  {eventErrors.event3 && (
                    <p className="error">{eventErrors.event3}</p>
                  )}
                  <Dropdown
                    placeholder="Select Another Workshop"
                    selection
                    name="event3"
                    value={eventFormValues.event3}
                    onChange={handleDropdownChange}
                    options={[
                      {
                        key: "ws1",
                        text: "Workshop 1 : Workshop of ACS",
                        value: "ws1",
                      },
                      {
                        key: "ws2",
                        text:
                          "Workshop II : Workshop of Echocardiography in congenital heart disease",
                        value: "ws2",
                      },
                      {
                        key: "ws3",
                        text:
                          "Workshop III : Workshop of Arrhythmia in Clinical Practice",
                        value: "ws3",
                      },
                      {
                        key: "ws4",
                        text: "Workshop IV : Workshop of Acute Heart Failure",
                        value: "ws4",
                      },
                    ]}
                  />
                </>
              )}
            </Form.Field>
          ) : null}
          <Form.Field>
            <label>Package Price</label>
            <input
              value={`IDR ${eventFormValues.Price.toLocaleString()}`}
              name="Price"
              disabled
            />
          </Form.Field>
          <Button color="blue" disabled={posting} type="submit">
            Register
          </Button>
        </Form>
      )}
    </div>
  );
}

function validatePersonal(payload) {
  let schema = yup.object().shape({
    FirstName: yup.string().required("First name must be filled"),
    LastName: yup.string().required("Last name must be filled"),
    FullName: yup.string().required("Full name must be filled"),
    Gender: yup.string().required("One of the gender options must be selected"),
    PlaceBirth: yup.string().required("Place of birth must be filled"),
    DateBirth: yup.string().required("Date of birth must be filled"),
    Country: yup.string().required("Country must be filled"),
    Province: yup.string().required("Province must be filled"),
    City: yup.string().required("City must be filled"),
    Email: yup
      .string()
      .email("Email is not valid")
      .required("Email must be filled"),
    emailConfirmation: yup
      .string()
      .required("Email confirmation must be filled")
      .oneOf([yup.ref("Email")], "Email confirmation must match"),
    PhoneNumber: yup.string().required("Phone must be filled"),
    Affiliation: yup.string(),
    OfficePhoneNumber: yup.string(),
  });

  try {
    schema.validateSync(payload, { abortEarly: false });

    return null;
  } catch (err) {
    let errors = {};

    err.inner.map((el) => {
      errors[el.path] = el.message;

      return null;
    });

    return errors;
  }
}

function validateEvent(payload) {
  let schema = yup.object().shape({
    Category: yup.string().required("Category must be filled"),
    Package: yup.string().required("Package must be filled"),
    event1: yup.string().required("The first event must be filled"),
    event2: yup
      .string()
      .when("Package", {
        is: (val) => val === "gold" || val === "platinum",
        then: yup.string().required("The second event must be filled"),
      })
      .nullable(),
    event3: yup
      .string()
      .when("Package", {
        is: (val) => val === "platinum",
        then: yup.string().required("The third event must be filled"),
      })
      .when("event2", {
        is: (val) => val !== null,
        then: yup
          .string()
          .notOneOf(
            [yup.ref("event2")],
            "The third event cannot be the same as second event"
          ),
      })
      .nullable(),
  });

  try {
    schema.validateSync(payload, { abortEarly: false });

    return null;
  } catch (err) {
    let errors = {};

    err.inner.map((el) => {
      errors[el.path] = el.message;

      return null;
    });

    return errors;
  }
}
