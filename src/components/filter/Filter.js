
const Filter = ({search, onFilter}) => {

  return (
    <div className="filter">
      <input
        type="text" 
        placeholder="Filter todos..."
        value={search}
        onChange={(e) => onFilter(e.target.value)}
      />
      <input type="checkbox" style={{marginRight: 5, cursor: 'pointer'}} />
      <span>Hide completed</span>
    </div>
  )
}

export default Filter;