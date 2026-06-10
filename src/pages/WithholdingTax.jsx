import { useState } from 'react'
import { calculateWithholdingTax, WITHHOLDING_PAYMENT_TYPES } from '../calculators/withholdingTax'
import { formatKHR, formatPercent } from '../utils/formatCurrency'
import { parseAmount } from '../utils/validators'
import ResultCard from '../components/ui/ResultCard'
import ResultActions from '../components/ui/ResultActions'
import TaxDetails from '../components/shared/TaxDetails'
import { WITHHOLDING_TAX_DETAILS } from '../constants/taxDetails'
import './Page.css'

export default function WithholdingTax() {
  const [amount, setAmount] = useState('')
  const [paymentType, setPaymentType] = useState(WITHHOLDING_PAYMENT_TYPES[0].key)
  const [result, setResult] = useState(null)

  function handleCalculate(e) {
    e.preventDefault()
    setResult(calculateWithholdingTax(parseAmount(amount), paymentType))
  }

  return (
    <div className="page">
      <p className="page__eyebrow">ពន្ធកាត់ទុក</p>
      <h1 className="page__title">ម៉ាស៊ីនគណនាពន្ធកាត់ទុក</h1>
      <p className="page__subtitle">គណនាពន្ធដែលត្រូវកាត់ទុកតាមប្រភេទការទូទាត់ និងអត្រាពន្ធដែលបានកំណត់។</p>
      <form className="page__form" onSubmit={handleCalculate}>
        <div className="form-group">
          <label className="form-label" htmlFor="paymentType">ប្រភេទការទូទាត់</label>
          <select
            id="paymentType"
            className="form-input"
            value={paymentType}
            onChange={e => { setPaymentType(e.target.value); setResult(null) }}
          >
            {WITHHOLDING_PAYMENT_TYPES.map(type => (
              <option key={type.key} value={type.key}>
                {type.label} ({formatPercent(type.rate, 0)})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="withholdingAmount">ចំនួនទូទាត់សរុប (រៀល)</label>
          <input
            id="withholdingAmount"
            className="form-input"
            type="number"
            min="0"
            placeholder="ឧ. ១០,០០០,០០០"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-primary">គណនាពន្ធកាត់ទុក</button>
      </form>

      {result && (
        <div className="page__results">
          <h2 className="results__heading" lang="km">លទ្ធផលគណនា</h2>
          <ResultActions filename="withholding-tax-summary.txt" />
          <ResultCard label="ចំនួនទូទាត់សរុប" value={formatKHR(result.grossAmount)} />
          <ResultCard label="អត្រាពន្ធកាត់ទុក" value={formatPercent(result.rate, 0)} />
          <ResultCard label="ពន្ធដែលត្រូវកាត់ទុក" value={formatKHR(result.taxAmount)} highlight />
          <ResultCard label="ចំនួនទូទាត់សុទ្ធ" value={formatKHR(result.netPayment)} />
          <p className="results__note" lang="km">
            ប្រភេទដែលបានជ្រើសរើស៖ <strong>{result.label}</strong>។ សូមពិនិត្យលក្ខខណ្ឌលើកលែង និងវិក្កយបត្រមុនដាក់ប្រកាស។
          </p>
        </div>
      )}

      <TaxDetails data={WITHHOLDING_TAX_DETAILS} />
    </div>
  )
}
