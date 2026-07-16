const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const complaintCheckboxes = complaintsGroup.querySelectorAll(
  'input[type="checkbox"]'
);
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById(
  "complaint-description"
);

const solutionsGroup = document.getElementById("solutions-group");
const solutionRadios = solutionsGroup.querySelectorAll(
  'input[type="radio"]'
);
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById(
  "solution-description"
);

// ---------- Helpers ----------

function setBorder(el, valid) {
  el.style.borderColor = valid ? "green" : "red";
}

function validateForm() {
  const validations = {};

  validations["full-name"] =
    fullName.value.trim() !== "";

  validations["email"] =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  validations["order-no"] =
    /^2024\d{6}$/.test(orderNo.value.trim());

  validations["product-code"] =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(
      productCode.value.trim()
    );

  validations["quantity"] =
    /^\d+$/.test(quantity.value) &&
    parseInt(quantity.value, 10) > 0;

  validations["complaints-group"] =
    [...complaintCheckboxes].some(cb => cb.checked);

  validations["complaint-description"] =
    !otherComplaint.checked ||
    complaintDescription.value.trim().length >= 20;

  validations["solutions-group"] =
    [...solutionRadios].some(r => r.checked);

  validations["solution-description"] =
    !otherSolution.checked ||
    solutionDescription.value.trim().length >= 20;

  return validations;
}

function isValid(result) {
  return Object.values(result).every(Boolean);
}

// ---------- Change Events ----------

fullName.addEventListener("change", () => {
  setBorder(fullName, validateForm()["full-name"]);
});

email.addEventListener("change", () => {
  setBorder(email, validateForm()["email"]);
});

orderNo.addEventListener("change", () => {
  setBorder(orderNo, validateForm()["order-no"]);
});

productCode.addEventListener("change", () => {
  setBorder(productCode, validateForm()["product-code"]);
});

quantity.addEventListener("change", () => {
  setBorder(quantity, validateForm()["quantity"]);
});

complaintCheckboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    const result = validateForm();

    setBorder(
      complaintsGroup,
      result["complaints-group"]
    );

    if (otherComplaint.checked) {
      setBorder(
        complaintDescription,
        result["complaint-description"]
      );
    }
  });
});

complaintDescription.addEventListener("change", () => {
  if (otherComplaint.checked) {
    setBorder(
      complaintDescription,
      validateForm()["complaint-description"]
    );
  }
});

solutionRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    const result = validateForm();

    setBorder(
      solutionsGroup,
      result["solutions-group"]
    );

    if (otherSolution.checked) {
      setBorder(
        solutionDescription,
        result["solution-description"]
      );
    }
  });
});

solutionDescription.addEventListener("change", () => {
  if (otherSolution.checked) {
    setBorder(
      solutionDescription,
      validateForm()["solution-description"]
    );
  }
});

// ---------- Submit ----------

form.addEventListener("submit", function (e) {
  const result = validateForm();

  if (!isValid(result)) {
    e.preventDefault();

    setBorder(fullName, result["full-name"]);
    setBorder(email, result["email"]);
    setBorder(orderNo, result["order-no"]);
    setBorder(productCode, result["product-code"]);
    setBorder(quantity, result["quantity"]);

    setBorder(
      complaintsGroup,
      result["complaints-group"]
    );

    if (otherComplaint.checked) {
      setBorder(
        complaintDescription,
        result["complaint-description"]
      );
    }

    setBorder(
      solutionsGroup,
      result["solutions-group"]
    );

    if (otherSolution.checked) {
      setBorder(
        solutionDescription,
        result["solution-description"]
      );
    }
  }
});