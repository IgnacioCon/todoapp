

const Filter = () => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter todos..."/>
      <input type="checkbox" style={{marginRight: 5, cursor: 'pointer'}} />
      <span>Hide completed</span>
    </div>
  )
}

export default Filter;