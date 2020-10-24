import React from "react";
import { Tab, Table, Header, Icon } from "semantic-ui-react";

const schedules = [
  {
    day: "Friday, 11 December 2020",
    workshops: [
      {
        title: "Workshop I : Workshop of ACS",
        chairman: "dr. Hendy Wirawan, M.Biomed, Sp.JP, FIHA",
        time: "14.00-16.30",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "14.00-14.15",
          },
          {
            title:
              "Diagnosis and initial management of ACS in Primary Health Care",
            lecturer:
              "dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA, FICA, FasCC",
            time: "14.15-14.45",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "14.45-14.50",
          },
          {
            title: "Role of fibrinolytics in STEMI: How to do?",
            lecturer: "dr. IGN. Putra Gunadhi, Sp.JP(K), FIHA, FAsCC ",
            time: "14.50-15.20",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.20-15.25",
          },
          {
            title: "Risk stratifications and invasive management of NSTE-ACS",
            lecturer: "dr. I Made Junior Rina Artha, Sp.JP(K), FIHA, FAsCC",
            time: "15.25-15.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.55-16.00",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "16.00-16.15",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "16.15-16.30",
          },
        ],
      },
      {
        title:
          "Workshop II : Workshop of Echocardiography in congenital heart disease (Pokja Pediatric Cardiology PERKI)",
        chairman: "dr. Ni Made Ayu Wulan Sari, M.Biomed, Sp.JP",
        time: "14.00-16.30",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "14.00-14.15",
          },
          {
            title: "Lecture 1",
            lecturer: "Pokja Pediatric Cardiology PERKI",
            time: "14.15-14.45",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "14.45-14.50",
          },
          {
            title: "Lecture 2",
            lecturer: "Pokja Pediatric Cardiology PERKI",
            time: "14.50-15.20",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.20-15.25",
          },
          {
            title: "Lecture 3",
            lecturer: "Pokja Pediatric Cardiology PERKI",
            time: "15.25-15.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.55-16.00",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "16.00-16.15",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "16.15-16.30",
          },
        ],
      },
    ],
  },
  {
    day: "Friday, 18 December 2020",
    workshops: [
      {
        title: "Workshop III : Workshop of Arrhythmia in Clinical Practice",
        chairman: "dr. I Dewa Gde Sumajaya, Sp.JP, FIHA",
        time: "14.00-16.30",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "14.00-14.15",
          },
          {
            title: "Symptomatology of arrhythmia induced pre/syncope",
            lecturer: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
            time: "14.15-14.45",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "14.45-14.50",
          },
          {
            title: "Diagnostic approaches for bradhyarrhythmia",
            lecturer: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "14.50-15.20",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.20-15.25",
          },
          {
            title: "Management of bradhyarrhytmia",
            lecturer: "dr. Gusti Ayu Suryawati, M.Biomed, Sp.JP, FIHA",
            time: "15.25-15.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.55-16.00",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "16.00-16.15",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "16.15-16.30",
          },
        ],
      },
      {
        title: "Workshop  IV : Workshop of Acute Heart Failure",
        chairman: "dr. IGN Putra Gunadhi, SpJP(K), FIHA, FAsCC",
        time: "14.00-16.30",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "14.00-14.15",
          },
          {
            title:
              "Diuretics vs Vasodilators: Choosing The Best Treatment Strategy For Acute Heart Failure In Emergency Department",
            lecturer: "dr. I Gusti Agung Bagus Krisna Jayantika, SpJP, FIHA",
            time: "14.15-14.45",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "14.45-14.50",
          },
          {
            title:
              "The Best Toolkit To Evaluate The Effectiveness Of Decongestive Therapy",
            lecturer: "dr. Ni Gusti Putu Sri Andayani, SpJP, FIHA, FAsCC",
            time: "14.50-15.20",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.20-15.25",
          },
          {
            title:
              "Acute Right Ventricular Dysfunction or Failure: The Importance Of Recognizing and Treating The Forgotten One",
            lecturer: "dr. I Putu Gede Budiana, SpJP(K), FIHA",
            time: "15.25-15.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.55-16.00",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "16.00-16.15",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "16.15-16.30",
          },
        ],
      },
    ],
  },
];

export default function Workshop() {
  const panes = schedules.map((schedule) => ({
    menuItem: schedule.day,
    render: () => (
      <div style={{ marginBottom: '50px' }}>
        {schedule.workshops.map((workshop) => (
          <div>
            <Header as="h2" textAlign="center" style={{ marginTop: "20px" }}>
              {workshop.title}
              <Header.Subheader>Chairman: {workshop.chairman}</Header.Subheader>
            </Header>
            <p style={{ textAlign: "center" }}>Time: {workshop.time}</p>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ background: '#800000', color: '#ffffff' }} >Time</Table.HeaderCell>
                  <Table.HeaderCell style={{ background: '#800000', color: '#ffffff' }} >Schedule</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {workshop.lectures.map((lecture) => (
                  <Table.Row>
                    <Table.Cell>{lecture.time}</Table.Cell>
                    <Table.Cell>
                      {lecture.title}
                      <br />
                      {lecture.lecturer && (
                        <span>Lecturer: {lecture.lecturer}</span>
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Workshop</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Workshop</li>
          </ol>
        </nav>
      </div>
      <div className="page">
        <Tab panes={panes} />
      </div>
    </>
  );
}
