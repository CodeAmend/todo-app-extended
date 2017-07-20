let Link = ({ active, children, onClick }) => {
  
  if (active) return <div>{children}</div>

  return (
    <a href="#" onClick={ () => { onClick() } }>{children}</a>
  )
}

export default Link;

