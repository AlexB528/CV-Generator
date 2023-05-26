import React, {useState, useEffect} from 'react';
import './styles/style.css';
import PersonalInfoForm from "./components/PersonalInfoForm.js"; // changed to functional component
import ExperienceForm from "./components/ExperienceForm"; // changed to functional component
import EducationForm from "./components/EducationForm"; // changed to functional component
import SkillForm from "./components/SkillForm"; // changed to functional component
import AddButton from './components/AddButton.js'; // changed to functional component
import FormattedResume from './components/FormattedResume.js' // changed to functional component
import ExperienceFormatted from './components/ExperienceFormatted.js' // changed to functional component
import EducationFormatted from './components/EducationFormatted.js' // changed to functional component
import PersonalInfoFormatted from './components/PersonalInfoFormatted'; //changed to functional component
import SkillsFormatted from './components/SkillsFormatted.js'; // changed to functional component
import {formIterator} from './components/utilities.js'

const App = () => {

    const [personalInformationFormsFieldData, setPersonalInformationFormsFieldData] = useState({});
    const [description, setDescription] = useState ({});
    const [experienceForms, setExperienceForms] = useState([]);
    const [experienceFormsFieldData, setExperienceFormsFieldData] = useState({'Exp 1': 'testing'});
    const [educationForms, setEducationForms] = useState([]);
    const [educationFormsFieldData, setEducationFormsFieldData] = useState({});
    const [skillForms, setSkillForms] = useState([]);
    const [skillFormsFieldData, setSkillFormsFieldData] = useState({});


    const updateResume = (e) => {
        const id = e.target.parentNode.id;
        const updatedFieldData = formIterator(e.target.parentNode);
        let idType = id.substr(0, 3);
        if (idType == "Exp") {
          setExperienceFormsFieldData(prevExperienceFormsFieldData => ({ ...prevExperienceFormsFieldData, [id]: updatedFieldData}));
        } else if (idType == "Edu") {
          setEducationFormsFieldData(prevEducationFormsFieldData => ({ ...prevEducationFormsFieldData, [id]: updatedFieldData}));
        } else if (idType == "Ski") {
          setSkillFormsFieldData(prevSkillFormsFieldData => ({ ...prevSkillFormsFieldData, [id]: updatedFieldData}));
        } else {
          setPersonalInformationFormsFieldData(prevState => ({ ...prevState, [id]: updatedFieldData}));
        }
    }

    const descriptionChange = (e) => {
        setDescription({enteredDescription: e.target.value})
    }

    const deleteButton = (e) => {
        let id = e.target.parentNode.id;
        let idType = id.substr(0, 3);
        if (idType == 'Exp') {
            const updatedFieldData = experienceFormsFieldData;
            delete updatedFieldData[id];
                setExperienceFormsFieldData(prevExperienceFormsFieldData => {
                    const updatedFieldData = { ...prevExperienceFormsFieldData };
                    delete updatedFieldData[id];
                    return updatedFieldData;
        });
        } else if (idType == 'Edu') {
            const updatedFieldData = educationFormsFieldData;
            delete updatedFieldData[id];
                setEducationFormsFieldData(prevEducationFormsFieldData => {
                    const updatedFieldData = { ...prevEducationFormsFieldData };
                    delete updatedFieldData[id];
                    return updatedFieldData;
        });
        } else {
            const updatedFieldData = skillFormsFieldData;
            delete updatedFieldData[id];
                setSkillFormsFieldData(prevSkillFormsFieldData => {
                    const updatedFieldData = { ...prevSkillFormsFieldData };
                    delete updatedFieldData[id];
                    return updatedFieldData;
            });
        }
        e.target.parentNode.remove();
    }

    const onClickBtnExp = () => {
        let numOfForms = experienceForms.length + 1;
        let id = "Exp " + numOfForms;
        setExperienceForms(prevExperienceForms => ([ ...prevExperienceForms, {key: numOfForms, form: <ExperienceForm onDeleteButtonClicked={deleteButton} formID={id} onInputChange={updateResume}/>}]));
    }

    const onClickBtnEdu = () => {
        let numOfForms = educationForms.length + 1;
        let id = "Edu " + numOfForms;
        setEducationForms(prevEducationForms => ([ ...prevEducationForms, {key: numOfForms, form: <EducationForm onDeleteButtonClicked={deleteButton} formID={id} onInputChange={updateResume}/>}]));
    }

    const onClickBtnSki = () => {
        let numOfForms = skillForms.length + 1;
        let id = "Ski " + numOfForms;
        setSkillForms(prevSkillForms => ([ ...prevSkillForms, {key: numOfForms, form: <SkillForm skillNumber="Skill 1" onDeleteButtonClicked={deleteButton} formID={id} onInputChange={updateResume}/>}]));
    }

    useEffect(() => {
        setExperienceForms([{ key: 1, form: <ExperienceForm onDeleteButtonClicked={deleteButton} formID='Exp 1' onInputChange={updateResume} /> }])
    }, []);

    useEffect(() => {
        setEducationForms([{key: 1, form: <EducationForm onDeleteButtonClicked={deleteButton} formID="Edu 1" onInputChange={updateResume}/>}])
    }, []);

    useEffect(() => {
        setSkillForms([{key: 1, form: <SkillForm skillNumber="Skill 1" onDeleteButtonClicked={deleteButton} formID="Ski 1" onInputChange={updateResume}/>}])
    }, []);

    return (
        <div class="wrapperLevel1">
            <div class="formsSection">
              <div class="wrapperLevel2">
                <PersonalInfoForm onInputChange={updateResume}/>
              </div>
              <div class="wrapperLevel2">
                <h2>Description</h2>
                <textarea onChange={descriptionChange}/>
              </div>
              <div class="wrapperLevel2">
                <div class="title">
                    Experience
                </div>
                {experienceForms.map(experienceForm =>
                    <React.Fragment key={experienceForm.key}>
                        {experienceForm.form}
                    </React.Fragment>
                )}
                <AddButton onButtonClicked={onClickBtnExp}/>
              </div>
              <div class="wrapperLevel2">
                <div class="title">
                    Education
                </div>
                {educationForms.map(educationForm =>
                    <React.Fragment key={educationForm.key}>
                        {educationForm.form}
                    </React.Fragment>
                )}
                <AddButton onButtonClicked={onClickBtnEdu}/>
              </div>
              <div class="wrapperLevel2">
                <div class="title">
                    Skills
                </div>
                {skillForms.map(skillForm =>
                    <React.Fragment key={skillForm.key}>
                        {skillForm.form}
                    </React.Fragment>
                )}
                <AddButton onButtonClicked={onClickBtnSki}/>
              </div>
            </div>
            <div class="formattedResumeSection">
              <FormattedResume personalInfo={<PersonalInfoFormatted personalInfoForms={personalInformationFormsFieldData}/>} descriptionInfo={description.enteredDescription} experienceInfo={<ExperienceFormatted expForms={experienceFormsFieldData}/>} educationInfo={<EducationFormatted eduForms={educationFormsFieldData}/>} skillsInfo={<SkillsFormatted skillForms={skillFormsFieldData}/>} />
            </div>
        </div>
    )
};

export default App;