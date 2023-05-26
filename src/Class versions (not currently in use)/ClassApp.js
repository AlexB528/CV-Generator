  import React, {Component} from "react";
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

  class App extends Component {
      constructor(props) {
          super (props)
          this.state = {
            // Initialize with an empty array
              experienceForms: [<ExperienceForm onDeleteButtonClicked={this.deleteButton} formID={"Exp 1"} onInputChange={this.updateResume}/>],
              educationForms: [<EducationForm onDeleteButtonClicked={this.deleteButton} formID={"Edu 1"} onInputChange={this.updateResume}/>],
              skillForms: [<SkillForm skillNumber="Skill 1" onDeleteButtonClicked={this.deleteButton} formID={"Ski 1"} onInputChange={this.updateResume}/>],
              experienceFormsFieldData: {},
              educationFormsFieldData: {},
              personalInformationFormsFieldData: {},
              skillFormsFieldData: {},
              description: ""
          };
        this.onClickBtnExp = this.onClickBtnExp.bind(this);
        this.onClickBtnEdu = this.onClickBtnEdu.bind(this);
        this.onClickBtnSki = this.onClickBtnSki.bind(this);
        this.updateResume = this.updateResume.bind(this);
        
      }

      /* Javascript functions can be written here */
      onClickBtnExp () {
          let numOfForms = this.state.experienceForms.length + 1;
          let id = "Exp " + numOfForms;
          this.setState((prevState) => ({
              experienceForms: [...prevState.experienceForms, <ExperienceForm onDeleteButtonClicked={this.deleteButton} formID={id} onInputChange={this.updateResume}/>]
          }));
      }

      onClickBtnEdu () {
        let numOfForms = this.state.educationForms.length + 1;
        let id = "Edu " + numOfForms;
        this.setState((prevState) => ({
            educationForms: [...prevState.educationForms, <EducationForm onDeleteButtonClicked={this.deleteButton} formID={id} onInputChange={this.updateResume}/>]
        }));
      }

      onClickBtnSki () {
        let numOfForms = this.state.skillForms.length + 1;
        let id = "Ski " + numOfForms;
        let skillNum = "Skill " + numOfForms;
        this.setState((prevState) => ({
            skillForms: [...prevState.skillForms, <SkillForm skillNumber={skillNum} onDeleteButtonClicked={this.deleteButton} formID={id} onInputChange={this.updateResume}/>]
        }));
      }

      // Idk why, but this only works as an arrow function
      updateResume = (e) => {
        const id = e.target.parentNode.id;
        const updatedFieldData = formIterator(e.target.parentNode);
        let idType = id.substr(0, 3);
        if (idType == "Edu") {
          this.setState((prevState) => ({
              educationFormsFieldData: {
              ...prevState.educationFormsFieldData,
              [id]: updatedFieldData
              }
             }))
        } else if (idType == "Exp") {
          this.setState((prevState) => ({
              experienceFormsFieldData: {
              ...prevState.experienceFormsFieldData,
              [id]: updatedFieldData
              }
          }))
        } else if (idType == "Ski") {
          this.setState((prevState) => ({
            skillFormsFieldData: {
            ...prevState.skillFormsFieldData,
            [id]: updatedFieldData
            }
        }))
        } else {
          this.setState((prevState) => ({
              personalInformationFormsFieldData: {
              ...prevState.personalInformationFormsFieldData,
              [id]: updatedFieldData
            }
        }))
        }
      }

      deleteButton = (e) => {
        let id = e.target.parentNode.id;
        let idType = id.substr(0, 3);
        if (idType == "Exp") {
          const updatedFieldData = { ...this.state.experienceFormsFieldData };
          delete updatedFieldData[id];
          this.setState({
            experienceFormsFieldData: updatedFieldData
          });
        } else if (idType == "Edu") {
          const updatedFieldData = { ...this.state.educationFormsFieldData };
          delete updatedFieldData[id];
          this.setState({
            educationFormsFieldData: updatedFieldData
          });
        } else if (idType == "Ski") {
            const updatedFieldData = { ...this.state.skillFormsFieldData };
            delete updatedFieldData[id];
            this.setState({
              skillFormsFieldData: updatedFieldData
            });
        }
        // delete form
        e.target.parentNode.remove();
      }

      descriptionChange = (e) => {
        console.log(e.target.tagName);
        this.setState({
          description: e.target.value
        });
      }

      render () {
          return (
              <div class="wrapperLevel1">
                  <div class="formsSection">
                    <div class="wrapperLevel2">
                      <PersonalInfoForm onInputChange={this.updateResume}/>
                    </div>
                    <div class="wrapperLevel2">
                      <h2>Description</h2>
                      <textarea onChange={this.descriptionChange}/>
                    </div>
                    <div class="wrapperLevel2">
                      <div class="title">
                          Experience
                      </div>
                      {this.state.experienceForms.map((form, index) => (
                          <React.Fragment key={index}>
                              {form}
                          </React.Fragment>
                      ))}
                      <AddButton onButtonClicked={this.onClickBtnExp}/>
                    </div>
                    <div class="wrapperLevel2">
                      <div class="title">
                          Education
                      </div>
                      {this.state.educationForms.map((form, index) => (
                          <React.Fragment key={index}>
                              {form}
                          </React.Fragment>
                      ))}
                      <AddButton onButtonClicked={this.onClickBtnEdu}/>
                    </div>
                    <div class="wrapperLevel2">
                      <div class="title">
                          Skills
                      </div>
                      {this.state.skillForms.map((form, index) => (
                          <React.Fragment key={index}>
                              {form}
                          </React.Fragment>
                      ))}
                      <AddButton onButtonClicked={this.onClickBtnSki}/>
                    </div>
                  </div>
                  <div class="formattedResumeSection">
                    <FormattedResume skillsInfo={<SkillsFormatted skillForms={this.state.skillFormsFieldData}/>} personalInfo={<PersonalInfoFormatted personalInfoForms={this.state.personalInformationFormsFieldData}/>} descriptionInfo={this.state.description}educationInfo={<EducationFormatted eduForms={this.state.educationFormsFieldData}/>} experienceInfo={<ExperienceFormatted expForms={this.state.experienceFormsFieldData}/>}/>
                  </div>
              </div>
          )
      }
  }

  export default App;
