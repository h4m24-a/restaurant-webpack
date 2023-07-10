const createContactPage = () => {
    const content = document.querySelector("#content");
    const newDiv = document.createElement("div");
    newDiv.classList.add("page-content");

    const form = document.createElement("form")
    form.classList.add("contact-form")

    const inputHeading = document.createElement("input");
    inputHeading.type = "text";
    inputHeading.placeholder = "Enter heading";
    form.appendChild(inputHeading);

    const inputAddress = document.createElement("input")
    inputAddress.type = "text";
    inputAddress.placeholder = "Enter Address";
    form.appendChild(inputAddress);

    const inputPhone = document.createElement("input")
    inputPhone.type = "text";
    inputPhone.placeholder = "Enter Phone Number";
    form.appendChild(inputPhone);

    const submitButton = document.createElement("input")
    submitButton.type = "input";
    submitButton.placeholder = "input";
    form.appendChild(submitButton);

    newDiv.appendChild(form);
    content.appendChild(newDiv);
}

export default createContactPage;