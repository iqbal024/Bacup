import React, { useEffect, useState } from "react";
import { Form, Button, Radio, Dropdown } from "semantic-ui-react";
import * as yup from "yup";

const personalSchema = {
  firstName: "",
  lastName: "",
  fullName: "",
  gender: "",
  placeOfBirth: "",
  dateOfBirth: "",
  country: "",
  province: "",
  city: "",
  email: "",
  emailConfirmation: "",
  phone: "",
  affiliation: "",
  phoneOffice: "",
};

const eventSchema = {
  category: "",
  package: "",
  price: 0,
};

export default function RegistrationForm() {
  const [formValues, setFormValues] = useState(
    JSON.parse(localStorage.getItem("personal")) || personalSchema
  );
  const [errors, setErrors] = useState(personalSchema);
  const [step, setStep] = useState("personal");

  const [eventFormValues, setEventFormValues] = useState(eventSchema);
  const [eventErrors, setEventErrors] = useState(eventSchema);

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleRadioChange(_, { value, name }) {
    handleChange({ target: { value, name } });
    setErrors({ ...errors, gender: "" });
  }

  function handleChangeEvent(e) {
    setEventFormValues({ ...eventFormValues, [e.target.name]: e.target.value });
  }

  function handleDropdownChange(_, { value, name }) {
    handleChangeEvent({ target: { value, name } });
  }

  function resetError(e) {
    setErrors({ ...errors, [e.target.name]: "" });
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

      return categoryPackagePriceMapping[eventFormValues.category] &&
        categoryPackagePriceMapping[eventFormValues.category][
          eventFormValues.package
        ]
        ? categoryPackagePriceMapping[eventFormValues.category][
            eventFormValues.package
          ]
        : 0;
    }

    setEventFormValues((latestState) => ({
      ...latestState,
      price: getPrice(),
    }));
  }, [eventFormValues.category, eventFormValues.package]);

  return (
    <div className="page">
      {step === "personal" && (
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label className={errors.firstName ? "label--error" : ""}>
              First Name <span className="required">*</span>
            </label>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              className={errors.firstName ? "input--error" : ""}
              placeholder="Enter your first name"
              value={formValues.firstName}
              name="firstName"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.lastName ? "label--error" : ""}>
              Last Name <span className="required">*</span>
            </label>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input
              className={errors.lastName ? "input--error" : ""}
              placeholder="Enter your last name"
              value={formValues.lastName}
              name="lastName"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.fullName ? "label--error" : ""}>
              Full Name (for certificate) <span className="required">*</span>
            </label>
            {errors.fullName && <p className="error">{errors.fullName}</p>}
            <input
              className={errors.fullName ? "input--error" : ""}
              placeholder="Enter your full name for certificate"
              value={formValues.fullName}
              name="fullName"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.gender ? "label--error" : ""}>
              Gender <span className="required">*</span>
            </label>
            {errors.gender && <p className="error">{errors.gender}</p>}
          </Form.Field>
          <Form.Field>
            <Radio
              label="Male"
              name="gender"
              value="male"
              onChange={handleRadioChange}
              checked={formValues.gender === "male"}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Female"
              name="gender"
              value="female"
              onChange={handleRadioChange}
              checked={formValues.gender === "female"}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.placeOfBirth ? "label--error" : ""}>
              Place of birth <span className="required">*</span>
            </label>
            {errors.placeOfBirth && (
              <p className="error">{errors.placeOfBirth}</p>
            )}
            <input
              className={errors.placeOfBirth ? "input--error" : ""}
              placeholder="Enter your place of birth"
              value={formValues.placeOfBirth}
              name="placeOfBirth"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.dateOfBirth ? "label--error" : ""}>
              Date of birth <span className="required">*</span>
            </label>
            {errors.dateOfBirth && (
              <p className="error">{errors.dateOfBirth}</p>
            )}
            <input
              className={errors.dateOfBirth ? "input--error" : ""}
              placeholder="Enter your date of birth"
              value={formValues.dateOfBirth}
              name="dateOfBirth"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.country ? "label--error" : ""}>
              Country <span className="required">*</span>
            </label>
            {errors.country && <p className="error">{errors.country}</p>}
            <input
              className={errors.country ? "input--error" : ""}
              placeholder="Enter your country"
              value={formValues.country}
              name="country"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.province ? "label--error" : ""}>
              Province <span className="required">*</span>
            </label>
            {errors.province && <p className="error">{errors.province}</p>}
            <input
              className={errors.province ? "input--error" : ""}
              placeholder="Enter your province"
              value={formValues.province}
              name="province"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.city ? "label--error" : ""}>
              City <span className="required">*</span>
            </label>
            {errors.city && <p className="error">{errors.city}</p>}
            <input
              className={errors.city ? "input--error" : ""}
              placeholder="Enter your city"
              value={formValues.city}
              name="city"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.email ? "label--error" : ""}>
              Email Address <span className="required">*</span>
            </label>
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              className={errors.email ? "input--error" : ""}
              placeholder="Enter your email"
              value={formValues.email}
              name="email"
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
            <label className={errors.phone ? "label--error" : ""}>
              Mobile Phone Number <span className="required">*</span>
            </label>
            {errors.phone && <p className="error">{errors.phone}</p>}
            <input
              className={errors.phone ? "input--error" : ""}
              placeholder="Enter your mobile phone number"
              value={formValues.phone}
              name="phone"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.affiliation ? "label--error" : ""}>
              Affiliation
            </label>
            <input
              className={errors.affiliation ? "input--error" : ""}
              placeholder="Enter your affiliation"
              value={formValues.affiliation}
              name="affiliation"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.phoneOffice ? "label--error" : ""}>
              Office Phone Number (including Area Code)
            </label>
            <input
              className={errors.phoneOffice ? "input--error" : ""}
              placeholder="Enter your office phone number"
              value={formValues.phoneOffice}
              name="phoneOffice"
              onChange={handleChange}
              onFocus={resetError}
            />
          </Form.Field>
          <Button type="submit">Continue</Button>
        </Form>
      )}
      {step === "event" && (
        <Form>
          <Form.Field>
            <label className={errors.phoneOffice ? "label--error" : ""}>
              Category <span className="required">*</span>
            </label>
            <Dropdown
              placeholder="Select Category"
              selection
              name="category"
              options={[
                { key: "sp", text: "Specialist", value: "sp" },
                { key: "gp", text: "General Practitioner", value: "gp" },
                { key: "msn", text: "Medical student & nurse", value: "msn" },
              ]}
              onChange={handleDropdownChange}
            />
          </Form.Field>
          <Form.Field>
            <label className={errors.phoneOffice ? "label--error" : ""}>
              Package <span className="required">*</span>
            </label>
            <Dropdown
              placeholder="Select Package"
              selection
              name="package"
              options={[
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
              ]}
              onChange={handleDropdownChange}
            />
          </Form.Field>
          {eventFormValues.price ? (
            <Form.Field>
              <label className={errors.phoneOffice ? "label--error" : ""}>
                Event <span className="required">*</span>
              </label>
              {eventFormValues.package === "silver" ? (
                <Dropdown
                  placeholder="Select Event"
                  selection
                  name="event1"
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
                    {
                      key: "sy",
                      text: "Symposium",
                      value: "sy",
                    },
                  ]}
                />
              ) : (
                <Dropdown
                  selection
                  name="event1"
                  value="sy"
                  options={[
                    {
                      key: "sy",
                      text: "Symposium",
                      value: "sy",
                    },
                  ]}
                  disabled
                />
              )}
              {eventFormValues.package !== "silver" && (
                <Dropdown
                  placeholder="Select Workshop"
                  selection
                  name="event2"
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
              )}
              {eventFormValues.package === "platinum" && (
                <Dropdown
                  placeholder="Select Another Workshop"
                  selection
                  name="event3"
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
              )}
            </Form.Field>
          ) : null}
          <Form.Field>
            <label className={errors.firstName ? "label--error" : ""}>
              Package Price
            </label>
            {/* {errors.firstName && <p className="error">{errors.firstName}</p>} */}
            <input
              // className={errors.firstName ? "input--error" : ""}
              // placeholder="Enter your first name"
              value={eventFormValues.price}
              name="price"
              disabled
            />
          </Form.Field>
        </Form>
      )}
    </div>
  );
}

function validatePersonal(payload) {
  let schema = yup.object().shape({
    firstName: yup.string().required("First name must be filled"),
    lastName: yup.string().required("Last name must be filled"),
    fullName: yup.string().required("Full name must be filled"),
    gender: yup.string().required("One of the gender options must be selected"),
    placeOfBirth: yup.string().required("Place of birth must be filled"),
    dateOfBirth: yup.string().required("Date of birth must be filled"),
    country: yup.string().required("Country must be filled"),
    province: yup.string().required("Province must be filled"),
    city: yup.string().required("City must be filled"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email must be filled"),
    emailConfirmation: yup
      .string()
      .required("Email confirmation must be filled")
      .oneOf([yup.ref("email")], "Email confirmation must match"),
    phone: yup.string().required("Phone must be filled"),
    affiliation: yup.string(),
    phoneOffice: yup.string(),
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
