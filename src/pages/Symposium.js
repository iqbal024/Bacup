import React from "react";
import { Tab, Table, Header, Icon } from "semantic-ui-react";

const schedules = [
  {
    day: "Saturday, 12 December 2020",
    symposiums: [
      {
        title: "Symposium I : Arrhythmia",
        moderator: "dr. I Kadek Susila Surya Darma, M.Biomed, Sp.JP, FIHA",
        time: "09.00-10.15",
        topics: [
          {
            title:
              "Paroxysmal Atrial Fibrillation: The Risk and The Management Challenges",
            speaker: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "09.00-09.20",
          },
          {
            title:
              "Tips and Trick of Management of Supraventricular Arrhythmia",
            speaker: "dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA",
            time: "09.20 – 09.40",
          },
          {
            title: "Case Studies",
            speaker: "dr. I Putu Agus Wismantara, SpJP, FIHA",
            time: "09.40-10.00",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.00-10.15",
          },
        ],
      },
      {
        title: "Symposium II : Clinical Update on Antithrombotic Role in CV Disease",
        moderator: "dr. I Wayan Sutarmawan, Sp.JP, FIHA",
        time: "10.20-11.35",
        topics: [
          {
            title:
              "Case Management of ACS Associated COVID-19 : Role of Antithrombotic Use (Focus on Fibrinolitic)",
            speaker: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
            time: "10.20-10.40",
          },
          {
            title:
              "Optimal DAPT For Asian Patients : Measuring Bleeding vs Thrombosis Risk",
            speaker: "dr. IGN. Putra Gunadhi, Sp.JP(K), FIHA, FAsCC",
            time: "10.40-11.00",
          },
          {
            title: "Case Studies",
            speaker: "dr. Hendy Wirawan,M.Biomed, Sp.JP, FIHA",
            time: "11.00-11.20",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.20-11.35",
          },
        ],
      },
    ],
  },
  {
    day: "Sunday, 13 December 2020",
    symposiums: [
      {
        title:
          "Symposium III :  Advances in Management of Congenital Heart Disease and Pulmonary Hypertension",
        moderator: "dr. I.B Rangga Wibhuti, M.Biomed, Sp.JP(K), FIHA, FASE",
        time: "09.00-10.15",
        topics: [
          {
            title:
              "Diagnosis and Management of Acyanotic Congenital Heart Disease with Pulmonary Hypertension",
            speaker: "Dr. dr. Venny Kartika Yantie, Sp.A(K)",
            time: "09.00-09.20",
          },
          {
            title:
              "Updates on Pulmonary Hypertension Management: What Current Evidence Recommend",
            speaker: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
            time: "09.20 – 09.40",
          },
          {
            title: "Case Studies",
            speaker: "dr. Luh Oliva Saraswati Suastika, Sp.JP, FIHA",
            time: "09.40-10.00",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.00-10.15",
          },
        ],
      },
      {
        title: "Symposium IV : Advances in Management of Coronary Artery Disease",
        moderator: "dr. I Made Junior Rina Artha, Sp.JP(K), FIHA, FAsCC",
        time: "10.20-11.35",
        topics: [
          {
            title: "Angina; Contemporary Diagnosis and Management",
            speaker: "Prof. Dr. dr. I Wayan Wita, Sp.JP(K), FIHA, FAsC",
            time: "10.20-10.40",
          },
          {
            title:
              "Targeting Plaque Regression in Dyslipidemia Management",
            speaker: "dr. Wayan Aryadana, Sp.JP(K), FIHA, FICA, FAsCC",
            time: "10.40-11.00",
          },
          {
            title: "Case studies",
            speaker: "dr. I Putu Gede Eka Ariawan S, M.Biomed, Sp.JP, FIHA",
            time: "11.00-11.20",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.20-11.35",
          },
        ],
      },
    ],
  },
  {
    day: "Saturday, 19 December 2020",
    symposiums: [
      {
        title: "Symposium V : Hypertension",
        moderator: "dr. I Ketut Badjra Nadha, Sp.JP(K), FIHA, FAsCC",
        time: "09.00-10.15",
        topics: [
          {
            title:
              "Targeting Blood Pressure Control in People at Risk of ASCVD: How Far Should We Go?",
            speaker: "Dr. dr. I Ketut Rina, Sp.PD, Sp.JP(K), FIHA, FAsCC",
            time: "09.00-09.20",
          },
          {
            title: "Hypertensive Crisis and Cardiovascular prevention",
            speaker: "dr. A.A.A Dwi Adelia Yasmin, M.Biomed, Sp.JP, FIHA",
            time: "09.20 – 09.40",
          },
          {
            title:
              "Secondary Hypertension: Differential Diagnosis and Basic Principles of Treatment",
            speaker: "dr. I Putu Parwata Jaya, Sp.JP, FIHA",
            time: "09.40-10.00",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.00-10.15",
          },
        ],
      },
      {
        title: "Symposium VI : Managing Dyslipidemia Patient: What Can We Do Better",
        moderator: "dr. I Kadek Susila Surya Darma, M.Biomed, Sp.JP, FIHA",
        time: "10.20-11.35",
        topics: [
          {
            title: "Pharmacological Strategy in Maintaining The Daily Productivity of Dyslipidemia Patients",
            speaker: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "10.20-10.40",
          },
          {
            title: "Targeting Plaque Stabilization and Regression: The Role of Dual Inhibition",
            speaker: "dr. Wayan Aryadana, Sp.JP(K), FIHA, FICA, FAsCC",
            time: "10.40-11.00",
          },
          {
            title: "Case Studies",
            speaker: "dr. Ketut Erna Bagiari, M.Biomed, Sp.JP, FIHA",
            time: "11.00-11.20",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.20-11.35",
          },
        ],
      },
    ],
  },
  {
    day: "Sunday, 20 December 2020",
    symposiums: [
      {
        title: "Symposium VII : Heart Failure",
        moderator: "dr. I Gede Bagus Gita Pranata Putra, SpJP, FIHA",
        time: "09.00-10.15",
        topics: [
          {
            title:
              "Increasing Survival in Heart Failure Patients: Introducing ARN",
            speaker: "dr. I Nyoman Wiryawan, Sp.JP,FIHA",
            time: "09.00-09.20",
          },
          {
            title:
              "Tips & Tricks of Diuresis and symptomatic management of Heart Failure",
            speaker: "dr. Siti Elkana Nauli, SpJP(K), FIHA",
            time: "09.20 – 09.40",
          },
          {
            title: "Case Studies",
            speaker: "dr. Ni Made Ayu Wulan Sari, M.Biomed, Sp.JP",
            time: "09.40-10.00",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.00-10.15",
          },
        ],
      },
      {
        title:
          "Symposium VIII : Prevention and Long-term Management of Venous Thromboembolism",
        moderator: "dr. Ni Wayan Lena Agustini, M.Biomed, Sp.JP, FIHA",
        time: "10.20-11.35",
        topics: [
          {
            title: "Venous Thromboembolism in Severe COVID-19",
            speaker: "dr. Ketut Susila, Sp.JP(K), FIHA",
            time: "10.20-10.40",
          },
          {
            title: "Role of DOAC in Vein Thrombosis",
            speaker: "dr. Agung Pradnyana Suwirya, M. Biomed, Sp.JP, FIHA",
            time: "10.40-11.00",
          },
          {
            title: "Case Studies",
            speaker:
              "dr. Rani Paramitha Iswari Maliawan, M. Biomed, Sp.JP, FIHA",
            time: "11.00-11.20",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.20-11.35",
          },
        ],
      },
    ],
  },
];

export default function Symposium() {
  const panes = schedules.map((schedule) => ({
    menuItem: schedule.day,
    render: () => (
      <div style={{ marginBottom: '50px' }}>
        {schedule.symposiums.map((sympo) => (
          <div>
            <Header as="h2" textAlign="center" style={{ marginTop: "20px" }}>
              {sympo.title}
              <Header.Subheader>Moderator: {sympo.moderator}</Header.Subheader>
            </Header>
            <p style={{ textAlign: "center" }}>Time: {sympo.time}</p>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ background: '#800000', color: '#ffffff' }} >Time</Table.HeaderCell>
                  <Table.HeaderCell style={{ background: '#800000', color: '#ffffff' }} >Schedule</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {sympo.topics.map((topic) => (
                  <Table.Row>
                    <Table.Cell>{topic.time}</Table.Cell>
                    <Table.Cell>
                      {topic.title}
                      <br />
                      {topic.speaker && <span>Speaker: {topic.speaker}</span>}
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
          <h2 class="title-logo">Symposium</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Symposium</li>
          </ol>
        </nav>
      </div>
      <div className="page">
        <Tab panes={panes} />
      </div>
    </>
  );
}
