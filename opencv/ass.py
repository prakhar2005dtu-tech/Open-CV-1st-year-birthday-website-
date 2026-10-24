# First, ensure you have fpdf installed: pip install fpdf
from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 16)
        self.cell(0, 10, 'The "Churn Buster" Ensemble Challenge', 0, 1, 'C')
        self.set_font('Arial', 'I', 10)
        self.cell(0, 10, 'Machine Learning Assignment: Bagging, Boosting & Voting', 0, 1, 'C')
        self.ln(5)

    def chapter_title(self, label):
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(200, 220, 255) # Light blue background
        self.cell(0, 10, label, 0, 1, 'L', fill=True)
        self.ln(4)

    def chapter_body(self, text):
        self.set_font('Arial', '', 11)
        self.multi_cell(0, 6, text)
        self.ln()

    def code_block(self, code):
        self.set_font('Courier', '', 10)
        self.set_fill_color(240, 240, 240) # Light gray
        self.multi_cell(0, 5, code, border=1, fill=True)
        self.ln()

# Create PDF
pdf = PDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

# --- SCENARIO ---
pdf.set_font('Arial', 'B', 12)
pdf.cell(0, 10, 'Scenario & Goal', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6, 
    'You have been hired by a telecom company, "DataCell." They are losing customers to competitors. '
    'Your manager wants a model that can predict which customers are likely to leave (Churn = 1) '
    'so the support team can offer them a discount to stay.\n\n'
    'GOAL: Compare the performance of a single model versus various Ensemble techniques '
    'to see which architecture yields the highest Accuracy and Stability.'
)
pdf.ln(5)

# --- PART 1 ---
pdf.chapter_title('Part 1: Dataset Generation (The "Random Ahh" Data)')
pdf.chapter_body(
    'Instruct students to generate their own noisy dataset using Scikit-Learn. '
    'This ensures every student gets unique data but the same structure.\n\n'
    'Task: Create a dataset representing 1,000 customers with the following features:\n'
    '- X (Features): Monthly_Bill, Data_Usage_GB, Customer_Service_Calls.\n'
    '- Y (Target): Churn (1 = Left, 0 = Stayed).'
)

code_snippet = """from sklearn.datasets import make_classification
import pandas as pd

# Generate "noisy" customer data
X, y = make_classification(
    n_samples=1000,
    n_features=5,       # 5 total columns
    n_informative=3,    # Only 3 actually predict the outcome
    n_redundant=2,      # 2 are useless noise
    n_classes=2,        # Churn (1) vs Stay (0)
    flip_y=0.1,         # 10% random noise (Mislabeling)
    random_state=42
)"""
pdf.code_block(code_snippet)

# --- PART 2 ---
pdf.chapter_title('Part 2: The Modeling Tasks')

# Task A
pdf.set_font('Arial', 'B', 11)
pdf.cell(0, 8, 'Task A: The Weak Learner (Baseline)', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6, 
    '- Train a single Decision Tree Classifier.\n'
    '- Constraint: Do not limit the depth (max_depth=None).\n'
    '- Observation Question: Does this model overfit? (Hint: Check the difference between Training Accuracy and Testing Accuracy).\n'
    '- Theory Link: Recall that a single Decision Tree usually has High Variance.'
)
pdf.ln(2)

# Task B
pdf.set_font('Arial', 'B', 11)
pdf.cell(0, 8, 'Task B: Bagging (The Parallel Jury)', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6, 
    '- Train a Random Forest Classifier (a special case of Bagging).\n'
    '- Requirement: Use n_estimators=100.\n'
    '- Bonus: Enable oob_score=True and print the OOB Score. Explain in one line why OOB score allows us to validate the model without a separate test set.\n'
    '- Theory Link: Bagging reduces variance by training on random subsets of data (Bootstrap).'
)
pdf.ln(2)

# Task C
pdf.set_font('Arial', 'B', 11)
pdf.cell(0, 8, 'Task C: Boosting (The Sequential Specialist)', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6, 
    '- Train an AdaBoost Classifier.\n'
    '- Requirement: Use Decision Stumps as the base estimator (A tree with max_depth=1).\n'
    '- Concept Check: Explain how AdaBoost updates the "weights" of the rows. Specifically, what happens to the weight of a row if the previous model classified it incorrectly? (Answer: The weight increases).\n'
    '- Theory Link: Boosting is a sequential process where models focus on the mistakes of previous models.'
)
pdf.ln(2)

# Task D
pdf.set_font('Arial', 'B', 11)
pdf.cell(0, 8, 'Task D: The "Grand Council" (Voting Ensemble)', 0, 1)
pdf.set_font('Arial', '', 11)
pdf.multi_cell(0, 6, 
    '- Combine your Single Tree, Random Forest, and a Logistic Regression model using a Voting Classifier.\n'
    '- Experiment: Compare Hard Voting vs. Soft Voting.\n'
    '   * Hard Voting: Majority wins (Count the votes).\n'
    '   * Soft Voting: Average the probabilities (Confidence scores).'
)
pdf.ln()

# --- PART 3 ---
pdf.chapter_title('Part 3: The Final Showdown (Evaluation)')
pdf.chapter_body(
    'Create a Python Dictionary or Pandas DataFrame to tabulate the results. '
    'It should look like this (fill in your actual values):'
)

# Table settings
pdf.set_font('Arial', 'B', 10)
col_width_model = 60
col_width_acc = 30
col_width_exp = 95
row_height = 8

# Table Header
pdf.cell(col_width_model, row_height, 'Model', 1)
pdf.cell(col_width_acc, row_height, 'Accuracy', 1)
pdf.cell(col_width_exp, row_height, 'Explanation', 1)
pdf.ln()

# Table Rows
data = [
    ('Single Decision Tree', '78%', 'High Variance, likely overfitted.'),
    ('Random Forest', '84%', 'Reduced variance by averaging multiple trees.'),
    ('AdaBoost', '86%', 'Reduced bias by focusing on hard-to-predict customers.'),
    ('Voting (Soft)', '85%', 'Combined distinct algorithms (Heterogeneous).'),
]

pdf.set_font('Arial', '', 10)
for model, acc, exp in data:
    pdf.cell(col_width_model, row_height, model, 1)
    pdf.cell(col_width_acc, row_height, acc, 1)
    pdf.cell(col_width_exp, row_height, exp, 1)
    pdf.ln()

# Output file
pdf.output("Churn_Buster_Challenge.pdf")
print("✅ PDF 'Churn_Buster_Challenge.pdf' generated successfully!")