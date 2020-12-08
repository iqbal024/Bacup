import React from "react";
import { Tab, Table, Header, Icon } from "semantic-ui-react";

const schedules = [
  {
    day: "Saturday, 12 December 2020",
    symposiums: [
      {
        title: "Symposium I : Arrhythmia",
        moderator: "dr. I Kadek Susila Surya Darma, M.Biomed, Sp.JP, FIHA",
        time: "09.00-10.30",
        topics: [
          {
            title: "Online Registration – Symposium I & II",
            speaker: "",
            time: "09.00 – 09.15",
          },
          {
            title:
              "Paroxysmal Atrial Fibrillation: The Risk and The Management Challenges",
            speaker: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "09.15 – 09.35",
          },
          {
            title:
              "Tips and Trick of Management of Supraventricular Arrhythmia",
            speaker: "dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA, FICA, FAsCC",
            time: "09.35 – 09.55",
          },
          {
            title: "Case Studies",
            speaker: "dr. I Putu Agus Wismantara, SpJP, FIHA",
            time: "09.55 – 10.15",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.15 – 10.30",
          },
        ],
      },
      {
        title: "Symposium II :  Acute Coronary Syndrome",
        moderator: "dr. I Wayan Sutarmawan, Sp.JP (K), FIHA",
        time: "10.30-12.00",
        topics: [
          {
            title:
              "Diagnosis and Initial Management of ACS in Limited Resources Hospital",
            speaker: "dr. IGN. Putra Gunadhi, Sp.JP(K), FIHA, FAsCC",
            time: "10.40 – 11.00",
          },
          {
            title:
              "Optimal DAPT For Asian Patients : Measuring Bleeding vs Thrombosis Risk",
            speaker: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
            time: "11.00 – 11.20",
          },
          {
            title: "Case Studies",
            speaker: "dr. Hendy Wirawan,M.Biomed, Sp.JP, FIHA",
            time: "11.20 – 11.40",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.40 – 11.55",
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
        time: "09.00-10.30",
        topics: [
          {
            title: "Online Registration – Symposium III & IV",
            speaker: "",
            time: "09.00 – 09.15",
          },
          {
            title:
              "Diagnosis and Management of Acyanotic Congenital Heart Disease with Pulmonary Hypertension",
            speaker: "Dr. dr. Ni Putu Veny Kartika Yantie, M.Sc, Sp.A(K)",
            time: "09.15 – 09.35",
          },
          {
            title:
              "Updates on Pulmonary Hypertension Management: What Current Evidence Recommend",
            speaker: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
            time: "09.35 – 09.55",
          },
          {
            title: "Case Studies",
            speaker: "dr. Luh Oliva Saraswati Suastika, Sp.JP, FIHA, FASE",
            time: "09.55 – 10.15",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.15 – 10.30",
          },
        ],
      },
      {
        title: "Symposium IV : Advances in Management of Coronary Artery Disease",
        moderator: "dr. I Made Junior Rina Artha, Sp.JP(K), FIHA, FAsCC",
        time: "10.30-12.00",
        topics: [
          {
            title: "Angina; Contemporary Diagnosis and Management",
            speaker: "Prof. Dr. dr. I Wayan Wita, Sp.JP(K), FIHA, FAsCC",
            time: "10.40 – 11.00",
          },
          {
            title:
              "The Role of High Intensity Statin in CAD",
            speaker: "dr. Wayan Aryadana, Sp.JP(K), FIHA, FICA, FAsCC",
            time: "11.00 – 11.20",
          },
          {
            title: "Case studies",
            speaker: "dr. I Putu Gede Eka Ariawan S, M.Biomed, Sp.JP, FIHA",
            time: "11.20 – 11.40",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.40 – 11.55",
          },
        ],
      },
    ],
  },
  {
    day: "Saturday, 19 December 2020",
    symposiums: [
      {
        title: "Symposium V : Cardiovascular Prevention in High Risk Patients",
        moderator: "dr. I.B Rangga Wibhuti, M.Biomed, Sp.JP(K), FIHA, FASE",
        time: "09.00-10.30",
        topics: [
          {
            title: "Online Registration – Symposium V & VI",
            speaker: "",
            time: "09.00 – 09.15",
          },
          {
            title:
              "Targeting Blood Pressure Control in People at Risk of ASCVD: How Far Should We Go?",
            speaker: "Dr. dr. I Ketut Rina, Sp.PD, Sp.JP(K), FIHA, FAsCC",
            time: "09.15 – 09.35",
          },
          {
            title: "Antihypertensive Efficacy and Tolerability of CCB in Clinical Practice",
            speaker: "dr. A.A.A Dwi Adelia Yasmin, M.Biomed, Sp.JP, FIHA",
            time: "09.35 – 09.55",
          },
          {
            title:
              "Lowering non-HDL Cholesterol in High Risk ASCVD Patients : is There Any Benefit?",
            speaker: "dr. I Putu Parwata Jaya, Sp.JP, FIHA",
            time: "09.55 – 10.15",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.15 – 10.30",
          },
        ],
      },
      {
        title: "Symposium VI : Managing Dyslipidemia Patient: What Can We Do Better",
        moderator: "dr. I Kadek Susila Surya Darma, M.Biomed, Sp.JP, FIHA",
        time: "10.40-12.00",
        topics: [
          {
            title: "The Safety Statin Treatment: When it Gets Serious",
            speaker: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "10.40 – 11.00",
          },
          {
            title: "Targeting Plaque Stabilization and Regression: The Role of Dual Inhibition",
            speaker: "dr. Wayan Aryadana, Sp.JP(K), FIHA, FICA, FAsCC",
            time: "11.00 – 11.20",
          },
          {
            title: "Case Studies",
            speaker: "dr. Ketut Erna Bagiari, M.Biomed, Sp.JP, FIHA",
            time: "11.20 – 11.40",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.40 – 11.55",
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
        time: "09.00-10.30",
        topics: [
          {
            title: "Online Registration – Symposium VII & VIII",
            speaker: "",
            time: "09.00 – 09.15",
          },
          {
            title:
              "Pioneering Medication in Acute Heart Failure Hospitalization",
            speaker: "dr. I Nyoman Wiryawan, Sp.JP,FIHA,FAPSC",
            time: "09.15 – 09.35",
          },
          {
            title:
              "Defining Essential Treatment Choice Since Early Stage of Heart Failure : Learning From Novel HF Treatment",
            speaker: "dr. Siti Elkana Nauli, SpJP(K), FIHA",
            time: "09.35 – 09.55",
          },
          {
            title: "Case Studies",
            speaker: "dr. Ni Made Ayu Wulan Sari, M.Biomed, Sp.JP,FIHA",
            time: "09.55 – 10.15",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "10.15 – 10.30",
          },
        ],
      },
      {
        title:
          "Symposium VIII : Prevention and Long-term Management of Venous Thromboembolism",
        moderator: "dr. Ni Wayan Lena Agustini, M.Biomed, Sp.JP, FIHA",
        time: "10.40-12.00",
        topics: [
          {
            title: "Venous Thromboembolism in Severe COVID-19",
            speaker: "dr. Ketut Susila, Sp.JP(K), FIHA",
            time: "10.40 – 11.00",
          },
          {
            title: "Role of DOAC in Vein Thrombosis",
            speaker: "dr. Agung Pradnyana Suwirya, M. Biomed, Sp.JP, FIHA",
            time: "11.00 – 11.20",
          },
          {
            title: "Case Studies",
            speaker:
              "dr. Rani Paramitha Iswari Maliawan, M. Biomed, Sp.JP, FIHA",
            time: "11.20 – 11.40",
          },
          {
            title: "Discussion",
            speaker: "",
            time: "11.40 – 11.55",
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
