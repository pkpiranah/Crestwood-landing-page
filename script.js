const supabaseUrl="https://qodbwddewmcbkuancpzc.supabase.co"
const supabaseKey="sb_publishable_H5ZNdu5S0qNboz_pcs7xTA_XpRMHQUK"

const supabaseClient=window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {event.preventDefault();
    const Fname =document.getElementById("Fname").value;
    const lname =document.getElementById("lname").value;
    const Mname =document.getElementById("Mname").value;
    const DateOfBirth =document.getElementById("DateOfBirth").value;
    const Gender =document.getElementById("Gender").value;
    const Semail =document.getElementById("Semail").value;
    const Pnumb =document.getElementById("Pnumb").value;
    const Hadd =document.getElementById("Hadd").value;
    const ClassGradeApplyingFor =document.getElementById("ClassGradeApplyingFor").value;
    const PreviousSchoolAttended =document.getElementById("PreviousSchoolAttended").value;
    const ParentGuardianFullName =document.getElementById("ParentGuardianFullName").value;
    const ParentGuardianPhoneNumber =document.getElementById("ParentGuardianPhoneNumber").value;

    const {error } = await supabaseClient.from("registrationForm").insert ( {
        Mname : Mname,
        Fname : Fname,
        lname : lname,
        DateOfBirth : DateOfBirth,
        Gender : Gender,
        Semail : Semail,
        Pnumb : Pnumb,
        Hadd : Hadd,
        ClassGradeApplyingFor : ClassGradeApplyingFor,
        PreviousSchoolAttended : PreviousSchoolAttended,
        ParentGuardianFullName : ParentGuardianFullName,
        ParentGuardianPhoneNumber : ParentGuardianPhoneNumber
    })
    
    if (error) {
    console.error("SUPABASE ERROR:", error);
    message.textContent = error.message;
}
else {
    message.textContent = "Registration successful!";
    form.reset();
}

}
);