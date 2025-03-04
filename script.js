document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("adoptionForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const hasLivedWithDog = document.getElementById("checkbox").checked;
        const selectedBreeds = Array.from(document.getElementById("multiSelect").selectedOptions).map(option => option.value);

        if (!name || !phone || !address || selectedBreeds.length === 0) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Form Submitted Successfully!");
        console.log("Name:", name);
        console.log("Phone:", phone);
        console.log("Address:", address);
        console.log("Lived with Dog Before:", hasLivedWithDog ? "Yes" : "No");
        console.log("Preferred Breeds:", selectedBreeds);

        alert("Application Submitted Successfully!");
        form.reset();
    });
});
