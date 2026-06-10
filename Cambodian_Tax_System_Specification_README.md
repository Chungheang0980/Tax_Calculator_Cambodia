# Cambodian Tax Calculator System — System Specifications

This README serves as the technical documentation and developer guide for building a comprehensive Cambodian Tax Calculator engine, fully mapped from the rules, formulas, and statutory rates enforced by the General Department of Taxation (GDT).

---

## 1. Tax on Salary (ពន្ធលើប្រាក់បៀវត្ស)

### Step 1: Determine Residency Status
* **Resident (និវាសនជន):** Meets any of these criteria:
    * Primary residence in Cambodia.
    * Principal place of stay in Cambodia.
    * Present in Cambodia for more than 182 days in any 12-month period.
* **Non-Resident (អនិវាសនជន):** A person who does not meet the resident criteria but earns Cambodian-sourced salary.

### Step 2: Establish Monthly Taxable Salary Base
$$	ext{Taxable Salary} = 	ext{Gross Base Salary} + 	ext{Overtime} + 	ext{Prior Month Advances/Loans} + 	ext{Premiums/Allowances} - 	ext{Exemptions}$$

* **Exemptions (Deductions from Base):**
    * Actual professional expenses executed strictly for the business and backed by detailed invoices.
    * Labor Law compliant termination/severance allowances.
    * Uniforms or specialized professional equipment provided free or below cost.
    * Flat-rate mission and travel allowances.
    * Seniority indemnity payments (exempt up to 4,000,000 Riels per year from 2020 onwards; only for Khmer nationals prior to 2019).

### Step 3: Deduct Family Rebates (Residents Only)
Residents receive a monthly relief reduction of **150,000 Riels** per qualified dependent:
* **Spouse:** Homemaker only.
* **Children:** Under 14 years old, or full-time pupils/students up to 25 years old.

$$	ext{Net Taxable Salary} = 	ext{Taxable Salary Base} - (	ext{Number of Dependents} 	imes 150,000 	ext{ KHR})$$

### Step 4: Calculate Core Salary Tax Due
* **Resident Progressive Bracket Table:** Apply the progressive tax bracket formula to the Net Taxable Salary:

| Net Taxable Monthly Salary (KHR) | Tax Rate | Tax Calculation Formula |
| :--- | :--- | :--- |
| 0 to 1,500,000 | 0% | $0$ |
| 1,500,001 to 2,000,000 | 5% | $(	ext{Salary} 	imes 5\%) - 75,000$ |
| 2,000,001 to 8,500,000 | 10% | $(	ext{Salary} 	imes 10\%) - 175,000$ |
| 8,500,001 to 12,500,000 | 15% | $(	ext{Salary} 	imes 15\%) - 600,000$ |
| Over 12,500,000 | 20% | $(	ext{Salary} 	imes 20\%) - 1,225,000$ |

* **Non-Resident Rule:** Apply a flat **20%** tax rate directly to the total Cambodian-sourced taxable salary (family rebates are not permitted).
$$	ext{Tax Due} = 	ext{Taxable Salary Base} 	imes 20\%$$

### Step 5: Fringe Benefits Tax (អត្ថប្រយោជន៍បន្ថែម)
Any secondary benefit outside standard salary items (e.g., vehicles, food, housing, subsidized utilities, below-market interest loans) must be taxed separately.
$$	ext{Fringe Benefits Tax} = 	ext{Market Value of Benefit (inclusive of all taxes)} 	imes 20\%$$

---

## 2. Prepayment of Income Tax (ប្រាក់រំដោះពន្ធលើប្រាក់ចំណូល)

### Step 1: Identify Liability
Applies monthly to real regime enterprise taxpayers (Self-Assessment taxpayers), including Qualified Investment Projects (QIPs) that are taxed at a reduced 9% income tax rate. QIPs in their designated tax-free holiday period are exempt.

### Step 2: Establish the Tax Base
The tax base is the monthly turnover inclusive of all taxes except VAT. If the input turnover includes a 10% standard VAT, factor out the VAT using:
$$	ext{Tax Base} = rac{	ext{Turnover inclusive of VAT}}{1.1}$$

### Step 3: Compute Prepayment
$$	ext{Prepayment Amount} = 	ext{Tax Base} 	imes 1\%$$

---

## 3. Public Lighting Tax (អាករសម្រាប់បំភ្លឺសាធារណៈ)

### Step 1: Identify Targeted Commodities
Applies to the supply of alcohol (wines, beer, spirits) and tobacco (cigarettes, cigars). Exemptions include family-scale produced traditional white rice wine, palm wine, and raw tobacco leaf.

### Step 2: Formulate Tax Base by Supply Level
* **For Manufacturers / First-time Sellers (First Supply):** $$	ext{Tax Base} = 	ext{Supply Value} + 	ext{Other Applicable Taxes (excluding VAT and PLT itself)}$$
    * *Derived from a VAT & PLT inclusive gross invoice price:*
