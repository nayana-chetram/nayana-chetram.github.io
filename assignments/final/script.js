const items = [
  {
    title: "Hofstra AI Society",
    category: "ai",
    type: "Leadership",
    description: "Founded Hofstra’s first student-led organization centered on analytics, artificial intelligence, and emerging technologies."
  },
  {
    title: "Customer Loan Acceptance Prediction Model",
    category: "ai",
    type: "Project",
    description: "Developing a Python-based machine learning project using data preprocessing, feature selection, Logistic Regression, and K-Nearest Neighbors."
  },
  {
    title: "Hardline Capital",
    category: "finance",
    type: "Finance Experience",
    description: "Analyze financial and market datasets to evaluate risk-return profiles, performance trends, and investment opportunities."
  },
  {
    title: "Grant Management Services",
    category: "finance",
    type: "Data Analytics Experience",
    description: "Built and maintained structured financial datasets and performed data validation and reconciliation across financial entries."
  },
  {
    title: "EisnerAmper",
    category: "finance",
    type: "Private Equity Experience",
    description: "Examined projected cash flows, valuation inputs, and market trends through real estate private equity analysis."
  },
  {
    title: "Extern x PwC",
    category: "consulting",
    type: "Consulting Experience",
    description: "Worked on business transformation and growth strategy projects, including financial optimization and strategic recommendations."
  },
  {
    title: "Cybersecurity Case Competition",
    category: "leadership",
    type: "Award",
    description: "Placed first in Hofstra’s Cybersecurity Case Competition by applying structured analysis and systems-based thinking."
  }
];

const categoryFilter = document.getElementById("categoryFilter");
const results = document.getElementById("results");

function getFilteredItems(selectedCategory) {
  switch (selectedCategory) {
    case "ai":
      return items.filter(item => item.category === "ai");

    case "finance":
      return items.filter(item => item.category === "finance");

    case "consulting":
      return items.filter(item => item.category === "consulting");

    case "leadership":
      return items.filter(item => item.category === "leadership");

    case "all":
    default:
      return items;
  }
}

function renderItems(filteredItems) {
  results.innerHTML = "";

  filteredItems.forEach(function(item) {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Category:</strong> ${item.type}</p>
      <p>${item.description}</p>
    `;

    results.appendChild(card);
  });
}

categoryFilter.addEventListener("change", function() {
  const selectedCategory = categoryFilter.value;
  const filteredItems = getFilteredItems(selectedCategory);
  renderItems(filteredItems);

  gtag("event", "interest_filter_change", {
    selected_category: selectedCategory
  });
});

renderItems(items);
