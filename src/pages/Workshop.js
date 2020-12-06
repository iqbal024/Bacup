import React from "react";
import { Tab, Table, Header, Icon } from "semantic-ui-react";

const schedules = [
  {
    day: "Friday, 11 December 2020",
    workshops: [
      {
        title: "Workshop I : Workshop of ACS",
        chairman: "dr. Hendy Wirawan, M.Biomed, Sp.JP, FIHA",
        time: "09.00-12.10",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "09.10-09.25",
          },
          {
            title:
              "Diagnosis and initial management of ACS in Primary Health Care",
            lecturer:
              "dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA, FICA, FasCC",
            time: "09.25-09.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "09.55-10.05",
          },
          {
            title: "Role of fibrinolytics in STEMI: How to do?",
            lecturer: "dr. I Made Junior Rina Artha, Sp.JP(K), FIHA, FAsCC",
            time: "10.05-10.35",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "10.35–10.45",
          },
          {
            title: "Risk stratifications and invasive management of NSTE-ACS",
            lecturer: "dr. Dian Zamroni, Sp.JP(K), FIHA",
            time: "10.45–11.15",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "11.15–11.25",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "11.25–11.50",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "11.50–12.05",
          },
        ],
      },
      {
        title:
          "Workshop II : Basic Echo course in CHD: The First Virtual Pediatric Cardiology Echocardiography Course",
        chairman: "dr. Ni Made Ayu Wulan Sari, M.Biomed, Sp.JP",
        time: "13.00-17.30",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "13.10–13.25",
          },
          {
            title: "Lecture 1 : Role of Echo in Diagnosis of CHD",
            lecturer: "Dr. dr. Indriwanto S. Atmosudigdo, SpJP(K), MARS",
            time: "13.25–13.55",
          },
          {
            title: "Lecture 2 : Sequential segmental analysis (KULIAH + VIDEO)",
            lecturer: "Prof. dr. Ganesja M. Harimurti, SpJP(K)",
            time: "13.55 – 14.25",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "14.25 – 14.40",
          },
          {
            title: "Lecture 2 : Echocardiography assessment: ASD (KULIAH + VIDEO)",
            lecturer: "dr. Poppy S. Roebiono, SpJP(K)",
            time: "14.40 – 15.10",
          },
          {
            title: "Lecture 3 : Echocardiography assessment: PDA (KULIAH + VIDEO)",
            lecturer: "dr. Anna U. Rahajoe, SpJP(K)",
            time: "15.10 – 15.40",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.40 – 15.55",
          },
          {
            title: "Lecture 4 : Echocardiography assessment: VSD (KULIAH + VIDEO)",
            lecturer: "dr. Oktavia Lilyasari, M.Kes, SpJP(K)",
            time: "15.55 – 16.25",
          },
          {
            title: "Lecture 5 : Echocardiography assessment: TOF (KULIAH + VIDEO)",
            lecturer: "dr. Radityo Prakoso, SpJP(K)",
            time: "16.25 – 16.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "16.55 – 17.10",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "17.10 – 17.25",
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
        time: "09.00-12.10",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "09.10 – 09.25",
          },
          {
            title: "Symptomatology of arrhythmia induced pre/syncope",
            lecturer: "dr. Putu Kiki Wulandari, M. Biomed, Sp.JP, FIHA",
            time: "09.25 – 09.55",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "09.55 – 10.05",
          },
          {
            title: "Diagnostic approaches for bradhyarrhythmia",
            lecturer: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "10.05 – 10.35",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "10.35 – 10.45",
          },
          {
            title: "Management of bradhyarrhytmia",
            lecturer: "dr. Ida Bagus Komang Wisasmita, M.Biomed, Sp.JP, FIHA",
            time: "10.45 – 11.15",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "11.15 – 11.25",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "11.25 – 11.50",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "11.50 – 12.05",
          },
        ],
      },
      {
        title: "Workshop  IV : Workshop of Acute Heart Failure",
        chairman: "dr. IGN Sugiada, SpJP, FIHA",
        time: "13.30-16.40",
        lectures: [
          {
            title: "Pre-test",
            lecturer: "",
            time: "13.40 – 13.55",
          },
          {
            title:
              "Diuretics vs Vasodilators: Choosing The Best Treatment Strategy For Acute Heart Failure In Emergency Department",
            lecturer: "dr. I Gusti Agung Bagus Krisna Jayantika, SpJP, FIHA",
            time: "13.55 – 14.25",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "14.25-14.35",
          },
          {
            title:
              "The Best Toolkit To Evaluate The Effectiveness Of Decongestive Therapy",
            lecturer: "dr. Ni Gusti Putu Sri Andayani, SpJP, FIHA, FAsCC",
            time: "14.35 – 15.05",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.05 - 15.15",
          },
          {
            title:
              "Acute Right Ventricular Dysfunction or Failure: The Importance Of Recognizing and Treating The Forgotten One",
            lecturer: "dr. I Putu Gede Budiana, SpJP(K), FIHA",
            time: "15.15 – 15.45",
          },
          {
            title: "Discussion",
            lecturer: "",
            time: "15.45-15.55",
          },
          {
            title: "Case Discussion",
            lecturer: "",
            time: "15.55-16.20",
          },
          {
            title: "Post-test",
            lecturer: "",
            time: "16.20-16.35",
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
