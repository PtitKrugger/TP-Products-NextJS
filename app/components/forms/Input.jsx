/**
 * @param {string} placeholder 
 * @param {string} value
 * @param {(s: string) => void} onChange
 * @returns {JSX.Element}
 */
export function Input({ placeholder, value, onChange }) {
   return (
      <div>
         <input
            className="form-control me-2"
            type="search" 
            placeholder={placeholder} 
            value={value}
            onChange={(event) => onChange(event.target.value)} 
         />
      </div>
   );
}