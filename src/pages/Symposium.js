import React from "react";
import { Tab, Table } from "semantic-ui-react";

const schedules = [
  {
    day: "Saturday, 12 December 2020",
    symposiums: [
      {
        title:
          "Symposium 1 : Thromboembolic complications in COVID-19 infection",
        moderator: "dr. Ni Wayan Lena Agustini, M.Biomed, Sp.JP, FIHA",
        time: "09.00-10.15",
        topics: [
          {
            title: "Venous thromboembolism in severe COVID-19",
            speaker:
              "dr. Bagus Ari Pradnyana Dwi Sutanegara, Sp.JP(K), FIHA, FICA, FasCC",
            time: "09.00-09.20",
          },
          {
            title: "Role of DOAC in Vein thrombosis",
            speaker: "dr. Agung Pradnyana Suwirya, M,Biomed, Sp.JP, FIHA",
            time: "09.20 – 09.40",
          },
          {
            title: "Case Studies",
            speaker:
              "dr. Rani Paramitha Iswari Maliawan, M. Biomed, Sp.JP, FIHA",
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
        title: "Symposium 2 : Acute Coronary Syndrome",
        moderator: "dr. I Wayan Sutarmawan, Sp.JP, FIHA",
        time: "10.20-11.35",
        topics: [
          {
            title:
              "Diagnosis and Initial Management of ACS in Limited Resources Hospital",
            speaker: "dr. IGN. Putra Gunadhi, Sp.JP(K), FIHA, FAsCC",
            time: "10.20-10.40",
          },
          {
            title:
              "Antiplatelet and Anticoagualtion in ACS: Which is the best approach?",
            speaker: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
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
          "Symposium III : Congenital Heart Disease and Pulmonary Hypertension",
        moderator: "dr. Made Satria Yudha Dewangga, M. Biomed, Sp.JP, FIHA",
        time: "09.00-10.15",
        topics: [
          {
            title: "GUCH and pulmonary hypertension",
            speaker:
              "dr. Ida Bagus Rangga Wibhuti, M.Biomed, Sp.JP(K), FIHA, FASE",
            time: "09.00-09.20",
          },
          {
            title: "Role of sildenafil in treating pulmonary hypertension",
            speaker: "dr. Eka Gunawijaya, Sp.A (K)",
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
        title: "Symposium IV : Hypertension",
        moderator: "dr. I Ketut Badjra Nadha, Sp.JP(K), FIHA, FAsCC",
        time: "10.20-11.35",
        topics: [
          {
            title:
              "Targeting blood pressure control in people at risk of ASCVD: How far should we go?",
            speaker: "dr.I Ketut Rina, Sp.PD, Sp.JP(K), FIHA, FAsCC",
            time: "10.20-10.40",
          },
          {
            title: "Hypertensive Crisis and Cardiovascular prevention",
            speaker: "dr. I Kadek Susila Surya Darma, M.Biomed, Sp.JP, FIHA",
            time: "10.40-11.00",
          },
          {
            title:
              "Secondary hypertension: Differential diagnosis and basic principles of treatment",
            speaker: "dr. I Putu Parwata Jaya, Sp.JP, FIHA",
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
        title: "Symposium V : Coronary Artery Disease",
        moderator: "dr. I Made Junior Rina Artha, Sp.JP(K), FIHA, FAsCC",
        time: "09.00-10.15",
        topics: [
          {
            title: "Angina; Contemporary Diagnosis and Management",
            speaker: "Prof.Dr.dr.I Wayan Wita, Sp.JP(K), FIHA, FAsC",
            time: "09.00-09.20",
          },
          {
            title:
              "Current management in Coronary Artery Disease; Controlling the risk factors",
            speaker: "dr. Wayan Aryadana, Sp.JP(K), FIHA, FICA, FAsCC",
            time: "09.20 – 09.40",
          },
          {
            title: "Case Studies",
            speaker:
              "dr. I Putu Gede Eka Ariawan Suyasa, M.Biomed, Sp.JP, FIHA",
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
        title: "Symposium VI : Metabolic Disease (Dyslipidemia)",
        moderator: "dr. I B Komang Wisasmita Sp.JP,FIHA",
        time: "10.20-11.35",
        topics: [
          {
            title: "Management of dyslipidemia in very high risk patients",
            speaker: "dr. Ketut Erna Bagiari, M.Biomed, Sp.JP, FIHA",
            time: "10.20-10.40",
          },
          {
            title: "When and how to treat hypertriglyceridemia?",
            speaker: "dr. Ni Gusti Putu Sri Andayani Sp.JP, FIHA",
            time: "10.40-11.00",
          },
          {
            title: "Case Studies",
            speaker: "dr. I Putu Agus Wismantara, M.Biomed, Sp.JP, FIHA",
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
        title: "Symposium VIII : Arhythmia",
        moderator: "dr. I Nyoman Sukamiartadana, M.Biomed, Sp.JP, FIHA",
        time: "10.20-11.35",
        topics: [
          {
            title:
              "Paroxysmal Atrial Fibrillation: The Risk and The Management Challenges",
            speaker: "dr. Ketut Susila, Sp.JP, FIHA",
            time: "10.20-10.40",
          },
          {
            title:
              "Interventional Management of Arrythmia: Ablation and the Devices",
            speaker: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
            time: "10.40-11.00",
          },
          {
            title: "Case Studies",
            speaker: "dr. I Made Putra Swi Antara, Sp.JP(K), FIHA",
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
      <div>
        {schedule.symposiums.map((sympo) => (
          <div>
            <h1>{sympo.title}</h1>
            <h2>Moderator: {sympo.moderator}</h2>
            <p>Time: {sympo.time}</p>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Schedule</Table.HeaderCell>
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
    <div className="page">
      <Tab panes={panes} />
    </div>
  );
}