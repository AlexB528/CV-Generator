updateResume = (e) => {
    const id = e.target.parentNode.id;
    const updatedFieldData = formIterator(e.target.parentNode);
    let idType = e.target.parentNode.id.substr(0, 3);
    console.log(idType);
    console.log(typeof idType)
    if (idType == "edu") {
      this.setState((prevState) => ({
          educationFormsFieldData: {
          ...prevState.educationFormsFieldData,
          [id]: updatedFieldData
          }
         }))
    } else {
      this.setState((prevState) => ({
          experienceFormsFieldData: {
          ...prevState.experienceFormsFieldData,
          [id]: updatedFieldData
          }
      }))
    }
  }


  updateResume = (e) => {
    const id = e.target.parentNode.id;
    const updatedFieldData = formIterator(e.target.parentNode);
      this.setState((prevState) => ({
          experienceFormsFieldData: {
          ...prevState.experienceFormsFieldData,
          [id]: updatedFieldData
          }
      }))
  }