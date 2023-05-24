const deleteForm = (e) => {
    e.target.parentNode.remove();
}

const formIterator = (formElement) => {
    const fieldData = {};
    const formID = formElement.id;
    for (let i = 0; i < formElement.elements.length; i++) {
        let x = formElement.elements[i];
        // console.log(x.tagName)
    //    let fieldDataLength = Object.keys(fieldData).length;
        if (x.tagName == 'INPUT' || x.tagName == 'TEXTAREA') {
            fieldData[x.id] = x.value;
        }
    }
    return fieldData;
}

export { deleteForm, formIterator }