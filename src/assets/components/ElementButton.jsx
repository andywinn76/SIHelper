function ElementButton({children, onClick}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default ElementButton
