function generateCertificate() {
    var userName = document.getElementById("userName").value;
    var collegeName = document.getElementById("collegeName").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var certificateId = document.getElementById("certificateId").value;
  
    // Create the certificate element
    var certificate = document.createElement("div");
    certificate.classList.add("certificate");
  
    // Customize the certificate design
    // You can modify the design based on your requirements
    var logoImg = document.createElement("img");
    logoImg.src = "Infyskill.png"; //yha img add krenge
    certificate.appendChild(logoImg);
  
    var title = document.createElement("h1");
    title.textContent = "Certificate of Completion";
    certificate.appendChild(title);
  
    var userNameElement = document.createElement("p");
    userNameElement.classList.add("user-name");
    userNameElement.textContent = "Recipient Name: " + userName;
    certificate.appendChild(userNameElement);
  
    var collegeNameElement = document.createElement("p");
    collegeNameElement.classList.add("college-name");
    collegeNameElement.textContent = "College Name: " + collegeName;
    certificate.appendChild(collegeNameElement);
  
    var dateRangeElement = document.createElement("p");
    dateRangeElement.classList.add("date-range");
    dateRangeElement.textContent = "Date: " + startDate + " - " + endDate;
    certificate.appendChild(dateRangeElement);
  
    var certificateIdElement = document.createElement("p");
    certificateIdElement.classList.add("certificate-id");
    certificateIdElement.textContent = "Certificate ID: " + certificateId;
    certificate.appendChild(certificateIdElement);
  
    // Append the certificate to the body
    document.body.appendChild(certificate);
  
    // Export certificate as PDF or image
    exportCertificate(certificate);
  }
  
  function exportCertificate(certificate) {
    html2canvas(certificate, { scale: 2 })
      .then(function(canvas) {
        // Convert canvas to base64 image data
        var imgData = canvas.toDataURL("image/png");
  
        // Create a PDF document using jsPDF
        var doc = new jsPDF({
          orientation: "landscape",
        });
  
        // Add the image to the PDF document
        doc.addImage(imgData, "PNG", 30, 20, 230, 150); // Adjust the dimensions as needed
  
        // Save the PDF document or print it
        doc.save("certificate.pdf");
        // doc.autoPrint(); // Uncomment to print the document
      })
      .catch(function(error) {
        console.error("Error exporting certificate:", error);
      });
  }
  