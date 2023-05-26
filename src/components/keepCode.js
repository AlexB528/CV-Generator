if (idType == "Exp") {
    const updatedFieldData = experienceFormsFieldData;
    let idType = id.substr(0, 3);
    delete updatedFieldData[id];
    setExperienceFormsFieldData(updatedFieldData);
  }
  e.target.parentNode.remove();