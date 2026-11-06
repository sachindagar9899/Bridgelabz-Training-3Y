// Q4: Custom Form Builder (self-contained browser UI)
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        const form = document.createElement("form");
        form.id = "dynamic-form";

        this.fields.forEach(field => {
            const label = document.createElement("label");
            label.textContent = `${field.label}: `;
            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.required = field.required !== false;
            label.appendChild(input);
            form.appendChild(label);
            form.appendChild(document.createElement("br"));
        });

        const submit = document.createElement("button");
        submit.type = "submit";
        submit.textContent = "Submit";
        form.appendChild(submit);

        const output = document.createElement("pre");
        output.id = "form-output";
        form.addEventListener("submit", event => {
            event.preventDefault();
            output.textContent = JSON.stringify(this.getFormData(form), null, 2);
        });

        document.body.append(form, output);
    }

    getFormData(form) {
        return Object.fromEntries(new FormData(form).entries());
    }
}

const builder = new FormBuilder([
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
]);
builder.createForm();
