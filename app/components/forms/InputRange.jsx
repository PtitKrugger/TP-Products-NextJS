/**
 * 
 * @param {number} id
 * @param {number} value
 * @param {(v: number) => void} onChange
 * @param {string} label 
 * @returns {JSX.Element}
 */

export function InputRange({id, value, onChange, label}) {
    return (
        <div className="mt-2">        
            <input 
                id={id}
                type="range"
                className="form-range"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                min = {1}
                max = {10}
            />
            <label htmlFor={id} className="form-check-label ms-2">{label}</label>
        </div>
    )
}