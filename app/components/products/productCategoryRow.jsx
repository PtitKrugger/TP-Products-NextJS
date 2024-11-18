/**
 * Ligne de tableau affichant la catégorie
 * @param {string} categoryName 
 * @returns 
 */
export function ProductCategoryRow({categoryName}) {
    return (
       <tr>
          <th colSpan="2" className="text-center table-group-divider">{categoryName}</th>
       </tr>
    );
 }