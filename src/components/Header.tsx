export default function Header() {
  return (
    <>
      <header className="w-100 flex justify-between items-center mb-4">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full h-12 w-12"
            src="https://github.com/HenriqueMarcelo.png"
          />
          <div className="flex flex-col">
            <strong className="">Marcelo Henrique</strong>
            <span className="text-xs text-lime-400">Online</span>
          </div>
        </div>
        <div>x</div>
      </header>
      <h5 className="text-center mb-8">Hoje 11:30</h5>
    </>
  )
}