$$	ext{Tax Base} = rac{\left(rac{	ext{Invoice Price}}{1.10}
ight)}{1.05}$$
* **For Resellers (Wholesalers, Distributors, Retailers):** The tax base is fixed at a restricted **20%** portion of the primary net value.
$$	ext{Tax Base} = \left[ rac{\left(rac{	ext{Invoice Price}}{1.10}
ight)}{1.05} 
ight] 	imes 20\%$$

### Step 3: Calculate the Tax
$$	ext{Public Lighting Tax Due} = 	ext{Tax Base} 	imes 5\%$$

---

## 4. Special Tax on Certain Goods and Services (អាករពិសេស)

### Step 1: Define Tax Base
* **Locally Manufactured Goods:** Equates to **90%** of the supply invoice value stripped of VAT and the Special Tax itself.
$$	ext{Tax Base} = 90\% 	imes \left( rac{	ext{Gross Selling Price}}{1.10 	imes (1 + 	ext{Statutory Tax Rate})} 
ight)$$
* **Services:** Net invoice supply value stripped of VAT and the Special Tax itself.
* **Imported Goods:** Base contains Customs Value plus Import Duties.
$$	ext{Tax Base} = 	ext{CIF Value} + 	ext{Import Duty}$$

### Step 2: Rate Architecture
* **Goods (Manufactured/Imported):**
    * Alcohol/Spirits: **35%**
    * Beer: **30%**
    * Cigars: **25%**
    * Cigarettes: **20%**
    * Soft Drinks / Processed Beverages: **10%**
    * Cement: **5%** (Note: Cross-check flags for state-absorbed local exemptions).
* **Services:**
    * Entertainment (Karaoke, Discotheques, Bars, Massage, Golf, Games): **10%**.
    * Air Passenger Transportation (Domestic and International): **10%**.
        * *Special rule for round-trip tickets departing Cambodia:* The tax base is halved to **50%** of the net ticket value.
    * Telecommunication Services: **3%**.

### Step 3: Compute Special Tax Due
$$	ext{Special Tax Amount} = 	ext{Tax Base} 	imes 	ext{Statutory Tax Rate}$$

---

## 5. Accommodation Tax (អាករលើការស្នាក់នៅ)

### Step 1: Establish Room Tax Base
Applies to paid stays at lodging facilities (Hotels, Motels, Resorts, Bungalows, Guesthouses) operating under the Self-Assessment regime. Short/long term standard flat or apartment leases are exempt.
$$	ext{Tax Base} = 	ext{Room Rate} + 	ext{Service Charges} + 	ext{Other Linked Expenses (excluding VAT and Accommodation Tax)}$$

### Step 2: Compute Tax Due
$$	ext{Accommodation Tax} = 	ext{Tax Base} 	imes 2\%$$

---

## 6. Withholding Tax / WHT (ពន្ធកាត់ទុក)

### Step 1: Filter by Residency Status
Categorize payments depending on whether the recipient is a Resident or Non-Resident entity/individual.

### Step 2: Assign Rates by Category
* **Payments to Residents (និវាសនជន):**
    * **15% Rate:** Applies to service fees paid to non-registered individuals, Royalties, and loan Interest (excluding interest paid to local banks).
    * **10% Rate:** Rental of movable or immovable property.
    * **6% Rate:** Fixed/Term deposit savings interest paid by domestic banks.
    * **4% Rate:** Non-fixed/Savings account interest paid by domestic banks.
    * *Self-Assessment to Self-Assessment Service Exception:* WHT on general services is **0%** if both parties are registered under the Self-Assessment regime and a valid tax invoice is produced. However, **Rental (10%)**, **Interest (15%)**, and **Royalties (15%)** are always withheld between registered businesses.
* **Payments to Non-Residents (អនិវាសនជន):**
    * **14% Rate:** Applies to all Cambodian-sourced income streams (Interest, Dividends, Service Fees, Royalties, Technical/Management fees, Property Rentals) paid to a non-resident.

### Step 3: Compute WHT Due
$$	ext{Withholding Tax Amount} = 	ext{Gross Payment Value} 	imes 	ext{Assigned Tax Rate}$$

---

## 7. Value Added Tax / VAT (អាករលើតម្លៃបន្ថែម)

### Step 1: Filter Nontaxable Supplies (Exemptions)
If a supply matches an exemption category below, output VAT is zero and input VAT mapping rules apply:
* Public postal services.
* Hospitals, medical clinics, and dental services.
* Fully state-owned public transportation networks.
* Insurance services.
* Basic financial services.
* Unprocessed local agricultural goods.
* Clean water and electrical energy supply.
* Public solid or liquid waste collection services.

