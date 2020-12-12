import React from "react";
import { Link } from "react-router-dom";
import { Segment, Icon, Button } from "semantic-ui-react";

export const posters = [
  {
    id: "1",
    title: "Brugada Type Electrocardiograph Pattern Induced By Fever In Septic Shock Patient, A Case Report",
    dateSubmitted: "",
    author: "Hendsun H, MD",
    imageUrl: "/assets/poster/001 - Brugada Type Electrocardiograph Pattern Induced By Fever In Septic Shock Patient, A Case Report.jpg",
  },
  {
    id: "2",
    title: "CARDIAC TAMPONADE AND ATRIAL FIBRILLATION WITH RAPID VENTRICULAR RESPONSE IN PROBABLE COVID-19 PATIENT A PROBLEMATIC CARDIAC EMERGENCY CASE DURING PANDEMIC ERA IN REMOTE AREA",
    dateSubmitted: "",
    author: "Benyamin Surung Intosius Hutagaol, MD",
    imageUrl: "/assets/poster/002 - Cardiac Tamponade And Atrial Fibrillation With Rapid Ventricular Response In Probable Covid-19 Patient A Problematic Cardiac Emergency Case During Pandemic Era In Remote Area.jpg",
  },
  {
    id: "3",
    title: "Effect of Loading High Intensity Statin Before Percutaneous Coronary Intervention in Patients with Acute Coronary Syndrome: A Systematic Review",
    dateSubmitted: "",
    author: "Cokorda Istri Padmi Suwari, MD",
    imageUrl: "/assets/poster/003 - Effect Of Loading High Intensity Statin Before Percutaneous Coronary Intervention In Patients With Acute Coronary Syndrome - A Systematic Review.jpg"
  },
  {
    id: "4",
    title: "The Effect of Komorbid on Mortality of Covid-19 Patients at Prof. Dr. H. Aloei Saboe Hospital Gorontalo City",
    dateSubmitted: "",
    author: "dr. Santi Ratnalia Parambang",
    imageUrl: "/assets/poster/004 - The Effect Of Komorbid On Mortality Of Covid-19 Patients At Prof. Dr.jpg"
  },
  {
    id: "5",
    title: "RARE CASE OF VALVULOPATHY DUE TO HYPERTHYROID DISEASE-ACQUIRED HYPERTROPHIC CARDIOMYOPATHY: A CASE REPORT",
    dateSubmitted: "",
    author: "Hendsun H, MD",
    imageUrl: "/assets/poster/005 - Rare Case Of Valvulopathy Due To Hyperthyroid Disease - Acquired Hypertrophic Cardiomyopathy, A Case Report.jpg"
  },
  {
    id: "6",
    title: "FIBRINOLYTIC IN ACUTE CORONARY SYNDROME PATIENTS WITH INFERIOR STEMI AND SECOND DEGREE AV BLOCK MOBITZ 1 IN HEAVY SMOKING PATIENTS: A CASE REPORT",
    dateSubmitted: "",
    author: "dr. Ade Dwirisha Putra",
    imageUrl: "/assets/poster/006 - Fibrinolytic In Acute Coronary Syndrome Patients With Inferior Stemi And Second Degree Av Block Mobitz 1 In Heavy Smoking Patients, A Case Report.jpg"
  },
  {
    id: "7",
    title: "False Alarm – Postherpetic Neuralgia Mimicking Acute Coronary Syndrome",
    dateSubmitted: "",
    author: "Paulus Mario Christopher, MD",
    imageUrl: "/assets/poster/007 - False Alarm – Postherpetic Neuralgia Mimicking Acute Coronary Syndrome.jpg"
  },
  {
    id: "8",
    title: "EFFECT OF POLYMORPHISM OF ANGIOTENSIN CONVERTING ENZYME GENE WITH IMPROVEMENT OF LEFT VENTRICULAR EJECTION FRACTION IN CHRONIC HEART FAILURE PATIENTS",
    dateSubmitted: "",
    author: "Ahmad Handayani, MD",
    imageUrl: "/assets/poster/008 - Effect Of Polymorphism Of Angiotensin Converting Enzyme Gene With Improvement Of Left Ventricular Ejection Fraction In Chronic Heart Failure Patients.jpg"
  },
  {
    id: "9",
    title: "MASSIVE PERICARDIAL EFFUSION ON MYCOBACTERIUM PNEUMONIA DUE TO HIV INFECTION : A CASE REPORT",
    dateSubmitted: "",
    author: "dr. Anisa Putri",
    imageUrl: "/assets/poster/009 - Massive Pericardial Effusion On Mycobacterium Pneumonia Due To Hiv Infection, A Case Report.jpg"
  },
  {
    id: "10",
    title: "PERIPARTUM CARDIOMYOPATHY: A CASE REPORT",
    dateSubmitted: "",
    author: "dr. Ni Putu Nita Wiryandari",
    imageUrl: "/assets/poster/010 - Peripartum Cardiomyopathy, A Case Report.jpg"
  },
  {
    id: "11",
    title: "Platelets as an Important Biomarker Correlated with Abnormal Coagulation Function and Disseminated Intravascular Coagulation in COVID-19 Patients",
    dateSubmitted: "",
    author: "dr. Karina",
    imageUrl: "/assets/poster/011 - Platelets As An Important Biomarker Correlated With Abnormal Coagulation Function And Disseminated Intravascular Coagulation In COVID-19 Patients.jpg"
  },
  {
    id: "13",
    title: "QTc Prolongation and Death in Diabetic Population: A Systematic Review and Meta-Analysis of Observational Studies",
    dateSubmitted: "",
    author: "Zakka Zayd Zhullatullah Jayadisastra",
    imageUrl: "/assets/poster/013 - Qtc Prolongation And Death In Diabetic Population, A Systematic Review And Meta-Analysis Of Observational Studies.jpg"
  },
  {
    id: "14",
    title: "COMORBID CARDIOVASCULAR DISEASE PROFILE IN INFECTION OF SEVERE ACUTE RESPIRATORY SYNDROME CORONAVIRUS-2  (SARS-COV-2) AT RSUD KABUPATEN BULELENG",
    dateSubmitted: "",
    author: "dr. Gede Dewagama M.",
    imageUrl: "/assets/poster/014 - Comorbid Cardiovascular Disease Profile In Infection Of Severe Acute Respiratory Syndrome Coronavirus-2  (Sars-Cov-2) At Rsud Kabupaten Buleleng.jpg"
  },
  {
    id: "15",
    title: "Atrial Fibrillation in Patient with Mitral Valve Disease (Stenosis and Regurgitation) and Pneumonia",
    dateSubmitted: "",
    author: "Ni Nyoman Amik Indrayani, MD",
    imageUrl: "/assets/poster/015 - Atrial Fibrillation In Patient With Mitral Valve Disease (Stenosis And Regurgitation) And Pneumonia.jpg"
  },
  {
    id: "16",
    title: "A 54-YEAR OLD MAN WITH ACUTE CORONARY SYNDROME AND EPISODE OF SECOND DEGREE TYPE II ATRIOVENTRICULAR BLOCK",
    dateSubmitted: "",
    author: "Ketut Angga Aditya Putra Pramana, MD",
    imageUrl: "/assets/poster/016 - A 54-Year Old Man With Acute Coronary Syndrome And Episode Of Second Degree Type II Atrioventricular Block.jpg"
  },
  {
    id: "17",
    title: "Rheumatic Heart Disease with Acute Pulmonary Edema In Pregnancy: A Case Report",
    dateSubmitted: "",
    author: "dr. I Gusti Ayu Yulia Mahaadi Pratiwi",
    imageUrl: "/assets/poster/017 - Rheumatic Heart Disease With Acute Pulmonary Edema In Pregnancy - A Case Report.jpg"
  },
  {
    id: "18",
    title: "SINUS BRADYCARDIA AS A CLINICAL MANIFESTATION IN CORONAVIRUS DISEASE 2019 (COVID-19) PATIENT AT SANGLAH GENERAL HOSPITAL DENPASAR, BALI, INDONESIA: A CASE REPORT",
    dateSubmitted: "",
    author: "Gusti Ngurah Prana Jagannatha",
    imageUrl: "/assets/poster/018 - Sinus Bradycardia As A Clinical Manifestation In Coronavirus Disease 2019 (Covid-19) Patient At Sanglah General Hospital Denpasar, Bali, Indonesia, A Case Report.jpg"
  },
  {
    id: "19",
    title: "Resolution in STEMI Patients Without Reperfusion Therapy: Is it Transient ST Myocardial Infarction or Autolysis? A Case Series",
    dateSubmitted: "",
    author: "Edi Kurnawan, MD",
    imageUrl: "/assets/poster/019 - Resolution In STEMI Patients Without Reperfusion Therapy, Is It Transient ST Myocardial Infarction Or Autolysis, A Case Series.jpg"
  },
  {
    id: "20",
    title: "Profile of COVID-19 Patients with Chronic Heart Failure at Prof. Dr. R. D. Kandou Hospital Manado",
    dateSubmitted: "",
    author: "dr. Ferdinan Goutama",
    imageUrl: "/assets/poster/020 - Profile Of COVID-19 Patients With Chronic Heart Failure At Prof. Dr. R. D. Kandou Hospital Manado.jpg"
  },
  {
    id: "21",
    title: "Genetic Impacts on Congenital Heart Disease: A Review",
    dateSubmitted: "",
    author: "Edbert Wielim",
    imageUrl: "/assets/poster/021 - Genetic Impacts On Congenital Heart Disease, A Review.jpg"
  },
  {
    id: "22",
    title: "Recovered Ejection Fraction in Peripartum Cardiomyopathy (PPCM) Patient After 1 Years Treatment and Monitoring: A Case Report",
    dateSubmitted: "",
    author: "Gamalinino Fraduhasa, MD",
    imageUrl: "/assets/poster/022 - Recovered Ejection Fraction In Peripartum Cardiomyopathy (PPCM) Patient After 1 Years Treatment And Monitoring, A Case Report.jpg"
  },
  {
    id: "23",
    title: "DYSLIPIDEMIA AS RISK FACTOR OF REDUCED LEFT VENTRICULAR SYSTOLIC FUNCTION AMONG PATIENTS WITH CHRONIC CORONARY ARTERY DISEASE IN CARDIOLOGY DEPARTMENT OF BHAYANGKARA DENPASAR HOSPITAL",
    dateSubmitted: "",
    author: "dr. Putu Gede Indra Swacharya",
    imageUrl: "/assets/poster/023 - Dyslipidemia As Risk Factor Of Reduced.jpg"
  },
  {
    id: "24",
    title: "Karakteristik Komorbid Kardiovaskuler pada COVID-19: Studi Deskriptif Observasional di Rumah Sakit Universitas Udayana",
    dateSubmitted: "",
    author: "dr. I Made Sutha Saskara",
    imageUrl: "/assets/poster/024 - Karakteristik Komorbid Kardiovaskuler Pada COVID-19, Studi Deskriptif Observasional Di Rumah Sakit Universitas Udayana.jpg"
  },
  {
    id: "25",
    title: "SEVERE HYPOPOTASSEMIA MIMICKING MYOCARDIAL INFARCTION: A CASE REPORT",
    dateSubmitted: "",
    author: "dr. Cindy Amanda Shandy",
    imageUrl: "/assets/poster/025 - Severe Hypopotassemia Mimicking Myocardial Infarction, A Case Report.jpg"
  },
  {
    id: "26",
    title: "The Importance of Early Diagnosis in Acute Pulmonary Embolism",
    dateSubmitted: "",
    author: "dr. Regan Januardy Marliau",
    imageUrl: "/assets/poster/026 - The Importance Of Early Diagnosis In Acute Pulmonary Embolism.jpg"
  },
  {
    id: "27",
    title: "ST segment/Heartrate Hysteresis accuracy in the detection of coronary artery disease ",
    dateSubmitted: "",
    author: "Agung Adhyaksa Bhaskara, MD",
    imageUrl: "/assets/poster/027 - ST Segment_Heartrate Hysteresis Accuracy In The Detection Of Coronary Artery Disease.jpg"
  },
  {
    id: "28",
    title: "The Effect of Ethanolic Extract of Purple Sweet Potato Tuber (Ipomoea batatas) on LOX-1 Levels in Hyperlipidemic Rats Model",
    dateSubmitted: "",
    author: "Gede Setula Narayana",
    imageUrl: "/assets/poster/028 - The Effect Of Ethanolic Extract Of Purple Sweet Potato Tuber (Ipomoea Batatas) On LOX-1 Levels In Hyperlipidemic Rats Model.jpg"
  },
  {
    id: "29",
    title: "CARDIORESPIRATORY PHYSIOLOGICAL MONITORING OF APPLICATION HIGH FLOW NASAL CANNULA (HFNC) FOR ACUTE HYPOXEMIC RESPIRATORY FAILURE IN COVID-19 PATIENT: CASE REPORT",
    dateSubmitted: "",
    author: "Ni Made Pasmiati Setyaningsih, MD",
    imageUrl: "/assets/poster/029 - Tuberculosis And Cardiac Tamponade In Adolescent, A Case Report.jpg"
  },
  {
    id: "30",
    title: "CARDIORESPIRATORY PHYSIOLOGICAL MONITORING OF APPLICATION HIGH FLOW NASAL CANNULA (HFNC) FOR ACUTE HYPOXEMIC RESPIRATORY FAILURE IN COVID-19 PATIENT: CASE REPORT",
    dateSubmitted: "",
    author: "Ni Made Pasmiati Setyaningsih, MD",
    imageUrl: "/assets/poster/030 - Cardiorespiratory Physiological Monitoring Of Application High Flow Nasal Cannula (Hfnc) For Acute Hypoxemic Respiratory Failure In Covid-19 Patient, A Case Report.jpg"
  },
  {
    id: "31",
    title: "A Case Report : Evolution of de winter form to STEMI in ECG",
    dateSubmitted: "",
    author: "dr. Maya Halim C",
    imageUrl: "/assets/poster/031 - A Case Report, Evolution Of De Winter Form To STEMI In ECG.jpg"
  },
  {
    id: "32",
    title: "CASE REPORT : APPROACH OF ACUTE CORONARY SYNDROME IN YOUNG AGE PATIENT WITH VENTRICULAR TACHYCARDIA",
    dateSubmitted: "",
    author: "dr. Maya Halim C",
    imageUrl: "/assets/poster/032 - Case Report, Approach Of Acute Coronary Syndrome In Young Age Patient With Ventricular Tachycardia.jpg"
  },
  {
    id: "34",
    title: "Acute Left Ventricular Strain after Non Selective His Bundle Pacing : A Shift in Dyssynchrony? A Case Report",
    dateSubmitted: "",
    author: "Monica Trifitriana, MD",
    imageUrl: "/assets/poster/034 - Acute Left Ventricular Strain After Non Selective His Bundle Pacing, A Shift In Dyssynchrony_ A Case Report.jpg"
  },
  {
    id: "35",
    title: "The Characteristics Of Echocardiographic Findings Of Rheumatic Heart Disease Patients At Sanglah General Hospital Denpasar In 2017-2020",
    dateSubmitted: "",
    author: "Putu Satyakumara Upadhana",
    imageUrl: "/assets/poster/035 - The Characteristics Of Echocardiographic Findings Of Rheumatic Heart Disease Patients At Sanglah General Hospital Denpasar In 2017-2020.jpg"
  },
  {
    id: "36",
    title: "Echocardiographic Findings in Patients with Infective Endocarditis at Sanglah General Hospital, Denpasar, Bali, Indonesia",
    dateSubmitted: "",
    author: "Putu Satyakumara Upadhana",
    imageUrl: "/assets/poster/036 - Echocardiographic Findings In Patients With Infective Endocarditis At Sanglah General Hospital, Denpasar, Bali, Indonesia.jpg"
  },
  {
    id: "37",
    title: "Red Blood Cell Distribution Width (RDW) Predicts Diastolic Dysfunction than Other Echocardiography Parameters in Cardiovascular Disease: A Meta-Analysis",
    dateSubmitted: "",
    author: "Ayu Suciah Khaerani, MD",
    imageUrl: "/assets/poster/037 - Red Blood Cell Distribution Width (RDW) Predicts Diastolic Dysfunction Than Other Echocardiography Parameters In Cardiovascular Disease, A Meta-Analysis.jpg"
  },
  {
    id: "38",
    title: "Cardiac Arrhythmia Risk Profile and Ventricular Repolarization Indices in COVID-19 Patients : A Systematic Review and Meta-Analysis",
    dateSubmitted: "",
    author: "Rido Mulawarman, MD",
    imageUrl: "/assets/poster/038 - Cardiac Arrhythmia Risk Profile And Ventricular Repolarization Indices In COVID-19 Patients, A Systematic Review And Meta-Analysis.jpg"
  },
  {
    id: "39",
    title: "Beta Blocker in Acute Heart Failure: is it worth it?",
    dateSubmitted: "",
    author: "dr. Evan Hindoro",
    imageUrl: "/assets/poster/039 - Beta Blocker In Acute Heart Failure, Is It Worth It_.jpg"
  },
];

export default function Posters() {
  return (
    <>
      <div class="header-logo container">
        <nav aria-label="breadcrumb">
          <h2 class="title-logo">Poster</h2>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" style={{ color: "#fff" }}>Home</a></li>
            <Icon name="arrow right" style={{ color: "#fff", margin: "0px 5px" }} />
            <li class="breadcrumb-item active" aria-current="page">Poster</li>
          </ol>
        </nav>
      </div>
      <div className="posters">
        <div className="btn-poster">
            <a href="https://us02web.zoom.us/j/5661292057?pwd=NkRXb2ZxQTNZZkZKTzVVbjkycjlKUT09" target="_blank" rel="noopener noreferrer">
              <Button primary>Join Now</Button>
            </a>
        </div>
        {posters.map((poster, index) => (
          <div key={`poster-${index}`}>
            <Link to={`/posters/${poster.id}`}>
              <Segment>
                <p>{poster.title}</p>
                <p>
                  {poster.dateSubmitted} | {poster.author}
                </p>
              </Segment>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
