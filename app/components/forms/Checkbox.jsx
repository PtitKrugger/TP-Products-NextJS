/**
 * @param {boolean} checked 
 * @param {(v: boolean) => void} onChange
 * @param {string} label
 * @param {string} id
 * @returns {JSX.Element}
 */
export function CheckBox({ checked, onChange, label, id }) {
	return (
		<div className="mt-2">
			<input
				id={id}
				type="checkbox" 
				className="form-check-input" 
				checked={checked} 
				onChange={() => onChange(!checked)} 
			/>
			<label htmlFor={id} className="form-check-label ms-2">{label}</label>
		</div>
	);
}