### Step 2: Assign Core Output Rates
* **0% Rate (Zero-Rated):** Exported items, services utilized entirely outside Cambodia, and international freight/passenger transport.
* **10% Rate (Standard Rate):** Applied to standard domestic commercial distributions and import activities.

### Step 3: Calculate Gross Output VAT
$$	ext{Output VAT} = 	ext{Net Taxable Supply Value} 	imes 	ext{VAT Rate}$$
* For standard product importations, calculate the net base as follows:
$$	ext{Tax Base} = 	ext{CIF Customs Value} + 	ext{Import Duty} + 	ext{Special Tax (if applicable)}$$

### Step 4: Compute Allowable Input VAT Credit
Sum all valid VAT paid on local asset acquisitions or product imports.
* **Blocked Input Credits:** Input VAT paid on passenger vehicles ($\le 10$ seats), entertainment/hospitality costs, and mobile telecommunication charges are strictly non-deductible.
* **Pro-Rata Apportionment Formula:** If inputs are shared across taxable and non-taxable activities and cannot be cleanly separated, apply the statutory ratio:
$$	ext{Allowable Input Credit} = 	ext{Total Mixed Input VAT} 	imes \left( rac{	ext{Total Taxable Sales Value}}{	ext{Total Taxable + Non-Taxable Sales Value}} 
ight)$$
    * *Year-End Adjustment Rule:* If the full-year ratio ($Sales_{Taxable} / Sales_{Total}$) sits between 0.05 and 0.95, enforce the exact percentage. If it drops below 0.05, input VAT allowed is **0%**. If it exceeds 0.95, full input VAT (**100%**) is deductible.
* **Small Taxpayer Rule:** For classified small taxpayers, the law grants a flat 80% deemed input VAT credit scheme. The calculation structure is handled via:
$$	ext{Net Paybable VAT (Small Taxpayer)} = (	ext{Net Turnover Base} 	imes 20\%) 	imes 10\%$$

### Step 5: Monthly Net Reconciliation
$$	ext{Net Monthly VAT Position} = 	ext{Total Allowed Output VAT} - 	ext{Total Allowed Input VAT Credit}$$
* **Positive Balance:** The entity must remit the net tax balance to the GDT by the 20th of the following month.
* **Negative Balance:** Converts into a VAT Credit Carried Forward (Deemed Credit Note) for future months or sets a trigger for tax refund processing.

---

## 8. Error Handling Path and Validation Rules

To ensure a reliable tax calculation engine, all input data and calculation steps must follow a defined error handling path.

### Step 1: Validate Inputs Before Calculation
* Verify required fields are present for each tax type.
* Confirm numeric values are within expected ranges and currencies are normalized.
* Validate residency, taxpayer status, invoice type, and service categorization before applying rates.
* Reject malformed or missing data with a structured error response.

### Step 2: Use a Structured Error Path
Each error should include a path that identifies:
* the tax module (e.g., `salary`, `vat`, `wht`, `plt`, `st`)
* the processing stage (e.g., `validation`, `calculation`, `reconciliation`)
* the field or rule that failed (e.g., `netSalary`, `invoiceDate`, `taxRate`)

Example error path structure:
* `salary.validation.grossSalaryMissing`
* `vat.calculation.taxBaseMismatch`
* `wht.validation.residencyStatusInvalid`

### Step 3: Return Consistent Error Details
Structured error objects should include:
* `path`: the error route identifier
* `code`: a short machine-friendly error code
* `message`: a human-readable explanation
* `details`: optional additional context or invalid values

### Step 4: Preserve Auditability
* Log the full error path and input context for each failed request.
* Classify errors as `validation`, `business rule`, or `system` failures.
* Ensure errors are traceable through downstream reporting and audit review processes.

## 9. Non-Compliance and Penalties (បទល្មើសបទប្បញ្ញត្តិស្តីពីពន្ធដារ)

To support complete administrative evaluations, your calculation engine must incorporate standard audit recalculation steps for overdue liabilities:

* **Obstruction of Tax Implementation (អំពើរាំងស្ទះ):** Fixed fine of **2,000,000 Riels** per occurrence (e.g., failure to maintain records, register, or submit zero returns past 30 days).
* **Understatement of Tax / Negligence (ការធ្វេសប្រហែស):**
    * Underpayment $\le 10\%$ of total liability: **10% penalty** on the unpaid tax deficit.
    * Underpayment $> 10\%$ of total liability (Serious Negligence): **25% penalty** on the unpaid tax deficit.
* **Unilateral Assessment (ការកំណត់ពន្ធជាឯកតោភាគី):** **40% penalty** on the calculated tax balance deficit.
* **Late Payment Interest:** A compounding late interest charge of **1.5% per month** calculated against the core unpaid tax balance.
