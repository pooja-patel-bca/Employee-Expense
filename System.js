// Employee Expense Reimbursement Eligibility System

const employeeId = "EMP101";
const expenseCategory = "Travel";
const submittedAmount = 12000;
const numberOfDays = 3;
const documentsSubmitted = true;

let limit = 0;
let eligibleAmount = 0;
let reimbursementStatus = "";
let remarks = "";

// Step 1: Set reimbursement limit
switch (expenseCategory.toLowerCase()) {
    case "travel":
        limit = 10000;
        break;

    case "accommodation":
        limit = 8000;
        break;

    case "food":
        limit = 3000;
        break;

    case "other":
        limit = 2000;
        break;

    default:
        reimbursementStatus = "Rejected";
        remarks = "Invalid expense category.";
}

// Step 2: Validate expense details
if (reimbursementStatus !== "Rejected") {

    if (employeeId.trim() === "") {
        reimbursementStatus = "Rejected";
        remarks = "Employee ID is missing.";
    }

    else if (submittedAmount <= 0 || numberOfDays <= 0) {
        reimbursementStatus = "Rejected";
        remarks = "Expense amount and number of days must be greater than zero.";
    }

    else if (!documentsSubmitted) {
        reimbursementStatus = "Rejected";
        remarks = "Supporting documents have not been submitted.";
    }

    else {
        // Step 3: Calculate eligible amount
        eligibleAmount = Math.min(submittedAmount, limit);

        // Step 4: Determine reimbursement status
        if (submittedAmount <= limit) {
            reimbursementStatus = "Approved";
            remarks = "Expense approved within the category limit.";
        } else {
            reimbursementStatus = "Partially Approved";
            remarks = "Submitted amount exceeds the category limit.";
        }
    }
}

// Step 5: Display complete output
console.log("\n==============================================");
console.log(" EMPLOYEE EXPENSE REIMBURSEMENT SUMMARY");
console.log("==============================================");
console.log("Employee ID           :", employeeId);
console.log("Expense Category      :", expenseCategory);
console.log("Number of Days        :", numberOfDays);
console.log("Submitted Amount      : ₹" + submittedAmount);
console.log("Reimbursable Amount   : ₹" + eligibleAmount);
console.log("Reimbursement Status  :", reimbursementStatus);
console.log("Remarks               :", remarks);
console.log("==============================================");